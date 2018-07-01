<template>
  <div class="home">
    <account-header/>
    <navbar/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import AccountHeader from '../components/AccountHeader'

  export default {
    name: 'home',
    components: {AccountHeader, Navbar},
    data () {
      return {}
    },

    created () {
    },

    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
