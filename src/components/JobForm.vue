<template>
  <form>
    <div class="form-group">
      <label for="company" class="">Company:</label>
      <input
        v-model="editable.company"
        placeholder="Company"
        type="text"
        class="form-control"
        name="company"
        id="company"
        required
      />
    </div>
    <div class="form-group">
      <label for="jobTitle" class="">Job Title:</label>
      <input
        v-model="editable.jobTitle"
        placeholder="Job Title"
        type="text"
        class="form-control"
        name="jobTitle"
        id="jobTitle"
        required
      />
    </div>
    <div class="form-group">
      <label for="rate" class="">Pay Rate:</label>
      <input
        v-model="editable.rate"
        placeholder="Pay Rate"
        type="number"
        class="form-control"
        name="rate"
        id="rate"
        min="0"
        max="9999999"
      />
    </div>
    <div class="form-group">
      <label for="hours" class="">Hours:</label>
      <input
        v-model="editable.hours"
        placeholder="Hours"
        type="number"
        class="form-control"
        name="hours"
        id="hours"
        min="0"
        max="9999999"
      />
    </div>
    <div class="form-group">
      <label for="description" class="">description:</label>
      <textarea
        v-model="editable.description"
        placeholder="Description"
        type="text"
        class="form-control"
        name="description"
        id="description"
        rows="5"
      ></textarea>
    </div>

    <div class="d-flex justify-content-between my-3">
      <button
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close"
        class="btn text-dark lighten-20 text-uppercase selectable"
      >
        <b> cancel </b>
      </button>
      <button
        v-if="!jobData.id"
        @click="createJob"
        type="button"
        class="btn btn-success text-dark text-uppercase selectable"
      >
        <b> Create Job </b>
      </button>
      <button
        v-else
        @click="editJob"
        type="button"
        class="btn btn-info text-warning text-uppercase selectable"
      >
        <b> Edit Job </b>
      </button>
    </div>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import { jobsService } from "../services/JobsService";
import { Modal } from "bootstrap";
export default {
  props: {
    jobData: {
      type: Object,
      required: false,
      default: {},
    },
  },
  setup(props) {
    const editable = ref({});
    watchEffect(() => {
      logger.log("watch effect job edit");
      editable.value = props.jobData;
    });
    return {
      editable,
      async createJob() {
        try {
          await jobsService.createJob(editable.value);
          editable.value = {};
          Modal.getOrCreateInstance(
            document.getElementById("form-modal")
          ).hide();
        } catch (error) {
          logger.error(error);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>