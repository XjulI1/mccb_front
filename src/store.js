import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios/index'
import config from '@/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    activeAccount: {},
    operationsOfActiveAccount: {}
  },
  getters: {
    // computed properties
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
      return axios.get(config.API_URL + '/api/Comptes/' + accountID)
        .then((response) => {
          context.commit('setActiveAccount', response.data)
        })
    },

    fetchOperationsOfActiveAccount (context) {
      let filter = { 'where': { 'IDcompte': this.state.activeAccount.IDcompte }, 'order': 'DateOp DESC', 'limit': 20 }

      return axios.get(config.API_URL + '/api/Operations/?filter=' + JSON.stringify(filter))
        .then((response) => {
          context.commit('setOperationsOfActiveAccount', response.data)
        })
    }
  }
})
