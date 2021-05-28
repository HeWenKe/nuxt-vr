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
            />
            <img v-else src="@/assets/images/header/logo.png" title="index" />
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
      <nuxt></nuxt>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPath: "/",
      routes: [
        {
          name: "首页",
          url: "/",
        },
        {
          name: "生活相冊",
          url: "/source",
        },

        {
          name: "宣传展示",
          url: "/show",
        },
        {
          name: "创作工具",
          url: "/create",
        },
        {
          name: "VIP特权",
          url: "/vip",
        },
      ],
    };
  },
  watch: {
    $route(res) {
      debugger;
      this.currentPath = res.path;
    },
  },
};
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
