<template>
  <div class="l-w fl">
    <div class="u-i">
      <img
        src="@/assets/images/header/logo.png"
        alt=""
      >
      <p>lijb0013 </p>
      <nuxt-link to="/show"> <el-button type="primary">免费建展</el-button></nuxt-link>
      <nuxt-link to="/center/account"><el-button plain>账户管理</el-button></nuxt-link>
    </div>
    <ul class="center-menu">
      <li
        v-for="(item,i) in menuList"
        :key="i"
        :class="{on:item.path.indexOf(menuType) >-1 }"
      >
        <nuxt-link :to="'/center'+item.path"><i :class="item.icon" />{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  //   props: {
  //     menuType: {
  //       type: String,
  //       default: 'showroom'

  //     }
  //   },
  data() {
    return {
      menuType: window.localStorage.getItem('link').split('/')[2] || 'showroom',
      menuList: [
        { path: '/showroom', name: '展厅管理', icon: 'el-icon-takeaway-box' },
        { path: '/order', name: '订单管理', icon: 'el-icon-tickets' },
        { path: '/moneymanager', name: '资金管理', icon: 'el-icon-bank-card' },
        { path: '/collection', name: '收藏管理', icon: 'el-icon-star-off' }
      ]
    }
  }
}
</script>
<style lang="scss">
.l-w {
  width: 272px;
  .u-i {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-flow: column;
    padding-bottom: 34px;
    img {
      width: 88px;
      height: 88px;
      background-color: aquamarine;
      border-radius: 100%;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    p {
      color: #333;
      font-weight: bold;
      margin-bottom: 18px;
    }
    /deep/ .el-button {
      margin-left: 0;
      width: 224px;
      height: 40px;
      margin-top: 12px;
    }
  }
  .center-menu {
    margin-top: 12px;
    padding: 10px 0;
    background-color: #fff;
    li {
      height: 56px;
      line-height: 56px;
      display: flex;
      align-items: center;
      color: #333;
      font-size: 16px;
      cursor: pointer;
      i {
        font-size: 20px;
        margin: 0 22px;
      }
      &.on {
        background-color: #41d9d9;
        a{
            color: #fff;
        }
      }
    }
  }
}
</style>

