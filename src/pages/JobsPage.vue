<template>
  <div class="container-fluid">
    <b
      title="Create Job"
      class="
        create-btn
        btn btn-success
        rounded-pill
        shadow
        d-flex
        align-items-center
        justify-content-center
      "
      data-bs-toggle="modal"
      data-bs-target="#form-modal"
    >
      <i class="mdi mdi-plus"></i>
    </b>
    <div class="row">
      <div class="col-3 p-2 jobs" v-for="j in jobs" :key="j.id">
        <Job :job="j" />
      </div>
    </div>
    <Modal>
      <template #modal-title>Create Job</template>
      <template #modal-body><JobForm /></template>
    </Modal>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { jobsService } from "../services/JobsService";
import { logger } from "../utils/Logger";
import Job from "../components/Job.vue";

export default {
  setup() {
    onMounted(async () => {
      try {
        await jobsService.getAll();
      } catch (error) {
        logger.error(error);
      }
    });

    return {
      jobs: computed(() => AppState.jobs),
    };
  },
};
</script>


<style lang="scss" scoped>
.create-btn {
  font-size: 20px;
  height: 60px;
  width: 60px;
  z-index: 100;
  position: fixed;
  bottom: 10vh;
  right: 5vh;
}
</style>