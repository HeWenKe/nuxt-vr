import createPersistedState from 'vuex-persistedstate'
export const plugins = [createPersistedState()]
export const state = () => ({
  isLogin: ''
})

export const mutations = {
  setLoginStatus(state, value) { // 设置登录状态
    state.isLogin = value
  }
}
export const actions = {

}
export default {
  namespaced: true, // 命名空间
  state, // 这里你用到了哪几个属性就写哪几个，不需要的可以注释掉
  // getters,
  actions,
  mutations

}
