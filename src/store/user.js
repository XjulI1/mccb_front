import axios from 'axios/index'
import config from '@/config'

export default {
  state: {
    id: undefined,
    favoris: undefined
  },
  getters: {
    userID (state) {
      return state.id
    }
  },
  mutations: {
    setUser (state, user) {
      state.id = user.id
      state.favoris = user.favoris
    }
  },
  actions: {
    fetchUser (context, userID) {
      return axios.get(config.API_URL + '/api/users/' + userID)
        .then((response) => {
          context.commit('setUser', response.data)
        })
    }
  }
}
