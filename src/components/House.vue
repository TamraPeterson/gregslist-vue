<template>
  <router-link :to="{ name: 'HouseDetails', params: { id: house.id } }">
    <div class="text-center">
      <img class="img-fluid img" :src="house.imgUrl" alt="" />
      <h5>${{ house.price }}</h5>
      <h6>{{ house.bedrooms }} bedrooms | {{ house.bathrooms }} bathrooms</h6>
      <p>{{ house.description }}</p>
    </div>
  </router-link>
</template>


<script>
export default {
  props: {
    house: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.img {
  height: 300px;
  width: 300px;
  object-fit: cover;
}
</style>