<template>
  <div class="account-informations container" @click="getAccountDetails">
    <div class="row">
      <div class="col-7" :class="classBoldTitle">
        {{accountInformations.NomCompte}}
      </div>
      <div class="col-5 account-solde">
        {{accountInformations.solde}} €
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Compte',

    props: ['accountInformations', 'boldTitle'],

    data () {
      return {
        classBoldTitle: this.boldTitle ? 'bold-title' : ''
      }
    },

    created () {
    },

    methods: {
      getAccountDetails () {
        this.$store.dispatch('fetchActiveAccount', this.accountInformations.IDcompte)
      }
    }
  }
</script>

<style scoped>
  .account-informations {
    padding: 8px;
    cursor: pointer;
  }

  .bold-title {
    font-weight: bold;
  }

  .account-solde {
    text-align: right
  }
</style>
