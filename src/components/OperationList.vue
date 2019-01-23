<template>
  <div class="operation-list">
    <operation v-for="operation in operationsOfActiveAccount" v-bind:key="'operation-' + operation.IDop" :operation="operation"/>
  </div>
</template>

<script>
  import Operation from './OperationList/Operation'
  import { mapState } from 'vuex'

  export default {
    name: 'OperationList',
    components: { Operation },

    computed: mapState(['operationsOfActiveAccount']),

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
