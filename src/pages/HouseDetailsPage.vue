<template>
  <div class="row">
    <div class="col-12 p-3">
      <div class="text-center">
        <img class="img-fluid img" :src="house.imgUrl" alt="" />
        <h5>{{ house.price }}</h5>
        <h6>{{ house.bedrooms }} | {{ house.bathrooms }}</h6>
        <p>{{ house.description }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
import { useRoute } from "vue-router";
import { housesService } from "../services/HousesService";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        AppState.activeHouse = {};
        logger.log(route.params);
        await housesService.getById(route.params.id);
      } catch (error) {
        logger.log(error);
      }
    });
    return {
      house: computed(() => AppState.activeHouse),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>