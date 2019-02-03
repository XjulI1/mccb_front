<template>
  <div id="app">
    <account-header/>
    <div class="left-panel">
      <compte-list/>
      <navbar/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import CompteList from '@/components/CompteList'
  import AccountHeader from '@/components/AccountHeader'

  export default {
    name: 'App',

    components: { CompteList, AccountHeader, Navbar },

    created () {
      this.$store.dispatch('initialState')
    }
  }
</script>

<style lang="scss">
  @import '@/global.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: $header-account-height + 5;
  }

  .row {
    margin: 0 !important;
    padding: 0 !important
  }

  .container {
    margin: 0 !important;
    padding: 0 !important
  }

  @media screen and (min-width: 768px) {
    .left-panel {
      width: 35%;
      position: fixed;
    }
  }
</style>
