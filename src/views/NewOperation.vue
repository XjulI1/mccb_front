<template>
  <div>
    <route-over-the-content component-name="operation-form" :params="{operation: {}}"/>
  </div>
</template>

<script>
  import RouteOverTheContent from '../components/RouteOverTheContent'

  export default {
    name: 'NewOperation',
    components: { RouteOverTheContent },
    data () {
      return {}
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>

</style>
