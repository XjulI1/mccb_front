<template>
  <button class="btn btn-secondary disabled new-operation-button" v-on:click="searchOperation">
    <font-awesome-icon icon="chart-pie"/>
  </button>
</template>

<script>
  export default {
    name: 'ChartsButton',

    methods: {
      searchOperation () {
      }
    }
  }
</script>

<style scoped>
  button {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    line-height: 1.1rem;
  }
</style>
