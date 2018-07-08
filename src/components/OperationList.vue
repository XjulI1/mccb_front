<template>
  <div class="operation-list">
    <operation v-for="(operation, index) in operationsOfActiveAccount" v-bind:key="index" :operation="operation"/>
  </div>
</template>

<script>
  import Operation from './OperationList/Operation'
  import {mapState} from 'vuex'

  export default {
    name: 'OperationList',
    components: {Operation},

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
