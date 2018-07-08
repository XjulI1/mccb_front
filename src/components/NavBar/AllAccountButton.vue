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
