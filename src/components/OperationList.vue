<template>
  <div class="operation-list">
    <operation v-for="operation in operationsOfActiveAccount"
               v-bind:key="'operation-' + operation.IDop"
               v-if="operation.IDop"
               :operation="operation"/>

    <operation-recurrente v-else-if="operation.IDopRecu"
               v-bind:key="'operation-recu-' + operation.IDopRecu"
               :operation="operation"
               recurr="true"/>
  </div>
</template>

<script>
  import Operation from './OperationList/Operation'
  import { mapGetters } from 'vuex'
  import OperationRecurrente from './OperationList/OperationRecurrente'

  export default {
    name: 'OperationList',
    components: { OperationRecurrente, Operation },

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
