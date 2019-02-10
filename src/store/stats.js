import Vue from 'vue'

import axios from 'axios/index'
import config from '@/config'

export default {
  state: {
    negativeMonth: 0,
    currentMonth: (new Date()).getMonth() + 1,
    currentYear: (new Date()).getFullYear(),
    negativeByAccount: {}
  },
  getters: {},
  mutations: {
    setNegativeMonth (state, sum) {
      state.negativeMonth = sum
    },

    pushNewNegativeAccount (state, accountValues) {
      Vue.set(state.negativeByAccount, accountValues.IDcompte, accountValues.total)

      // state.negativeByAccount[accountValues.IDcompte] = accountValues.total
    }
  },
  actions: {
    fetchSumByUserByMonth (context) {
      let urlParams = '?userID=' + this.state.user.id + '&monthNumber=' + this.state.stats.currentMonth + '&yearNumber=' + this.state.stats.currentYear

      axios.get(config.API_URL + '/api/Operations/sumByUserByMonth' + urlParams)
        .then((response) => {
          context.commit('setNegativeMonth', response.data.results[0].MonthNegative)
        })

      this.getters.availableCompte.forEach((account) => {
        axios.get(config.API_URL + '/api/Operations/sumByUserByMonth' + urlParams + '&IDCompte=' + account.IDcompte)
          .then((response) => {
            context.commit('pushNewNegativeAccount', {
              IDcompte: account.IDcompte,
              total: response.data.results[0].MonthNegative
            })
          })
      })
    }
  }
}
