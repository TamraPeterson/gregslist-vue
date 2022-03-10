<template>
  <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
    <div class="text-center shadow p-3 selectable jobs">
      <div class="p-3">
        <h3>{{ job.company }}</h3>
        <h5>{{ job.jobTitle }}</h5>
        <h6>Hours: {{ job.hours }} per week</h6>
        <h6>Pay Rate: ${{ job.rate }} per hour</h6>
        <p>Job Duties: {{ job.description }}</p>
      </div>
    </div>
  </router-link>
</template>


<script>
export default {
  props: {
    job: {
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
.jobs {
  height: 300px;
  width: 300px;
}
</style>