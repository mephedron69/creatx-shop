import { createStore } from 'vuex'

export default createStore({
  state: {
    auth: false
  },
  getters: {
    getAuth(state) {
      return state.auth
    }
  },
  mutations: {
    SET_AUTH(state, auth) {
      state.auth = auth
    },
  },
  actions: {
    checkAuth({ commit }) {
      console.log(localStorage.getItem("login"));
          if (localStorage.getItem("login")) commit("SET_AUTH", true)
          else commit("SET_AUTH", false);
    },
  },
  modules: {
  }
})
