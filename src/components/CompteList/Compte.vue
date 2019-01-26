<template>
  <div class="account-informations container" :class="classPointer" @click="getAccountDetails">
    <div class="row">
      <div class="col-8" :class="classBoldTitle">
        {{accountInformations.NomCompte}}
      </div>
      <div class="col-4 account-solde" :class="soldeColor">
        {{accountInformations.solde.toLocaleString()}} {{$store.state.currency}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Compte',
    props: ['accountInformations', 'boldTitle', 'disableClick'],

    watch: {
      'accountInformations.solde' () {
        this.soldeColor = this.getSoldeColor()
      }
    },

    data () {
      return {
        soldeColor: this.getSoldeColor(),
        classBoldTitle: this.boldTitle ? 'bold-title' : '',
        classPointer: this.disableClick ? '' : 'cursor-pointer'
      }
    },

    methods: {
      getAccountDetails () {
        if (!this.disableClick) {
          this.$router.push('/')

          this.$store.dispatch('fetchActiveAccount', this.accountInformations.IDcompte)
          this.$store.dispatch('toggleAccountList', false)
        }
      },

      getSoldeColor () {
        return this.accountInformations.solde >= 0 ? 'soldeIn' : 'soldeOut'
      }
    }
  }
</script>

<style scoped>
  .account-informations {
    padding-top: 5px !important;
    padding-bottom: 5px !important;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .bold-title {
    font-weight: bold;
  }

  .soldeIn {
    color: green;
  }

  .soldeOut {
    color: red;
  }

  .account-solde {
    text-align: right
  }

  .col-8 {
    padding-left: 10px;
  }

  .col-4 {
    padding: 0 10px 0 0;
  }
</style>
