<template>
  <div>
    Total ce mois : <b>{{$store.state.stats.negativeMonth}}{{$store.state.currency}}</b>
    <br>
    <br>
    Total N26 : <b>{{$store.state.stats.negativeMonthFavorite}}{{$store.state.currency}}</b>
    <br>
    Par jour : <b>{{Math.round($store.state.stats.negativeMonthFavorite / (new Date().getDate())) *
    -1}}{{$store.state.currency}}</b>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'SumByMonth',

    computed: {
      ...mapState({ userID: state => state.user.id })
    },

    watch: {
      userID () {
        this.$store.dispatch('fetchSumByUserByMonth')
      }
    },

    data () {
      return {}
    },

    created () {
      if (this.userID) {
        this.$store.dispatch('fetchSumByUserByMonth')
      }
    },

    methods: {}
  }
</script>

<style scoped>

</style>
