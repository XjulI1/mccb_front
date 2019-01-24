import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios/index'
import config from '@/config'

import User from './user.js'
import Category from './category.js'
import Operation from './operation.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: User,
    category: Category,
    operation: Operation
  },
  state: {
    activeAccount: {},
    accountList: [],
    currency: '€'
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
    },

    totalAvailable (state, getters) {
      let availableAndPorteFeuilleAccounts = getters.availableCompte.concat(getters.porteFeuilleCompte)

      return availableAndPorteFeuilleAccounts.reduce((acc, account) => {
        acc += account.solde
        return Math.round(acc * 100) / 100
      }, 0)
    },

    totalGlobal (state, getters) {
      return getters.bloquedCompte.reduce((acc, account) => {
        acc += account.solde
        return Math.round(acc * 100) / 100
      }, getters.totalAvailable)
    }
  },
  mutations: {
    setActiveAccount (state, activeAccount) {
      state.activeAccount = activeAccount
    },

    setCheckedSolde (state, TotalChecked) {
      Vue.set(state.activeAccount, 'soldeChecked', Math.round((state.activeAccount.solde + TotalChecked) * 100) / 100)
    },

    setNotCheckedSolde (state, TotalNotChecked) {
      TotalNotChecked = parseFloat(TotalNotChecked || 0)
      TotalNotChecked = Math.round((state.activeAccount.soldeChecked + TotalNotChecked) * 100) / 100

      Vue.set(state.activeAccount, 'soldeNotChecked', TotalNotChecked)

      state.accountList.find((account) => {
        if (account.IDcompte === state.activeAccount.IDcompte) {
          account.solde = TotalNotChecked
          return account
        }
      })
    },

    setAccountList (state, accountList) {
      state.accountList = accountList
    },

    setSumAllCompteForUser (state, sumList) {
      state.accountList.forEach((account, index) => {
        let sum = sumList.filter(sum => sum.IDCompte === account.IDcompte)

        if (sum[0]) {
          state.accountList[index].solde += sum[0].TotalChecked
          state.accountList[index].solde += sum[0].TotalNotChecked || 0

          state.accountList[index].solde = Math.round(state.accountList[index].solde * 100) / 100
        }
      })
    }
  },
  actions: {
    initialState () {
      this.dispatch('fetchUser', 1)
        .then(() => {
          this.dispatch('fetchActiveAccount', this.state.user.favoris)
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
      let filter = { where: { IDuser: this.state.user.id, visible: true }, order: 'NomCompte ASC' }

      axios.get(config.API_URL + '/api/Comptes?filter=' + JSON.stringify(filter))
        .then((response) => {
          context.commit('setAccountList', response.data)

          this.dispatch('sumAllCompteForUser')
        })
    },

    fetchSumForACompte (context) {
      axios.get(config.API_URL + '/api/Operations/sumForACompte?id=' + this.state.activeAccount.IDcompte)
        .then((response) => {
          context.commit('setCheckedSolde', response.data.results.TotalChecked)
          context.commit('setNotCheckedSolde', response.data.results.TotalNotChecked)
        })
    },

    sumAllCompteForUser (context) {
      axios.get(config.API_URL + '/api/Operations/sumAllCompteForUser?userID=' + this.state.user.id)
        .then((response) => {
          context.commit('setSumAllCompteForUser', response.data.results)
        })
    }
  }
})
