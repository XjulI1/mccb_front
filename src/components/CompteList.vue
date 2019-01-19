<template>
  <div class="compte-list">
    <compte :account-informations="account" v-for="account in $store.getters.availableCompte"
            v-bind:key="'account-' + account.IDcompte"/>
    <hr>
    <compte :account-informations="account" v-for="account in $store.getters.bloquedCompte"
            v-bind:key="'account-' + account.IDcompte"/>
    <hr>
    <compte :account-informations="account" v-for="account in $store.getters.porteFeuilleCompte"
            v-bind:key="'account-' + account.IDcompte"/>
    <hr>
    <compte :account-informations="totalAccounts.available" :boldTitle="cssClasses.compteBoldTitle.boldTitle"/>
    <compte :account-informations="totalAccounts.all" :boldTitle="cssClasses.compteBoldTitle.boldTitle"/>
    <hr>
  </div>
</template>

<script>
  import Compte from './CompteList/Compte'

  import { mapGetters } from 'vuex'

  export default {
    name: 'CompteList',
    components: { Compte },

    computed: { ...mapGetters(['totalAvailable', 'totalGlobal']) },

    watch: {
      totalAvailable (value) {
        this.totalAccounts.available = {
          NomCompte: 'Total disponible',
          solde: value
        }
      },

      totalGlobal (value) {
        this.totalAccounts.all = {
          NomCompte: 'Total global',
          solde: value
        }
      }
    },

    data () {
      return {
        totalAccounts: {
          available: {
            NomCompte: 'Total disponible',
            solde: 0
          },
          all: {
            NomCompte: 'Total global',
            solde: 0
          }
        },
        cssClasses: {
          compteBoldTitle: { boldTitle: true }
        }
      }
    },

    created () {
      this.$store.dispatch('fetchAccountList')
    },

    methods: {}
  }
</script>

<style scoped>
  .compte-list {

  }
</style>
