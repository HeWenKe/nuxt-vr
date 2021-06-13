<template>
  <div class="center-page">
    <div class="center-wrap">
      <div class="center-link"><i class="el-icon-s-home" /> <i class="el-icon-caret-right" />个人中心<i class="el-icon-caret-right" />资金管理</div>
      <div class="w clearfix">
        <SubMenu />
        <div class="r-w fr">
          <div class="t">
            现金充值获得云币进行购买展厅
          </div>
          <div class="list-con clearfix">
            <div class="card-wrap fl on">
              <p class="now-price"><span>100</span>元</p>
              <h3>100元</h3>
              <p class="info">充值多多优惠多多</p>
              <p class="y-h">送<span>300</span>云币</p>
              <i class="el-icon-check" />
            </div>
            <div class="card-wrap fl">
              <p class="now-price"><span>100</span>元</p>
              <h3>100元</h3>
              <p class="info">充值多多优惠多多</p>
              <p class="y-h">送<span>300</span>云币</p>
              <i class="el-icon-check" />
            </div>
            <div class="card-wrap fl">
              <p class="now-price"><span>100</span>元</p>
              <h3>100元</h3>
              <p class="info">充值多多优惠多多</p>
              <p class="y-h">送<span>300</span>云币</p>
              <i class="el-icon-check" />
            </div>
            <div class="card-wrap fl">
              <p class="now-price"><span>100</span>元</p>
              <h3>100元</h3>
              <p class="info">充值多多优惠多多</p>
              <p class="y-h">送<span>300</span>云币</p>
              <i class="el-icon-check" />
            </div>
            <div class="card-wrap fl">
              <p class="now-price"><span>100</span>元</p>
              <h3>100元</h3>
              <p class="info">充值多多优惠多多</p>
              <p class="y-h">送<span>300</span>云币</p>
              <i class="el-icon-check" />
            </div>
          </div>
          <div class="t">
            选择支付方式
          </div>
          <div class="pay-type">
            <div class="wx-pay">
              <svg
                t="1623511778684"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2858"
                width="34"
                height="30"
              >
                <path
                  d="M403.26656 621.184c-54.78912 30.41792-62.9248-17.08032-62.9248-17.08032L271.6672 444.48256c-26.42432-75.8528 22.87104-34.20672 22.87104-34.20672s42.30144 31.86688 74.39872 51.29728c32.08192 19.42528 68.64896 5.69344 68.64896 5.69344l448.96256-206.40768c-82.8416-102.66112-219.66848-169.78944-374.5792-169.78944-252.80512 0-457.71776 178.64704-457.71776 399.02208 0 126.76608 67.85536 239.58016 173.54752 312.70912l-19.05664 109.1328c0 0-9.28256 31.872 22.912 17.09056 21.94432-10.07616 77.88032-46.18752 111.1808-68.15232 52.352 18.176 109.37856 28.26752 169.17504 28.26752 252.77952 0 457.74336-178.64192 457.74336-399.02208 0-63.83616-17.26464-124.11904-47.86688-177.61792C778.83904 398.19776 446.14656 597.41696 403.26656 621.184L403.26656 621.184 403.26656 621.184 403.26656 621.184z"
                  p-id="2859"
                  fill="#09BB07"
                /></svg>
              <span>微信支付</span></div>
            <div class="zfb-pay"><svg
                                   t="1623511852965"
                                   class="icon"
                                   viewBox="0 0 1024 1024"
                                   version="1.1"
                                   xmlns="http://www.w3.org/2000/svg"
                                   p-id="3379"
                                   width="30"
                                   height="30"
                                 >
                                   <path
                                     d="M1023.648242 701.277871 1023.648242 197.496221c0-108.597339-88.13141-196.728749-196.792705-196.728749L197.080507 0.767472C88.483168 0.767472 0.351758 88.898882 0.351758 197.496221l0 629.77503c0 108.597339 88.067454 196.728749 196.728749 196.728749l629.77503 0c96.765474 0 177.286116-69.967897 193.722816-162.000625-52.188121-22.576479-278.336644-120.237337-396.143651-176.454687-89.666354 108.597339-183.553807 173.768534-325.088502 173.768534s-235.997752-87.172069-224.677534-193.850728C82.151521 595.430641 130.1825 480.949347 338.80707 500.583849 448.747486 510.880769 499.080882 531.410655 588.747236 561.022297c23.216039-42.53076 42.466804-89.346574 57.112735-139.168322L248.245331 421.853975 248.245331 382.457061l196.728749 0L444.97408 311.721691 205.011055 311.721691 205.011055 268.359503l239.963025 0L444.97408 166.285679c0 0 2.174505-15.989008 19.826369-15.989008L563.164824 150.296671l0 118.062832 255.824121 0 0 43.362188-255.824121 0L563.164824 382.457061l208.688527 0c-19.186809 78.090313-48.286803 149.848979-84.74174 212.525888C747.741927 616.919868 1023.648242 701.277871 1023.648242 701.277871L1023.648242 701.277871 1023.648242 701.277871zM283.676972 791.775654c-149.529199 0-173.19293-94.399101-165.262382-133.859971 7.866592-39.269003 51.164824-90.497783 134.307663-90.497783 95.550309 0 181.123478 24.431204 283.836862 74.444819C464.416714 735.814128 375.773656 791.775654 283.676972 791.775654L283.676972 791.775654z"
                                     p-id="3380"
                                     fill="#1296db"
                                   /></svg>
              <span>支付宝支付</span></div>
          </div>
          <nuxt-link to="/center/moneymanager">
            <el-button
              type="warning"
              class="pay-btn"
            >确定支付</el-button>
          </nuxt-link>

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
        background-color: #fff;
        width: 1080px;
        height: 577px;
        .t {
          height: 60px;
          line-height: 60px;
          padding-left: 30px;
          font-size: 18px;
          font-weight: 500;
        }
        .list-con {
          padding-left: 14px;
          .card-wrap {
            &:hover {
              transform: scale(1.05);
              box-shadow: #d2d2d2 0 10px 5px;
              border: 2px solid #8df0f0;
            }
            transition: all 0.5s;
            cursor: pointer;
            position: relative;
            width: 190px;
            height: 212px;
            border: 1px solid #8df0f0;
            margin-left: 16px;
            text-align: center;
            .now-price {
              margin-top: 24px;
              span {
                color: #f4621f;
                font-size: 24px;
              }
            }
            h3 {
              margin-top: 20px;
              font-size: 16p;
              color: #999;
              text-decoration: line-through;
            }
            .info {
              margin-top: 40px;
              color: #666;
              font-size: 15px;
            }
            .y-h {
              height: 42px;
              width: 100%;
              position: absolute;
              bottom: 0px;
              line-height: 42px;
              border-top: 1px solid #8df0f0;
              background-color: #eeffff;
              font-size: 16p;
              color: #333;
              span {
                color: #f4621f;
              }
            }
            i.el-icon-check {
              position: absolute;
              right: 0;
              bottom: 0;
              font-size: 30px;
              color: #eeffff;
            }
            &.on {
              border: 2px solid #8df0f0;
              i.el-icon-check {
                color: #41d9d9;
                font-weight: bold;
              }
            }
          }
        }
        .pay-type {
          margin-left: 30px;
          display: flex;
          justify-content: flex-start;
          > div {
            height: 56px;
            border: 1px solid #f2f2f2;
            padding: 0 24px;
            line-height: 56px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            span {
              margin-left: 10px;
            }
            margin-right: 10px;
          }
        }
        .pay-btn {
          margin-left: 30px;
          margin-top: 50px;
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
