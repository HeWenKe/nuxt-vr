<template>
  <div class="container home-page">
    <div class="banner-page">
      <div class="wrap">
        <div class="ball icon1">
          <img src="@/assets/images/index/ball1.png" />
        </div>
        <div class="ball icon2">
          <img src="@/assets/images/index/ball2.png" />
        </div>
        <div class="ball icon3">
          <img src="@/assets/images/index/ball3.png" />
        </div>
        <div class="ball icon4">
          <img src="@/assets/images/index/ball4.png" />
        </div>
        <div class="wd">
          <h1>超简单的在线视频制作工具</h1>
          <span>一分钟上手、一键替换图文及视频、 快速生成</span>
          <a href="/template.html">立即制作</a>
        </div>
        <div class="video">
          <video muted="" autoplay="true" loop="true">
            <source
              src="https://www.chuanying520.com/production/video/banner.mp4?v=1"
              type="video/mp4"
            />
          </video>
        </div>
        
      </div>
    </div>
     <ul>
          <li v-for="(item,i) in ip" :key="i">
            <p>
              {{item.title}}
            </p>
          </li>
        </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    console.log($axios)
    console.log(process.env.NODE_ENV)
    const ip = await $axios.$get("/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=today_topic_2018");
    return {ip}
    //return { ip };
  }
};
</script>

<style lang="scss" scoped>
.banner-page {
  height: 745px;
  background: url(@/assets/images/index/bannerbg.png) no-repeat center -100px;
  overflow: hidden;
  margin-top: -76px;
  .wrap {
    height: 100%;
    padding-top: 100px;
    position: relative;
    .ball {
      img {
        display: block;
      }
      position: absolute;
      transition: all 0.5s;
    }
    .icon1 {
      top: 212px;
      left: -70px;
      animation: updown 4s linear infinite;
    }
    .icon2 {
      top: 655px;
      left: 117px;
      animation: updown 3s linear infinite;
    }
    .icon3 {
      top: 538px;
      left: 435px;
      animation: updown 5s linear infinite;
    }
    .icon4 {
      top: 314px;
      right: -108px;
      animation: updown 3.5s linear infinite;
    }

    @keyframes updown {
      0% {
        transform: translate(0, -10%);
        opacity: 1;
      }

      25% {
        transform: translate(0, 0);
      }

      50% {
        transform: translate(0, 10%);
        opacity: 0.5;
      }

      75% {
        transform: translate(0, 0);
      }

      100% {
        transform: translate(0, -10%);
        opacity: 1;
      }
    }
    .wd {
      width: 610px;
      float: left;
      padding-left: 70px;
      padding-top: 130px;
      h1 {
        display: block;
        font-size: 40px;
        color: #fff;
        font-weight: normal;
        letter-spacing: 5px;
      }
      span {
        display: block;
        font-size: 18px;
        color: #fff;
        padding: 25px 0 40px;
      }
      a {
        display: block;
        width: 170px;
        height: 48px;
        border-radius: 48px;
        background: #fff;
        text-align: center;
        font-size: 18px;
        color: #3bc9bb;
        line-height: 48px;
      }
    }
    .video {
      background: url(@/assets/images/index/picsm.png) no-repeat center;
      background-size: 100% 100%;
      width: 684px;
      height: 439px;
      float: right;
      padding: 55px 29px 0;
      position: relative;
      z-index: 1000;
      video {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
