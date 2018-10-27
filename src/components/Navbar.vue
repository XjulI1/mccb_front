<template>
  <div class="btn-group main-navbar" role="group">
    <all-account-button/>
    <virement-button/>
    <new-operation-button/>
    <retrait-button/>
    <params-button/>
  </div>
</template>

<script>
  import NewOperationButton from './NavBar/NewOperationButton'
  import VirementButton from './NavBar/VirementButton'
  import RetraitButton from './NavBar/RetraitButton'
  import ParamsButton from './NavBar/ParamsButton'
  import AllAccountButton from './NavBar/AllAccountButton'

  export default {
    name: 'navbar',
    components: { AllAccountButton, ParamsButton, RetraitButton, VirementButton, NewOperationButton },
    data () {
      return {}
    },

    created () {
    },

    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import '@/global.scss';

  .main-navbar {
    padding: 0;

    @media screen and (max-width: 768px) {
      height: $navbar-height;
      width: 100%;
      background-color: lightgrey;
      position: fixed;
      bottom: 0;
      left: 0;
      display: inline;
      text-align: center;
      z-index: 10;
    }
  }
</style>
