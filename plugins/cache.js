export default function(ctx) {
  console.log(2112)
  // 离开页面 刷新前 将store中的数据存到localStorage
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('isLogin', ctx.store.state.user)
  })
  // 获取sessionStorage中的store数据
  const storeCache = sessionStorage.getItem('isLogin')
  if (storeCache) {
    // 将localStorage中的store数据替换到store中
    ctx.store.state.user = (JSON.parse(storeCache))
  }
}
