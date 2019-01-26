export default {
  state: {
    account_list: false,
    categories_drop_zone: false
  },
  getters: {},
  mutations: {
    toggleAccountList (state, force) {
      state.account_list = force || !state.account_list
    },

    toggleCategoriesDropZone (state) {
      state.categories_drop_zone = !state.categories_drop_zone
    }
  },
  actions: {
    toggleAccountList (context, force) {
      context.commit('toggleAccountList', force)
    },

    toggleCategoriesDropZone (context) {
      context.commit('toggleCategoriesDropZone')
    }
  }
}
