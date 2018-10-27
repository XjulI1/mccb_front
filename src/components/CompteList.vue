<template>
  <div class="compte-list">
    <compte :account-informations="account" v-for="account in $store.getters.availableCompte"
            v-bind:key="'account-' + account.IDcompte"/>
    <div>-</div>
    <compte :account-informations="account" v-for="account in $store.getters.bloquedCompte"
            v-bind:key="'account-' + account.IDcompte"/>
    <div>-</div>
    <compte :account-informations="account" v-for="account in $store.getters.porteFeuilleCompte"
            v-bind:key="'account-' + account.IDcompte"/>
  </div>
</template>

<script>
  import Compte from './CompteList/Compte'

  import { mapState } from 'vuex'

  export default {
    name: 'CompteList',
    components: { Compte },

    computed: mapState(['accountList']),

    data () {
      return {}
    },

    created () {
      this.$store.dispatch('fetchAccountList')
    },

    methods: {}
  }
</script>

<style scoped>

</style>
