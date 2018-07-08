import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios/index'
import config from '@/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    activeAccount: {}
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
    }
  }
})
