<template>
  <div class="operation container">
    <div class="row">
      <div class="col-1">
        <input type="checkbox" :id="checkBoxID" v-model="operation.CheckOp" @change="updateCheckOp"/>
      </div>
      <div class="col-7" :class="css.category">
        <label :for="checkBoxID">
          {{operation.NomOp}}
          <br>
          {{dateOperation}}
        </label>
      </div>
      <div class="col-3 center-text" :class="css.montant">
        {{operation.MontantOp}}{{$store.state.currency}}
      </div>
      <div class="col-1">
        <router-link :to="'/editOperation/' + operation.IDop" class="edit-operation">...</router-link>
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
        css: {
          category: this.operation.IDcat === 0 ? 'noCategory' : '',
          montant: this.operation.MontantOp > 0 ? 'montantIn' : 'montantOut'
        },
        checkBoxID: 'checkboxOperationID-' + this.operation.IDop
      }
    },

    methods: {
      updateCheckOp () {
        this.$store.dispatch('updateOperation', this.operation)
      }
    }
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

  .edit-operation {
    text-decoration: none;
  }
</style>
