<template>
  <div>
    <route-over-the-content component-name="operation-form" :params="params"/>
  </div>
</template>

<script>
  import RouteOverTheContent from '../components/RouteOverTheContent'

  export default {
    name: 'EditOperation',
    components: { RouteOverTheContent },
    data () {
      return {
        params: {
          operation: this.$store.getters.operationFromCurrentList(this.$route.params.id)
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
