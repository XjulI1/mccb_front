import axios from 'axios/index'
import config from '@/config'

export default {
  state: {
    list: []
  },
  getters: {},
  mutations: {
    setCategoryList (state, list) {
      state.list = list
    }
  },
  actions: {
    fetchCategoryList (context) {
      if (this.state.category.list.length < 5) {
        let filter = { where: { or: [{ IDuser: this.state.user.id }, { IDuser: 0 }] }, order: 'Nom ASC' }

        axios.get(config.API_URL + '/api/Categories?filter=' + JSON.stringify(filter))
          .then((response) => {
            context.commit('setCategoryList', response.data)
          })
      }
    }
  }
}
