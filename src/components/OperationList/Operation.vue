<template>
  <div class="operation">
    <div class="container">
      <div class="row">
        <div class="col-1">
          <input type="checkbox" :id="checkBoxID" v-model="operation.CheckOp"/>
        </div>
        <div class="col-7" :class="css.category">
          <label :for="checkBoxID">
            {{operation.NomOp}}
            <br>
            {{dateOperation}}
          </label>
        </div>
        <div class="col-3 center-text" :class="css.montant">
          {{operation.MontantOp}}{{CURRENCY}}
        </div>
        <div class="col-1">
          ...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Operation',
    props: ['operation'],

    data () {
      return {
        dateOperation: new Date(this.operation.DateOp).toLocaleDateString(),
        CURRENCY: '€',
        css: {
          category: this.operation.IDcat === 0 ? 'noCategory' : '',
          montant: this.operation.MontantOp > 0 ? 'montantIn' : 'montantOut'
        },
        checkBoxID: 'checkboxOperationID-' + this.operation.IDop
      }
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>

  input[type=checkbox] {
    margin-top: 1.0rem;
  }

  .center-text {
    text-align: center;
  }

  .montantIn {
    color: green;
  }

  .montantOut {
    color: red
  }

  .noCategory {
    color: grey;
  }
</style>
