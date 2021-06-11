import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    // storage: window.sessionStorage,
    reducer(state) {
      console.log(state) // 跟state 数据对象
      // 其中 username authority 为需要自动存储的 state
      const { token, userInfo } = state
      return { token, userInfo }
    }
  })(store)
}

