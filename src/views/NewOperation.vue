<template>
  <div>
    <route-over-the-content component-name="operation-form" :params="params"/>
  </div>
</template>

<script>
  import RouteOverTheContent from '../components/RouteOverTheContent'

  export default {
    name: 'NewOperation',
    components: { RouteOverTheContent },
    data () {
      return {
        params: {
          operation: {
            'NomOp': '',
            'MontantOp': 0,
            'DateOp': new Date(),
            'CheckOp': false,
            'IDcompte': this.$store.state.activeAccount.IDcompte,
            'IDcat': 0
          }
        }
      }
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>

</style>
