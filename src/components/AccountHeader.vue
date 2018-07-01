<template>
  <div class="account-header">
    <div class="container account-infos">
      <div class="row">
        <div class="col-3">
          <search-button/>
        </div>
        <div class="col-6 account-info">
          <div>
            {{ACCOUNT_NAME}}
          </div>
          <div>
            {{PLANNED_AMOUNT}} {{CURRENCY}} - [{{CURRENT_AMOUNT}} {{CURRENCY}}]
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
    components: {ChartsButton, SearchButton},
    data () {
      return {
        ACCOUNT_NAME: 'ACCOUNT_DEFAULT',
        PLANNED_AMOUNT: 100,
        CURRENCY: '€',
        CURRENT_AMOUNT: 200
      }
    },

    created () {
    },

    methods: {}
  }
</script>

<style lang="scss" scoped>
  .account-header {
    height: 80px;
    width: 100%;
    background-color: lightgrey;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    padding-top: 15px;

    .account-info {
      font-weight: bold;
      font-size: 1.2rem;
      padding: 0;
    }
  }
</style>
