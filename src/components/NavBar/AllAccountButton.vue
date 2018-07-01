<template>
  <button class="btn btn-warning disabled new-operation-button" v-on:click="openAllAccount">
    <font-awesome-icon icon="list" />
  </button>
</template>

<script>
  export default {
    name: 'AllAccountButton',
    data () {
      return {}
    },

    created () {
    },

    methods: {
      openAllAccount: function () {
      }
    }
  }
</script>

<style scoped>
  button {
    width: 19%;
    height: 50px;
    font-size: 1.2rem;
    line-height: 1.1rem;
    font-weight: 600;
  }
</style>
