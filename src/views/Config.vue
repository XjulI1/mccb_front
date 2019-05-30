<template>
  <div>
    <a href="/">Reload App</a>
  </div>
</template>

<script>
  export default {
    name: 'Config',
    data () {
      return {}
    },

    created () {
      this.$store.commit('setActiveAccount', { NomCompte: 'Configurations' })
    },

    methods: {}
  }
</script>

<style scoped>

</style>
