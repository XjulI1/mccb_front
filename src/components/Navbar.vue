<template>
  <div class="main-navbar btn-group" role="group">
    <virement-button/>
    <new-operation-button/>
  </div>
</template>

<script>
  import NewOperationButton from './NewOperationButton'
  import VirementButton from './VirementButton'

  export default {
    name: 'navbar',
    components: {VirementButton, NewOperationButton},
    data () {
      return {}
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>
  .main-navbar {
    height: 50px;
    width: 100%;
    background-color: lightgrey;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
