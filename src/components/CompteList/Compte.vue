<template>
  <div class="account-informations container" :class="classPointer" @click="getAccountDetails">
    <div class="row">
      <div class="col-7" :class="classBoldTitle">
        {{accountInformations.NomCompte}}
      </div>
      <div class="col-5 account-solde">
        {{accountInformations.solde.toLocaleString()}} {{$store.state.currency}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Compte',
    props: ['accountInformations', 'boldTitle', 'disableClick'],

    data () {
      return {
        classBoldTitle: this.boldTitle ? 'bold-title' : '',
        classPointer: this.disableClick ? '' : 'cursor-pointer'
      }
    },

    methods: {
      getAccountDetails () {
        if (!this.disableClick) {
          this.$store.dispatch('fetchActiveAccount', this.accountInformations.IDcompte)
        }
      }
    }
  }
</script>

<style scoped>
  .account-informations {
    padding: 8px;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .bold-title {
    font-weight: bold;
  }

  .account-solde {
    text-align: right
  }
</style>
