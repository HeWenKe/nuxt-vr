<template>
  <div class="">
    <div class="router-wrap">
      <div class="link-wrap">
        <div class="logo">
          <nuxt-link to="/">
            <img
              v-if="currentPath === '/'"
              src="@/assets/images/header/logo_white.png"
              title="index"
            >
            <img v-else src="@/assets/images/header/logo.png" title="index">
          </nuxt-link></div>
        <ul class="nav-bar" :class="{ 'home-page': currentPath === '/' }">
          <li v-for="(item, i) in routes" :key="i">
            <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
          </li>
        </ul>
        <div v-if="!isToken" class="login-wrap">
          <button class="to-login" :class="{ 'home-page': currentPath === '/' }" @click="toLogin">登录</button>
          <span :class="{ 'home-page': currentPath === '/' }" @click="toRegister">注册</span>
        </div>
        <div v-else class="user-wrap">
          <div>
            <div class="msg-wrap">
              <el-badge is-dot class="item"> <i class="el-icon-bell" /></el-badge>
              <div class="notice-wrap">
                <p>
                  <span>消息</span>
                  <span class="del-btn fr">
                    清空
                  </span>
                </p>
                <ul>
                  <li>
                    [通知] 您好，您的模板使用已到期
                    请尽快续费…
                    <span class="n">76</span>
                  </li>
                  <li>
                    [通知] 您好，您的模板使用已到期
                    请尽快续费…
                    <span class="n">76</span>
                  </li>
                  <li>
                    [通知] 您好，您的模板使用已到期
                    请尽快续费…
                    <span class="n">76</span>
                  </li>
                  <li>
                    [通知] 您好，您的模板使用已到期
                    请尽快续费…
                  </li>
                </ul>
                <nuxt-link to="/center/msg"><div class="all">查看全部</div></nuxt-link>
              </div>
            </div>
          </div>
          <div class="user-info">
            <img src="@/assets/images/header/logo.png" alt="">
            <span class="name">lijb0013 </span>
            <span @click="tologinOut">退出登录</span>
            <ul class="link-quick-item">
              <nuxt-link to="/center/showroom">
                <li>
                  展厅管理
                </li>
              </nuxt-link>
              <nuxt-link to="/center/order">
                <li>
                  订单管理
                </li>
              </nuxt-link>
              <nuxt-link to="/center/moneymanager">
                <li>
                  资金管理
                </li>
              </nuxt-link>
              <nuxt-link to="/center/collection">
                <li>
                  收藏管理
                </li>
              </nuxt-link>
              <nuxt-link to="/center/account">
                <li>
                  账号管理
                </li>
              </nuxt-link>
            </ul>
          </div>

        </div>

      </div>
    </div>
    <div class="render-main">
      <nuxt />
    </div>
    <div class="footer-wrap">
      <ul>
        <li class="left-item">
          <div>
            <p class="title">咨询服务热线</p>
            <p class="title tel">029-88166134</p>
          </div>
          <button>
            在线咨询
          </button>
        </li>

        <li>
          <p class="title">制作工具</p>
          <p>展厅制作</p>
        </li>
        <li>
          <p class="title">场景支持</p>
          <p>上传音乐</p>
          <p>上传视频</p>
          <p>上传图片</p>
          <p>添加文章</p>
        </li>
        <li>
          <p class="title">帮助中心</p>
          <p>新手指南</p>
          <p>常见问题</p>
          <p>服务协议</p>
          <p>版权声明</p>
        </li>
        <li>
          <p class="title">慧展云</p>
          <p>关于我们</p>
          <p>新闻资讯</p>
        </li>
        <li>
          <img width="130px" height="130px" src="@/assets/images/header/logo.png" alt="">
          <p class="code-info">扫一扫关注慧展云</p>
        </li>
      </ul>
      <div class="introduce">
        本平台是一款在线展厅制作，仅仅提供平台功能服务，模板中的任何图片和视频素材如不上传替换，将无法渲染生成自己的作品<br>
        <p>同时，模板预览视频中的音乐仅为参考音乐不提供任何商业用途</p>
      </div>
    </div>
    <div class="copyright">
      西安博奥软件科技有限公司 All Rights Reserved 陕ICP备15003244号
    </div>
    <Login />
  </div>
</template>
<script>
import Login from '@/components/Login'
export default {
  comments: {
    Login
  },
  data() {
    return {
      currentPath: '',
      routes: [
        {
          name: '首页',
          url: '/'
        },
        {
          name: '应用案例',
          url: '/source'
        },

        {
          name: '免费建展',
          url: '/show'
        },
        {
          name: '新闻资讯',
          url: '/news'
        },
        {
          name: '招商加盟',
          url: '/vip'
        },
        {
          name: '新手指南',
          url: '/help'
        }
      ]
    }
  },
  computed: {
    isToken() { return this.$store.state.token }
  },
  watch: {
    $route(res) {
      this.currentPath = res.path
      window.localStorage.setItem('link', this.currentPath)
    }
  },
  mounted() {
    this.currentPath = window.localStorage.getItem('link') ? window.localStorage.getItem('link') : '/'
  },
  methods: {
    toLogin() {
      this.$store.commit('setIsLogin', { type: 'login', isLogin: true })
    },
    toRegister() {
      this.$store.commit('setIsLogin', { type: 'register', isLogin: true })
    },
    tologinOut() {
      this.$store.commit('setToken', '')
      window.location.reload()
    }
  }
}
</script>

<style>
.bg {
  background: #ccc;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
