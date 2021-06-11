<template>
  <div class="news-page">
    <div class="news-bg">
      新闻资讯
    </div>
    <ul class="news-list">
      <li>
        <img src="@/assets/images/index/bannerbg.png" alt="">
        <div class="info-text">
          <h4>HTC Vive面向全球推出系列虚拟现实软件及解决方案，助力企业革新</h4>
          <p>来自航空航天、汽车和
          </p>
        </div>
        <div class="time">
          <p class="year">2021</p>
          <p class="t">06-03</p>
        </div>
      </li>
      <li>
        <img src="@/assets/images/index/bannerbg.png" alt="">
        <div class="info-text">
          <h4>HTC Vive面向全球推出系列虚拟现实软件及解决方案，助力企业革新</h4>
          <p>{{ textNum | els }}</p>
        </div>
        <div class="time">
          <p class="year">2021</p>
          <p class="t">06-03</p>
        </div>
      </li>
      <li>
        <img src="@/assets/images/index/bannerbg.png" alt="">
        <div class="info-text">
          <h4>HTC Vive面向全球推出系列虚拟现实软件及解决方案，助力企业革新</h4>
          <p>{{ textNum | els }}</p>
        </div>
        <div class="time">
          <p class="year">2021</p>
          <p class="t">06-03</p>
        </div>
      </li>
    </ul>
    <div class="pagination-wrap">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
      />
    </div>
  </div>
</template>
<script>
export default {
  filters: {
    els: function(value) {
      const nums = 99
      if (!value) return ''
      if (value.length > nums) {
        return value.slice(0, nums) + '...'
      }
      return value
    }
  },
  async asyncData({ $axios }) {
    console.log($axios)
    console.log(process.env.NODE_ENV)
    const ip = await $axios.$get('/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=today_topic_2018')
    return { ip }
    // return { ip };
  },
  data() {
    return {
      textNum: '来自航空航天、汽车和医疗领域的英国主要工业、技术和工程企业正在携手生产医用呼吸机。包括福特、吉凯恩和微软在内的公司已经根据英国公司Penlon和Smiths来自航空航天、汽车和医疗领域的英国主要工业、技术和工程企业正在携手生产医用呼吸机。包括福特、吉凯恩和微软在内的公司已经根据英国公司Penlon和Smiths Group的设计来生产制造医用呼吸机。 ...'
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
.news-bg{
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background-color: aqua;
  color: #fff;
}
.news-list{
  width:1000px;
  margin:50px auto 0;
  >li{
    display: flex;
    position: relative;
    padding:30px 0;
    border-bottom: 1px solid #EBEBEB;
    img{
      width: 200px;
      height: 128px;
      margin-right: 32px;
    }
    .info-text{
      width:566px;
      font-weight: 500;
      color: #333333;
      margin-top:4px;
      h4{
        font-size: 18px;
      }
      p{
        margin-top:18px;
        font-size: 15px;
      }
    }
    .time{
      position: absolute;
      font-weight: 500;
      right:0;
      .year{
        color: #666666;
        font-size: 28px;
      }
      .t{
        text-align: right;
        color: #999999;
      }
    }
  }
}

</style>
