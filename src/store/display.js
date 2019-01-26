export default {
  state: {
    account_list: false
  },
  getters: {},
  mutations: {
    toggleAccountList (state, force) {
      state.account_list = force || !state.account_list
    }
  },
  actions: {
    toggleAccountList (context, force) {
      context.commit('toggleAccountList', force)
    }
  }
}
