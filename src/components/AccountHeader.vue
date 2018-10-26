<template>
  <div class="account-header">
    <div class="container account-infos">
      <div class="row">
        <div class="col-3">
          <search-button/>
        </div>
        <div class="col-6 account-info">
          <div>
            {{$store.state.activeAccount.NomCompte}}
          </div>
          <div>
            {{$store.state.activeAccount.soldeNotChecked}} {{CURRENCY}} - [{{$store.state.activeAccount.soldeChecked}}
            {{CURRENCY}}]
          </div>
        </div>
        <div class="col-3">
          <charts-button/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchButton from './AccountHeader/SearchButton'
  import ChartsButton from './AccountHeader/ChartsButton'

  export default {
    name: 'AccountHeader',
    components: { ChartsButton, SearchButton },

    data () {
      return {
        CURRENCY: '€'
      }
    },

    created () {
    },

    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import '@/global.scss';

  .account-header {
    height: $header-account-height;
    width: 100%;
    background-color: rgba(200, 200, 200, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    padding-top: 10px;
    z-index: 1000;

    .account-info {
      font-weight: bold;
      font-size: 1.2rem;
      padding: 0;
    }
  }
</style>
