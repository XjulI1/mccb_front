<template>
  <div class="operation container">
    <div class="row">
      <div class="col-1">
        <input type="checkbox" :id="checkBoxID" v-model="operation.CheckOp" @change="updateCheckOp"/>
      </div>
      <draggable class="col-7"
                 :class="css.category"
                 @start="startDrag"
                 @end="endDrag"
                 :group="{name: 'operation', pull: 'clone', put: ['false'] }"
                 :data-idcat="operation.IDcat">
        <label :for="checkBoxID" :data-id="operation.IDop">
          {{operation.NomOp}}
          <br>
          {{dateOperation}}
        </label>
      </draggable>
      <div class="col-3 center-text" :class="css.montant">
        {{operation.MontantOp.toLocaleString()}}{{$store.state.currency}}
      </div>
      <div class="col-1">
        <router-link :to="'/editOperation/' + operation.IDop" class="edit-operation">...</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'Operation',
    props: ['operation'],

    components: { draggable },

    watch: {
      operation () {
        this.dateOperation = this.generateDataOperationVariables()
        this.css = this.generateCssVariables()
      }
    },

    data () {
      return {
        dateOperation: this.generateDataOperationVariables(),
        css: this.generateCssVariables(),
        checkBoxID: 'checkboxOperationID-' + this.operation.IDop
      }
    },

    methods: {
      generateCssVariables () {
        return {
          category: this.operation.IDcat === 0 ? 'noCategory' : '',
          montant: this.operation.MontantOp > 0 ? 'montantIn' : 'montantOut'
        }
      },

      generateDataOperationVariables () {
        return new Date(this.operation.DateOp).toLocaleDateString()
      },

      updateCheckOp () {
        this.$store.dispatch('updateOperation', this.operation)
      },

      startDrag (event) {
        this.$store.dispatch('toggleCategoriesDropZone')
        this.$store.dispatch('actualDragCategory', event.srcElement.dataset.idcat)
      },

      endDrag () {
        this.$store.dispatch('toggleCategoriesDropZone')
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
