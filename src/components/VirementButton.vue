<template>
  <button class="btn btn-success disabled new-operation-button" v-on:click="doTransfert">
    <font-awesome-icon icon="exchange-alt" />
  </button>
</template>

<script>
  export default {
    name: 'VirementButton',
    data () {
      return {}
    },

    created () {
    },

    methods: {
      doTransfert: function () {
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
