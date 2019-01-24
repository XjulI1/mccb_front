import axios from 'axios/index'
import config from '@/config'

export default {
  state: {
    operationsOfActiveAccount: []
  },
  getters: {
    operationsOfActiveAccount (state) {
      return state.operationsOfActiveAccount
    },
    operationFromCurrentList (state) {
      return (operationID) => {
        return state.operationsOfActiveAccount.filter((operation) => {
          if (parseInt(operationID) === operation.IDop) {
            return operation
          }
        })[0]
      }
    }
  },
  mutations: {
    setOperationsOfActiveAccount (state, operations) {
      state.operationsOfActiveAccount = operations
    }
  },
  actions: {
    fetchOperationsOfActiveAccount (context) {
      let filter = {
        'where': { 'IDcompte': this.state.activeAccount.IDcompte },
        'order': 'CheckOp ASC, DateOp DESC',
        'limit': 25
      }

      axios.get(config.API_URL + '/api/Operations/?filter=' + JSON.stringify(filter))
        .then((response) => {
          context.commit('setOperationsOfActiveAccount', response.data)
        })
    },

    updateOperation (context, operation) {
      axios.patch(config.API_URL + '/api/Operations', operation)
        .then(() => {
          this.dispatch('fetchActiveAccount', operation.IDcompte)
        })
    },

    deleteOperation (context, operation) {
      axios.delete(config.API_URL + '/api/Operations/' + operation.IDop)
        .then(() => {
          this.dispatch('fetchActiveAccount', operation.IDcompte)
        })
    }
  }
}
