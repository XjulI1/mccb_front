<template>
  <div>
    {{accountInformations.NomCompte}}
    {{accountInformations.solde}} €
  </div>
</template>

<script>
  export default {
    name: 'Compte',

    props: ['accountInformations'],

    data () {
      return {}
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>

</style>
