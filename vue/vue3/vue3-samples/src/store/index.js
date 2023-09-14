import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      isLoggedIn: false,
      currentUser: null,
      loginModal: false,
    }
  },
  mutations: {
    setLogin(state, payload = true) {
      state.isLoggedIn = payload
    },
    setAuthUser(state, payload) {
      state.currentUser = payload;
    },
    setLoginModal(state, payload = true) {
      state.loginModal = payload
    }
  }
})

export default store;