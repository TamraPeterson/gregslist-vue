<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3" v-for="h in houses" :key="h.id">
        <House :house="h" />
      </div>
      <div class="row justify-content-center">
        <div class="col-4 m-3">
          <b
            title="Create House"
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
            <i class="mdi mdi-plus">Add New</i>
          </b>
        </div>
      </div>
    </div>
    <Modal>
      <template #modal-title>Create House</template>
      <template #modal-body><HouseForm /></template>
    </Modal>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import { housesService } from "../services/HousesService";
import { AppState } from "../AppState";

export default {
  setup() {
    onMounted(async () => {
      try {
        await housesService.getAll();
      } catch (error) {
        logger.log(error);
      }
    });
    return {
      houses: computed(() => AppState.houses),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>