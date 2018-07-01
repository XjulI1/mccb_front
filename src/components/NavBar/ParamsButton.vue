<template>
  <button class="btn btn-danger disabled new-operation-button" v-on:click="changeParams">
    <font-awesome-icon icon="cogs" />
  </button>
</template>

<script>
  export default {
    name: 'ParamsButton',
    data () {
      return {}
    },

    created () {
    },

    methods: {
      changeParams: function () {
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
