<template>
  <div>
    Total ce mois : <b>{{$store.state.stats.negativeMonth}}{{$store.state.currency}}</b>
    <br>
    <br>
    <div v-for="(accountTotal, IDcompte) in $store.state.stats.negativeByAccount" v-bind:key="IDcompte"
         v-if="accountTotal">
      {{$store.getters.getAccountName(IDcompte)[0].NomCompte}} :
      <b>{{accountTotal}} {{$store.state.currency}}</b>
      <div class="parjour">
        par jour :
        {{Math.round(accountTotal / (new Date()).getDate() * -1)}} {{$store.state.currency}}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SumByMonth',

    computed: {
      ...mapGetters(['availableCompte'])
    },

    watch: {
      availableCompte () {
        this.$store.dispatch('fetchSumByUserByMonth')
      }
    },

    data () {
      return {}
    },

    methods: {}
  }
</script>

<style scoped>
  .parjour {
    margin-left: 4%;
    margin-bottom: 10px;
  }

</style>
