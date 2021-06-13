<template>
  <div class="center-page">
    <div class="center-wrap">
      <div class="center-link"><i class="el-icon-s-home" /> <i class="el-icon-caret-right" />个人中心<i class="el-icon-caret-right" />我的消息</div>
      <div class="w clearfix">
        <SubMenu />
        <div class="r-w fr">
          <div class="t">
            <span class="fl">全部消息</span>
          </div>
          <ul class="msg-list clearfix">
            <li class="clearfix">
              <div class="on fl on-bg" />
              <div class="ti fl">
                <div class="sub-ti">
                  <p>
                    <span class="type">公告</span>
                    <span class="time">昨天：16:12</span>
                  </p>
                  <span class="status">
                    未读
                  </span>
                </div>
                <div class="info">
                  <p>
                    您好，我司在线客服值班时间为
                    早上9：00-12：00，下午13：30—18：30.
                    当前客服已离线,您可以留下联系方式我们会第一时间给予你回复！
                    如遇紧急问题需要咨询，
                    您可以直接拨打我司
                    服务热线029-88166134
                    感谢您对我司的关注！
                  </p>
                </div>

              </div>

            </li>
            <li class="clearfix">
              <div class="on fl on-bg" />
              <div class="ti fl">
                <div class="sub-ti">
                  <p>
                    <span class="type">公告</span>
                    <span class="time">昨天：16:12</span>
                  </p>
                  <span class="status">
                    未读
                  </span>
                </div>
                <div class="info">
                  <p>
                    您好，我司在线客服值班时间为
                    早上9：00-12：00，下午13：30—18：30.
                    当前客服已离线,您可以留下联系方式我们会第一时间给予你回复！
                    如遇紧急问题需要咨询，
                    您可以直接拨打我司
                    服务热线029-88166134
                    感谢您对我司的关注！
                  </p>
                </div>

              </div>

            </li>
            <li class="clearfix">
              <div class="fl on-bg" />
              <div class="ti fl">
                <div class="sub-ti">
                  <p>
                    <span class="type">公告</span>
                    <span class="time">昨天：16:12</span>
                  </p>
                  <span class="">
                    已读
                  </span>
                </div>
                <div class="info">
                  <p>
                    您好，我司在线客服值班时间为
                    早上9：00-12：00，下午13：30—18：30.
                    当前客服已离线,您可以留下联系方式我们会第一时间给予你回复！
                    如遇紧急问题需要咨询，
                    您可以直接拨打我司
                    服务热线029-88166134
                    感谢您对我司的关注！
                  </p>
                </div>

              </div>

            </li>

          </ul>

        </div>
      </div>
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
    return {}
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
        .msg-list {
          background-color: #fff;
          width: 100%;
          padding: 0 30px;
          li {
            padding: 30px 0;
            .on-bg {
              margin-right: 20px;
              width: 48px;
              height: 48px;
              border-radius: 100%;
              background-color: #5de19b;
              &.on {
                background-color: #fce12e;
              }
            }
            .ti {
              padding-top: 8px;
              width: calc(100% - 100px);
              .sub-ti {
                display: flex;
                justify-content: space-between;
                width: 100%;
                > p {
                  color: #bbbbbb;
                  .time {
                    font-size: 12px;
                    margin-left: 30px;
                  }
                }
                > span {
                  color: #bbb;
                  &.status {
                    color: #5a8ad9;
                  }
                }
              }
              .info{
                margin-top:20px;
                color:#666;
                line-height: 24px;
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
