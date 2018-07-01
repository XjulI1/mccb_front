<template>
  <button class="btn btn-info disabled new-operation-button" v-on:click="searchOperation">
    <font-awesome-icon icon="search" />
  </button>
</template>

<script>
  export default {
    name: 'SearchButton',
    data () {
      return {}
    },

    created () {
    },

    methods: {
      searchOperation: function () {
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
    font-weight: 600;
  }
</style>
