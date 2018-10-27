import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios/index'
import config from '@/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    activeAccount: {},
    operationsOfActiveAccount: [],
    accountList: []
  },
  getters: {
    bloquedCompte (state) {
      return state.accountList.filter((account) => {
        if (account.bloque) {
          return account
        }
      })
    },

    availableCompte (state) {
      return state.accountList.filter((account) => {
        if (!account.bloque && !account.porte_feuille) {
          return account
        }
      })
    },

    porteFeuilleCompte (state) {
      return state.accountList.filter((account) => {
        if (account.porte_feuille) {
          return account
        }
      })
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },

    setActiveAccount (state, activeAccount) {
      state.activeAccount = activeAccount
    },

    setOperationsOfActiveAccount (state, operations) {
      state.operationsOfActiveAccount = operations
    },

    setCheckedSolde (state, TotalChecked) {
      Vue.set(state.activeAccount, 'soldeChecked', state.activeAccount.solde + Math.round(TotalChecked * 100) / 100)
    },

    setNotCheckedSolde (state, TotalNotChecked) {
      TotalNotChecked = parseFloat(TotalNotChecked || 0)

      Vue.set(state.activeAccount, 'soldeNotChecked', state.activeAccount.soldeChecked + Math.round(TotalNotChecked * 100) / 100)
    },

    setAccountList (state, accountList) {
      state.accountList = accountList
    }
  },
  actions: {
    fetchUser (context, userID) {
      return axios.get(config.API_URL + '/api/users/' + userID)
        .then((response) => {
          context.commit('setUser', response.data)
        })
    },

    fetchActiveAccount (context, accountID) {
      axios.get(config.API_URL + '/api/Comptes/' + accountID)
        .then((response) => {
          context.commit('setActiveAccount', response.data)

          this.dispatch('fetchOperationsOfActiveAccount')
          this.dispatch('fetchSumForACompte')
        })
    },

    fetchAccountList (context) {
      let filter = { where: { IDuser: this.state.user.id, visible: true } }

      axios.get(config.API_URL + '/api/Comptes?filter=' + JSON.stringify(filter))
        .then((response) => {
          context.commit('setAccountList', response.data)
        })
    },

    fetchOperationsOfActiveAccount (context) {
      let filter = { 'where': { 'IDcompte': this.state.activeAccount.IDcompte }, 'order': 'DateOp DESC', 'limit': 20 }

      axios.get(config.API_URL + '/api/Operations/?filter=' + JSON.stringify(filter))
        .then((response) => {
          context.commit('setOperationsOfActiveAccount', response.data)
        })
    },

    fetchSumForACompte (context) {
      axios.get(config.API_URL + '/api/Operations/sumForACompte?id=' + this.state.activeAccount.IDcompte)
        .then((response) => {
          context.commit('setCheckedSolde', response.data.results.TotalChecked)
          context.commit('setNotCheckedSolde', response.data.results.TotalNotChecked)
        })
    }
  }
})
