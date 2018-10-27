<template>
  <div class="home">
    <account-header/>
    <navbar class="navbar"/>
    <operation-list class="operation-list"/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import AccountHeader from '../components/AccountHeader'
  import { mapState } from 'vuex'
  import OperationList from '../components/OperationList'

  export default {
    name: 'home',
    components: { OperationList, AccountHeader, Navbar },

    beforeMount () {
      this.$store.dispatch('fetchUser', 1)
        .then(() => {
          return this.$store.dispatch('fetchActiveAccount', this.$store.state.user.favoris)
        })
        .then(() => {
          this.$store.dispatch('fetchOperationsOfActiveAccount')
          this.$store.dispatch('fetchSumForACompte')
        })
    },

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

  @media screen and (max-width: 768px) {
    .home {
      margin-bottom: $navbar-height;
    }
  }

  @media screen and (min-width: 768px) {
    .home {
      display: flex;
    }

    .operation-list {
      width: 65%
    }

    .navbar {
      width: 35%;
    }
  }
</style>
