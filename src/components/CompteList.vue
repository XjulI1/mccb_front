<template>
  <div class="compte-list" :class="$store.state.display.account_list ? '' : 'mask-list'">
    <compte :account-informations="account" v-for="account in $store.getters.availableCompte"
            v-bind:key="'account-' + account.IDcompte"/>
    <hr>
    <compte :account-informations="account" v-for="account in $store.getters.bloquedCompte"
            v-bind:key="'account-' + account.IDcompte"/>
    <hr>
    <compte :account-informations="account" v-for="account in $store.getters.porteFeuilleCompte"
            v-bind:key="'account-' + account.IDcompte"/>
    <hr>
    <compte :account-informations="totalAccounts.available" :boldTitle="cssClasses.compteBoldTitle.boldTitle"
            :disable-click="true" no-color="true"/>
    <compte :account-informations="totalAccounts.all" :boldTitle="cssClasses.compteBoldTitle.boldTitle"
            :disable-click="true" :warning="$store.state.user.warningTotal"/>
  </div>
</template>

<script>
  import Compte from './CompteList/Compte'

  import { mapGetters } from 'vuex'

  export default {
    name: 'CompteList',
    components: { Compte },

    computed: { ...mapGetters(['totalAvailable', 'totalGlobal', 'userID']) },

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
      },

      userID () {
        this.$store.dispatch('fetchAccountList')
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
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/global.scss';

  @media screen and (max-width: 767px) {
    .mask-list {
      display: none;
    }

    .compte-list {
      position: fixed;
      z-index: 1000;
      top: $header-account-height;
      height: calc(100% - 40px - 70px);
      background-color: rgba(242, 242, 242, 0.95);
      width: 100%;
      padding-top: 5px;
    }
  }
</style>
