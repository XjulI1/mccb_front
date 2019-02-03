import axios from 'axios/index'
import config from '@/config'

export default {
  state: {
    negativeMonth: 0,
    negativeMonthFavorite: 0,
    currentMonth: (new Date()).getMonth() + 1,
    currentYear: (new Date()).getFullYear()
  },
  getters: {},
  mutations: {
    setNegativeMonth (state, sum) {
      state.negativeMonth = sum
    },

    setNegativeMonthFavorite (state, sum) {
      state.negativeMonthFavorite = sum
    }
  },
  actions: {
    fetchSumByUserByMonth (context) {
      let urlParams = '?userID=' + this.state.user.id + '&monthNumber=' + this.state.stats.currentMonth + '&yearNumber=' + this.state.stats.currentYear

      axios.get(config.API_URL + '/api/Operations/sumByUserByMonth' + urlParams)
        .then((response) => {
          context.commit('setNegativeMonth', response.data.results[0].MonthNegative)
        })

      axios.get(config.API_URL + '/api/Operations/sumByUserByMonth' + urlParams + '&IDCompte=' + this.state.user.favoris)
        .then((response) => {
          context.commit('setNegativeMonthFavorite', response.data.results[0].MonthNegative)
        })
    }
  }
}
