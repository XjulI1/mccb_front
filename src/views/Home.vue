<template>
  <div class="home">
    <account-header/>
    <navbar/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import AccountHeader from '../components/AccountHeader'
  import {mapState} from 'vuex'

  export default {
    name: 'home',
    components: {AccountHeader, Navbar},

    beforeMount () {
      this.$store.dispatch('fetchUser', 1)
        .then(() => {
          return this.$store.dispatch('fetchActiveAccount', this.$store.state.user.favoris)
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
<style scoped>
  .home {
    margin-top: 80px;
  }
</style>
