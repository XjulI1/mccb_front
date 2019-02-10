import Vue from 'vue'

import axios from 'axios/index'
import config from '@/config'

export default {
  state: {
    negativeMonth: 0,
    currentMonth: (new Date()).getMonth() + 1,
    currentYear: (new Date()).getFullYear(),
    negativeByAccount: {},
    categoriesTotal: []
  },
  getters: {
    getCategoriesTotalForHighchartPie (state, getters) {
      return state.categoriesTotal.map((categorie) => {
        return {
          name: getters.getCategoryName(categorie.IDcat)[0].Nom,
          y: categorie.TotalMonth * -1
        }
      })
    }
  },
  mutations: {
    setNegativeMonth (state, sum) {
      state.negativeMonth = sum
    },

    pushNewNegativeAccount (state, accountValues) {
      Vue.set(state.negativeByAccount, accountValues.IDcompte, accountValues.total)
    },

    setCurrentYear (state, newYear) {
      state.currentYear = newYear
    },

    setCurrentMonth (state, newMonth) {
      state.currentMonth = newMonth
    },

    setCategoriesForMonth (state, categoriesList) {
      state.categoriesTotal = categoriesList
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
    },

    fetchSumCategoriesByUserByMonth (context) {
      let urlParams = '?userID=' + this.state.user.id + '&monthNumber=' + this.state.stats.currentMonth + '&yearNumber=' + this.state.stats.currentYear

      context.dispatch('fetchCategoryList')

      axios.get(config.API_URL + '/api/Operations/sumCategoriesByUserByMonth' + urlParams)
        .then((response) => {
          context.commit('setCategoriesForMonth', response.data.results)
        })
    },

    changeStatsCurrentYear (context, newYear) {
      context.commit('setCurrentYear', newYear)

      context.dispatch('fetchSumByUserByMonth')
      context.dispatch('fetchSumCategoriesByUserByMonth')
    },

    changeStatsCurrentMonth (context, newMonth) {
      context.commit('setCurrentMonth', newMonth)

      context.dispatch('fetchSumByUserByMonth')
      context.dispatch('fetchSumCategoriesByUserByMonth')
    }
  }
}
