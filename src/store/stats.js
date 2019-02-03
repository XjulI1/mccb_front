import axios from 'axios/index'
import config from '@/config'

export default {
  state: {
    negativeMonth: 0
  },
  getters: {},
  mutations: {
    setNegativeMonth (state, sum) {
      state.negativeMonth = sum
    }
  },
  actions: {
    fetchSumByUserByMonth (context, params) {
      axios.get(config.API_URL + '/Operations/sumByUserByMonth?userID=1&monthNumber=1&yearNumber=2019')
        .then((response) => {
          context.commit('setNegativeMonth', response.data.results[0].MonthNegative)
        })
    }
  }
}
