<template>
  <button class="btn btn-primary disabled new-operation-button" v-on:click="addOperation">
    <font-awesome-icon icon="plus" />
  </button>
</template>

<script>
  export default {
    name: 'NewOperationButton',
    data () {
      return {}
    },

    created () {
    },

    methods: {
      addOperation: function () {
      }
    }
  }
</script>

<style scoped>
  button {
    width: 28%;
    height: 50px;
    font-size: 1.3rem;
    line-height: 1.1rem;
    font-weight: 600;
  }
</style>
