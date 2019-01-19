<template>
  <div class="home">
    <account-header/>
    <div class="left-panel">
      <compte-list class="compte-list"/>
      <navbar class="navbar"/>
    </div>
    <operation-list class="operation-list"/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import AccountHeader from '../components/AccountHeader'
  import { mapState } from 'vuex'
  import OperationList from '../components/OperationList'
  import CompteList from '../components/CompteList'

  export default {
    name: 'home',
    components: { CompteList, OperationList, AccountHeader, Navbar },

    data () {
      return {}
    },

    computed: mapState(['user', 'activeAccount']),

    created () {
    },

    methods: {}
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

    .compte-list {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .home {
      display: flex;
    }

    .operation-list {
      width: 65%;
      margin-left: 35%;
    }

    .left-panel {
      width: 35%;
      position: fixed;
    }

    .compte-list {
    }
  }
</style>
