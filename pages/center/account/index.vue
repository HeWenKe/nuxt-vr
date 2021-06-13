<template>
  <div class="center-page">
    <div class="center-wrap">
      <div class="center-link"><i class="el-icon-s-home" /> <i class="el-icon-caret-right" />个人中心<i class="el-icon-caret-right" />账户管理</div>
      <div class="w clearfix">
        <SubMenu />
        <div class="r-w fr">
          <div class="t">
            <span class="fl">账户管理</span>
          </div>
          <ul class="user-info">
            <li>
              <span>昵称</span>
              <span>admin</span>
              <span>编辑</span>
            </li>
            <li>
              <span>头像</span>
              <span class="img-w">
                <div>
                  <img src="@/assets/images/index/bannerbg.png" alt="">
                </div>
              </span>
              <span>上传头像</span>
            </li>
            <li>
              <span>手机号码</span>
              <span>18812345678</span>
              <span />
            </li>
            <li>
              <span>登录密码</span>
              <span>*********</span>
              <span>修改</span>
            </li>
            <li>
              <span>邮箱</span>
              <span>请输入邮箱地址</span>
              <span>编辑</span>
            </li>
          </ul>

        </div>
      </div>
      <el-dialog
        title="设置"
        width="800px"
        class="set-modal"
        :visible.sync="setShowVisible"
      >
        sas
      </el-dialog>
    </div>
  </div>
</template>
<script>
import SubMenu from '@/components/SubMenu'
export default {
  components: {
    SubMenu
  },

  async asyncData({ $axios }) {
    console.log($axios)
    console.log(process.env.NODE_ENV)
    const ip = await $axios.$get(
      '/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=today_topic_2018'
    )
    return { ip }
    // return { ip };
  },
  data() {
    return {
      activeName: 'first'

    }
  },
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.center-page {
  color: #333;
  font-weight: 500;
  background-color: #f9f9f9;
  padding-bottom: 80px;
  /deep/ .el-dialog__header {
    border-bottom: 1px solid rgba(111, 111, 111, 0.2);
    padding-bottom: 20px;
  }

  .center-wrap {
    width: 1376px;
    margin: 0 auto;
    .w {
      width: 100%;
      .r-w {
        width: 1080px;
        .t {
          background-color: #fff;
          height: 70px;
          line-height: 70px;
          padding: 0 30px;
          font-size: 18px;
          font-weight: 500;
          border-bottom: 1px solid #f2f2f2;

        }
        .user-info{
          background-color: #fff;
          width:100%;
          padding:0 30px;
          >li{
            height: 90px;
            line-height: 90px;
            border-bottom: 1px solid #F2F2F2;
            display: flex;
            align-items: center;
            >span:first-child{
              width:60px;
              text-align: left;
              color:#999;
              margin-right: 100px;
            }
            >span:nth-child(2){
              width:300px;
              text-align: left;
              color:#333;
            }
            >span:last-child{
              width:60px;
              text-align: right;
              color:#5A8AD9;
              flex:1;
              cursor: pointer;
            }
            .img-w{
              div{
                 width: 48px ;
                 height: 48px;
              }
              img{
                width: 100%;
                height: 100%;
                border-radius: 100%;
              }
            }
          }
        }

      }
    }
  }
  .center-link {
    padding: 32px 0;
    color: #999999;
    i {
      margin: 0 5px;
    }
  }
}

</style>
