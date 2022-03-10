<template>
  <div class="row justify-content-center">
    <div class="col-8 p-3">
      <div class="text-center shadow bg-light p-3">
        <h2>{{ job.company }}</h2>
        <h4>{{ job.jobTitle }}</h4>
        <h5>Hours: {{ job.hours }} per week</h5>
        <h5>Pay Rate: ${{ job.rate }} per hour</h5>
        <h6>{{ job.description }}</h6>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { useRoute } from "vue-router";
import { jobsService } from "../services/JobsService";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        AppState.activeJob = {};
        logger.log(route.params);
        await jobsService.getById(route.params.id);
      } catch (error) {
        logger.error(error);
      }
    });
    return {
      job: computed(() => AppState.activeJob),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>