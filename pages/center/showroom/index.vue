<template>
  <div class="center-page">
    <div class="center-wrap">
      <div class="center-link"><i class="el-icon-s-home" /> <i class="el-icon-caret-right" />个人中心<i class="el-icon-caret-right" />展厅管理</div>
      <div class="w clearfix">
        <SubMenu />
        <div class="r-w fr">
          <div class="t">
            展厅管理
          </div>
          <div class="list-con clearfix">
            <div class="item-wrap">
              <div class="action-wrap">
                <el-button
                  type="warning"
                  class="s"
                  size="mini"
                >未发布</el-button>
                <div class="fr">
                  <el-button size="small">编辑</el-button>
                  <el-button
                    size="small"
                    @click="setModalShow"
                  >设置</el-button>
                  <el-popover
                    placement="top"
                    trigger="click"
                    popper-class="popper-wrap-class"
                  >
                    <div class="total-show">
                      <p>
                        <span>时长  </span>
                        <i>总时长：6个月</i>
                        <i>剩余：3个月</i>
                      </p>
                      <p>
                        <span>流量  </span>
                        <i>  总流量：500G</i>
                        <i>剩余：100G</i>

                      </p>
                      <nuxt-link to="/center/moneymanager/recharge"><el-button type="warning" size="mini">立即充值</el-button></nuxt-link>
                    </div>
                    <el-button slot="reference" size="small">续费</el-button>
                  </el-popover>

                  <el-dropdown placement="top">
                    <span class="el-dropdown-link">
                      <el-button
                        size="small"
                        class="dot"
                        style=""
                      >···</el-button>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>
                        <nuxt-link to="/center/material/1">素材</nuxt-link>
                      </el-dropdown-item>
                      <el-dropdown-item command="b">预览</el-dropdown-item>
                      <el-dropdown-item command="c">锁定</el-dropdown-item>
                      <el-dropdown-item command="c">删除</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>

                </div>
              </div>
              <div class="img-wrap">
                <div class="btn-wrap">
                  <button class="vr-btn">发布</button>
                </div>
                <img
                  src="@/assets/images/index/bannerbg.png"
                  alt=""
                >
              </div>
              <div class="show-bar">
                <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
                <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
              </div>
            </div>
            <div class="item-wrap">
              <div class="action-wrap">
                <div class="fr">
                  <el-button size="small">编辑</el-button>
                  <el-button size="small">设置</el-button>
                  <el-button size="small">续费</el-button>
                  <el-button
                    size="small"
                    class="dot"
                    style=""
                  >···</el-button>
                </div>
              </div>
              <div class="img-wrap">
                <div class="btn-wrap">
                  <i class="lock" />
                </div>
                <img
                  src="@/assets/images/index/bannerbg.png"
                  alt=""
                >
              </div>
              <div class="show-bar">
                <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
                <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
              </div>

            </div>
            <div class="item-wrap">
              <div class="action-wrap">
                <div class="fr">
                  <el-button size="small">编辑</el-button>
                  <el-button size="small">设置</el-button>
                  <el-button size="small">续费</el-button>
                  <el-button
                    size="small"
                    class="dot"
                    style=""
                  >···</el-button>
                </div>
              </div>
              <div class="img-wrap">
                <div class="btn-wrap">
                  <div class="qr-bg">
                    <div id="qrcode" />
                  </div>
                </div>
                <img
                  src="@/assets/images/index/bannerbg.png"
                  alt=""
                >
              </div>
              <div class="show-bar">
                <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
                <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
              </div>
            </div>
            <div class="item-wrap">
              <div class="action-wrap">
                <div class="fr">
                  <el-button size="small">编辑</el-button>
                  <el-button size="small">设置</el-button>
                  <el-button size="small">续费</el-button>
                  <el-button
                    size="small"
                    class="dot"
                    style=""
                  >···</el-button>
                </div>
              </div>
              <div class="img-wrap">
                <div class="action-wrap">
                  <div class="fr">
                    <el-button size="small">编辑</el-button>
                    <el-button size="small">设置</el-button>
                    <el-button size="small">续费</el-button>
                    <el-button
                      size="small"
                      class="dot"
                      style=""
                    >···</el-button>
                  </div>
                </div>
                <img
                  src="@/assets/images/index/bannerbg.png"
                  alt=""
                >
              </div>
              <div class="show-bar">
                <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
                <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
              </div>
            </div>
          </div>
          <div class="pagination-wrap">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000"
            />
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="设置"
      width="800px"
      class="set-modal"
      :visible.sync="setShowVisible"
    >
      <setShowComponent
        v-model="currentId"
        @childClose="setShowClose"
      />
    </el-dialog>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'
