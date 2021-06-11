<template>
  <div class="news_detail-page">
    <div class="help-bg">
      <el-input
        v-model="inputValue"
        class="in-wrap"
        placeholder="请输入您想要了解的问题或关键词"
      >
        <i slot="suffix" class="el-input__icon el-icon-search" />
      </el-input>
    </div>
    <div class="vr-help-content">
      <div class="webmap-ne">
        <em><a href="/help">帮助中心</a></em>
      </div>
      <div class="contm clearfix">
        <div class="cklfcont fl">
          <dl>
            <dt>基础教程</dt>
            <dd><a href="/help/cid/109.html" class="item-active">使用模板</a></dd>
            <dd><a href="/help/cid/110.html" class="">编辑素材</a></dd>
            <dd><a href="/help/cid/112.html" class="">上传音乐</a></dd>
            <dd><a href="/help/cid/113.html" class="">渲染视频</a></dd>
          </dl>
          <dl>
            <dt>常见问题</dt>
            <dd><a href="/help/cid/122.html" class="">视频模板渲染问题</a></dd>
            <dd><a href="/help/cid/123.html" class="">视频模板价格问题</a></dd>
            <dd><a href="/help/cid/125.html" class="">会员相关问题</a></dd>
          </dl>
        </div>
        <div class="ckrfcont">
          <div class="inmaiprts clearfix">
            <h4 class="title">详情标题</h4>
            <div id="content" style="margin-top:10px;">
              <span style="font-size: 16px;">点击右上角【登录】按钮，可选择微信或QQ扫描二维码即可登录。</span>
            </div>
          </div>
        </div>
      </div>

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
      inputValue: ''
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
.help-bg{
  height:120px;
  background-color: rgb(138, 138, 206);
  display: flex;
  justify-content: center;
  align-items: center;
  .in-wrap{
    width:480px;
    height: 42px;
    color: #fff;
    /deep/ input{
        background: rgba(74, 212, 196, 0);
        border: 1px solid #FFFFFF;
        border-radius: 21px;
    }
    /deep/ .el-input__suffix{
        font-size: 24px;
        margin-right:10px;
          color: #fff;
    }
  }
}
.vr-help-content{
  width: 1200px;
  margin: 0 auto;
  .webmap-ne {
    line-height: 48px;
    border-bottom: 1px solid #e0e0e0;
    font-size: 14px;
    color: #666666;
    padding-left: 12px;
  }
  .contm {
    padding: 20px 0;
    .cklfcont {
      width: 285px;
      background: #f9f9f9;
      padding: 0 0 20px 20px;
      dd{
        line-height: 39px;
        font-size: 14px;
      }
      dl{
        padding: 7px 0;
        margin: 0 15px;
        line-height: 20px;
        font-size: 15px;
      }
      dt{
        font-size: 15px;
        font-weight: 600;
        line-height: 30px;
        color: black;
      }
    }
  }
  .inmaiprts {
    overflow: hidden;
    padding-bottom: 40px;
    padding-left:15px;
    .title{
      font-size: 16px;
      font-weight: bold;
    }
  }

}

  /deep/ input::-webkit-input-placeholder { /* WebKit browsers */
      color: #fff;
      font-size: 14px;
  }

  /deep/ input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #fff;
    font-size: 14px;
  }

  /deep/ input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #fff;
    font-size: 14px;
  }

</style>
