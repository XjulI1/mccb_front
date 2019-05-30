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
        where: { IDcompte: this.state.activeAccount.IDcompte },
        order: 'CheckOp ASC, DateOp DESC',
        limit: 25
      }

      axios.get(config.API_URL + '/api/Operations', {
        params: {
          access_token: context.rootState.user.token,
          filter
        }
      }).then((response) => {
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
    },

    fetchRecurrOperation (context) {
      context.commit('setOperationsOfActiveAccount', {})
      context.commit('setActiveAccount', { NomCompte: 'Opérations récurrentes' })

      let filter = {
        where: {},
        order: 'DernierDateOpRecu ASC, NomOpRecu ASC'
      }

      axios.get(config.API_URL + '/api/OperationRecurrentes', {
        params: {
          access_token: context.rootState.user.token,
          filter
        }
      })
        .then((response) => {
          context.commit('setOperationsOfActiveAccount', response.data)
        })
    }
  }
}
