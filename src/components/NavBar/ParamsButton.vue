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

<style lang="scss" scoped>
  @import '@/global.scss';

  button {
    width: 19%;
    height: $navbar-height;
    font-size: 1.2rem;
    line-height: 1.1rem;
    font-weight: 600;
  }
</style>