import SubMenu from '@/components/SubMenu'
import setShowComponent from '@/components/material_manager/setShow'
export default {
  components: {
    setShowComponent,
    SubMenu
  },
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
    const ip = await $axios.$get(
      '/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=today_topic_2018'
    )
    return { ip }
    // return { ip };
  },
  data() {
    return {
      setShowVisible: false,
      currentId: '1'
    }
  },
  mounted() {
    this.qrcode()
  },
  destroyed() {},
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command)
    },
    qrcode() {
      new QRCode('qrcode', {
        width: 116, // 二维码宽度，单位像素

        height: 116, // 二维码高度，单位像素

        text: 'https://www.baidu.com/' // 生成二维码的链接
      })
    },
    setModalShow() {
      this.setShowVisible = true
    },
    setShowClose() {
      this.setShowVisible = false
      debugger
    }
  }
}
</script>
<style lang="scss" scoped>
.center-page {
  background-color: #f9f9f9;
  /deep/ .el-dialog__header {
    border-bottom: 1px solid rgba(111, 111, 111, 0.2);
    padding-bottom: 20px;
  }
  .set-modal {
    /deep/ .el-dialog__body {
      padding: 10px;
    }
  }
  .center-wrap {
    width: 1376px;
    margin: 0 auto;
    .w {
      width: 100%;
      .r-w {
        background-color: #fff;
        width: 1080px;
        .t {
          height: 70px;
          line-height: 70px;
          padding-left: 30px;
          font-size: 18px;
          border-bottom: 1px solid #f2f2f2;
          font-weight: 500;
        }
        .list-con {
          margin-top: 24px;
          .item-wrap {
            font-weight: 500;
            float: left;
            position: relative;
            width: 322px;
            background-color: #fff;
            overflow: hidden;
            margin-left: 28px;
            margin-bottom: 24px;
            box-shadow: #f9f9f9 0 10px 5px;
            .action-wrap {
              width: 100%;
              position: absolute;
              z-index: 1;
              top: 10px;
              /deep/ .el-button--small {
                padding: 0;
                height: 28px;
                width: 42px;
                line-height: 28px;
                margin-right: 5px;
                margin-left: 0;
              }
              .dot {
                font-size: 14px;
                font-weight: bold;
              }
              .s {
                margin-left: 10px;
              }
            }
            .img-wrap {
              width: 322px;
              height: 202px;
              position: relative;
              > img {
                width: 100%;
                height: 100%;
              }
              .btn-wrap {
                height: 100%;
                width: 100%;
                top: 0;
                position: absolute;
                background-color: rgba(0, 0, 0, 0.2);
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 40px;
                button {
                  width: 96px;
                  height: 36px;
                  border-radius: 18px;
                }
                .lock {
                  background: url(@/assets/common/lock.png) center no-repeat;
                  background-size: contain;
                  display: block;
                  width: 32px;
                  height: 40px;
                }
                .qr-bg {
                  padding: 4px;
                  background-color: #fff;
                  border-radius: 4px;
                }
              }
            }
            p {
              align-items: baseline;
              margin-bottom: 12px;
              display: flex;
              &:last-child {
                margin-bottom: 0;
              }
              justify-content: space-between;
              font-weight: 500;
              .title-text {
                font-size: 16px;
                font-weight: 500;
                color: #333333;
              }
              &.code-text {
                justify-content: left;
              }
              &.code-text,
              .pre-view {
                color: #bababa;
                font-size: 13px;
              }
            }
            .show-bar {
              padding: 14px 15px 14px;
              height: calc(100% - 200px);
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
