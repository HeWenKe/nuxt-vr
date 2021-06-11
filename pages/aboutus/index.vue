<template>
  <div class="us-page">
    <div class="us-bg">
      关于我们
    </div>
    <div class="wrap">
      <p>公司简介</p>
      <p class="i">
        西安博奥软件科技有限公司成立于2012年8月，是专注于3D数字化展厅呈现的互联网公司。旗下慧展云有多个3D数字化展厅方面的工具平台，各种精准服务，全方位覆盖企业营销场景。我们的愿景是“让创意更易制作、更美呈现、更广传播”。
      </p>
      <p>专业团队的深度沉淀，打造极简在线工具
      </p>
      <p class="i">博奥软件多年专注于3D数字化展厅领域，专为企业和个人提供3D数字化展厅设计工具和平台以及视觉解决方案和服务。</p>
      <p class="i">随着对3D数字化展厅运营的深入，团队很自然意识到对普通人而言，即使有了精美的3D数字化展厅模板，不会使用3D等专业编辑软件，个人电脑配置差异等等，3D编辑还是要请专人制作，并支付高昂的制作费用。这无疑还是限制了3D的使用人群。</p>
      <p class="i">能不能让普通人也能轻松做3D数字化展厅，且做出大神级水准的作品呢?带着对这个问题的思考，博奥软件资深的后期团队和专业的互联网技术团队成立项目组，成功打造出3D数字化展厅DIY在线制作工具。</p>
      <p class="i">3D数字化展厅使用极为简单，注册登录成功后，选择自己适用的模板，替换相关的素材，就可以制作出属于自己的专属展厅。我们提供了丰富的场景应用模板和适用于不同场合的展厅类型。无论是商务营销、企业宣传还是个人生活类展厅，都可以轻易找到适合的模板；无论是想现场大屏放映，还是新媒体渠道展示传播，都有相应的展厅类型可供选择。
      </p>
      <p>
        让创意更易制作，更美呈现，更广传播
      </p>
      <p>
        “让创意更易制作，更美呈现，更广传播”是博奥文化的愿景，慧展云DIY坚持和践行的理念。
      </p>
    </div>
    <div class="team-show">
      <div class="t1">
        <img src="@/assets/images/index/picsm.png" alt="">
        <p>专业团队</p>
      </div>
      <div class="t1">
        <img src="@/assets/images/index/picsm.png" alt="">
        <p>持续更新</p>
      </div>
      <div class="t1">
        <img src="@/assets/images/index/picsm.png" alt="">
        <p>内容详尽</p>
      </div>
      <div class="t1">
        <img src="@/assets/images/index/picsm.png" alt="">
        <p>完善客服</p>
      </div>
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
.us-bg{
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background-color: aqua;
  color: #fff;
}
.us-page{
    .wrap{
        width:80%;
        margin:60px auto ;
        p{
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #555555;
          line-height: 26px;
          margin-top:36px;
          &.i{
            text-indent: 28px;
          }
        }
    }
    .team-show{
       width: 100%;
       display: flex;
       justify-content: center;
       margin-bottom: 245px;
       margin-top: 100px;
       >div{
         display: flex;
         flex-wrap: wrap;
         align-items: center;
         justify-content: center;
          width:124px;
          margin:0 74px;
          img{
            width:124px;
            height: 124px;
            border-radius: 100%;
            background-color: #992b2b;
            border: 1px solid #DEDEDE;
            margin-bottom: 30px;
          }
          p{
            width:100%;
            font-size: 16px;
            text-align: center
          }

       }
    }
}

</style>
