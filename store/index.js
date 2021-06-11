import createPersistedState from 'vuex-persistedstate'
export const plugins = [createPersistedState()]
export const state = () => ({
  setInfo: '',
  token: '',
  LoginType: {
    type: 'login',
    isLogin: false
  }
})

export const mutations = {
  setToken: function(state, value) {
    state.token = value
  },
  setInfo: function(state, value) {
    state.setInfo = value
  },
  setIsLogin: function(state, value) {
    state.LoginType = value
  }
}
