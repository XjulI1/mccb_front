<template>
  <div class="account-header">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <search-button/>
        </div>
        <div class="col-6 account-info">
          <div>
            {{$store.state.activeAccount.NomCompte}}
          </div>
          <div :class="$store.state.activeAccount.NomCompte.includes('récurrentes') ? 'no-total' : ''">
            {{($store.state.activeAccount.soldeNotChecked | 0).toLocaleString()}} {{$store.state.currency}} -
            [{{($store.state.activeAccount.soldeChecked | 0).toLocaleString()}}
            {{$store.state.currency}}]
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
    components: { ChartsButton, SearchButton }
  }
</script>

<style lang="scss" scoped>
  @import '@/global.scss';

  .no-total {
    display: none
  }

  .account-header {
    height: $header-account-height;
    width: 100%;
    background-color: rgba(200, 200, 200, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    padding-top: 10px;
    z-index: 100;

    .container {
      margin-left: auto !important;
      margin-right: auto !important;
    }

    .col-3 {
      padding: 0
    }

    .account-info {
      font-weight: bold;
      font-size: 1.1rem;
      padding: 0;
    }
  }
</style>
