<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',

    created () {
      this.$store.dispatch('initialState')
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .row {
    margin: 0 !important;
    padding: 0 !important
  }


  .container {
    margin: 0 !important;
    padding: 0 !important
  }
</style>
