<template>
  <form>
    <div class="form-group">
      <label for="bedrooms" class="">Bedrooms:</label>
      <input
        v-model="editable.bedrooms"
        placeholder="Bedrooms"
        type="text"
        class="form-control"
        name="bedrooms"
        id="bedrooms"
        required
      />
    </div>
    <div class="form-group">
      <label for="bathrooms" class="">Bathrooms:</label>
      <input
        v-model="editable.bathrooms"
        placeholder="Bathrooms"
        type="text"
        class="form-control"
        name="bathrooms"
        id="bathrooms"
        required
      />
    </div>
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input
        v-model="editable.price"
        placeholder="Price"
        type="number"
        class="form-control"
        name="price"
        id="price"
        min="0"
        max="9999999"
      />
    </div>
    <div class="form-group">
      <label for="year" class="">Year Built:</label>
      <input
        v-model="editable.year"
        placeholder="Year"
        type="number"
        class="form-control"
        name="year"
        id="year"
        min="0"
        max="9999999"
      />
    </div>
    <div class="form-group">
      <label for="levels" class="">Levels:</label>
      <input
        v-model="editable.levels"
        placeholder="Levels"
        type="number"
        class="form-control"
        name="levels"
        id="levels"
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
    <div class="form-group">
      <label for="img" class="">img:</label>
      <input
        v-model="editable.imgUrl"
        placeholder="https://imgurl.com"
        type="url"
        class="form-control"
        name="img"
        id="img"
        required
      />
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
        v-if="!houseData.id"
        @click="createHouse"
        type="button"
        class="btn btn-success text-dark text-uppercase selectable"
      >
        <b> Create House </b>
      </button>
      <!-- <button
        v-else
        @click="createHouse"
        type="button"
        class="btn btn-info text-warning text-uppercase selectable"
      >
        <b> Edit House </b>
      </button> -->
    </div>
  </form>
</template>


<script>
import { ref, watchEffect } from "vue";
import { logger } from "../utils/Logger";
import { housesService } from "../services/HousesService";
import { Modal } from "bootstrap";

export default {
  props: {
    houseData: {
      type: Object,
      required: false,
      default: {},
    },
  },
  setup(props) {
    const editable = ref({});
    watchEffect(() => {
      logger.log("watch effect edit");
      editable.value = props.houseData;
    });
    return {
      editable,
      async createHouse() {
        try {
          await housesService.createHouse(editable.value);
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