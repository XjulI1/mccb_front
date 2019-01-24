<template>
  <div class="operation-list">
    <operation v-for="operation in operationsOfActiveAccount" v-bind:key="'operation-' + operation.IDop"
               :operation="operation"/>
  </div>
</template>

<script>
  import Operation from './OperationList/Operation'
  import { mapGetters } from 'vuex'

  export default {
    name: 'OperationList',
    components: { Operation },

    computed: mapGetters(['operationsOfActiveAccount'])
  }
</script>

<style scoped>
  @media screen and (min-width: 768px) {
    .operation-list {
      width: 65%;
      margin-left: 35%;
    }
  }
</style>
