<template>
  <div class="home">
    <router-view/>
    <account-header/>
    <div class="left-panel">
      <compte-list/>
      <navbar/>
    </div>
    <operation-list/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import AccountHeader from '../components/AccountHeader'
  import OperationList from '../components/OperationList'
  import CompteList from '../components/CompteList'

  export default {
    name: 'Home',
    components: { CompteList, OperationList, AccountHeader, Navbar }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/global.scss';

  .home {
    margin-top: $header-account-height + 5;
  }

  @media screen and (max-width: 767px) {
    .home {
      margin-bottom: $navbar-height;
    }
  }

  @media screen and (min-width: 768px) {
    .home {
      display: flex;
    }

    .left-panel {
      width: 35%;
      position: fixed;
    }
  }
</style>
