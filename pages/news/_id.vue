<template>
  <div class="news-detail-page">
    <div class="new-con">
      <h1>第四届VR/AR产业创新者峰会展区回顾：一文了解2020 最前沿产品</h1>
      <div class="content">
        第四届VR/AR产业创新者峰会展区回顾：一文了解2020 最前沿产品第四届VR/AR产业创新者峰会展区回顾：一文了解2020 最前沿产品第四届VR/AR产业创新者峰会展区回顾：一文了解2020 最前沿产品第四届VR/AR产业创新者峰会展区回顾：一文了解2020 最前沿产品第四届VR/AR产业创新者峰会展区回顾：一文了解2020 最前沿产品第四届VR/AR产业创新者峰会展区回顾：一文了解2020 最前沿产品
      </div>

    </div>
    <div class="last-news">
      <h1>最新资讯</h1>
      <ul>
        <li>
          <span class="num">01</span>
          <span>
            太空部队利用Oculus Quest进行VR卫星
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, params }) {
    console.log(params)
    console.log($axios)
    console.log(process.env.NODE_ENV)
    const ip = await $axios.$get('/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=today_topic_2018')
    return { ip }
    // return { ip };
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  destroyed() {
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.news-detail-page{
  display: flex;
  justify-content: center;
  margin-top:64px;
  margin-bottom: 146px;
  .new-con{
    margin-right:42px;
    width:800px;
    h1{
      font-size: 32px;
      font-weight: 500;
      color: #1C242C;
      line-height: 48px;
      margin-bottom: 40px;
    }
    .content{
      img{
        max-width: 100% !important;
      }
    }
  }
  .last-news{
    width:360px;
    h1{
      font-size: 24px;
      color: #1C202B;
      line-height: 30px;
      position: relative;
      margin-left:12px;
      margin-bottom: 26px;
      &::before{
         content: '';
         display: block;
         width: 4px;
         height: 24px;
         background-color: #41D9D9;
         position: absolute;
         top:4px;
         left:-12px;
       }
    }
    ul{
      padding-bottom: 20px;
      border: 1px solid #E6ECF2 ;
      li{
        display: flex;
        align-items: center;
        padding:0 15px;
        margin-top:20px;
        font-size: 14px;
        font-weight: 400;
        color: #1C242C;
        span.num{
          font-size: 32px;
          font-family: Impact;
          font-weight: 400;
          color: #E7EAED;
          line-height: 30px;
          margin-right:20px;
        }
      }
    }
  }
}
</style>
