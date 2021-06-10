<template>
  <div class="">
    <div class="router-wrap">
      <div class="link-wrap">
        <div class="logo">
          <a href="/">
            <img
              v-if="currentPath === '/'"
              src="@/assets/images/header/logo_white.png"
              title="index"
            >
            <img v-else src="@/assets/images/header/logo.png" title="index">
          </a>
        </div>
        <ul class="nav-bar" :class="{ 'other-page': currentPath !== '/' }">
          <li v-for="(item, i) in routes" :key="i">
            <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
          </li>
        </ul>
        <button v-if="currentPath === '/'" class="to-login">登录</button>
        <button v-else class="to-login other-page">登录</button>
      </div>
    </div>
    <div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPath: '/',
      routes: [
        {
          name: '首页',
          url: '/'
        },
        {
          name: '生活相冊',
          url: '/source'
        },

        {
          name: '宣传展示',
          url: '/show'
        },
        {
          name: '创作工具',
          url: '/create'
        },
        {
          name: 'VIP特权',
          url: '/vip'
        }
      ]
    }
  },
  watch: {
    $route(res) {
      debugger
      this.currentPath = res.path
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
