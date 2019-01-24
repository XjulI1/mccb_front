<template>
  <button class="btn btn-primary disabled new-operation-button" v-on:click="addOperation">
    <font-awesome-icon icon="plus"/>
  </button>
</template>

<script>
  export default {
    name: 'NewOperationButton',

    methods: {
      addOperation () {
        this.$router.push('/newOperation')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/global.scss';

  button {
    width: 24%;
    height: $navbar-height;
    font-size: 1.3rem;
    line-height: 1.1rem;
    font-weight: 600;
  }
</style>
