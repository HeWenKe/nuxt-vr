<template>
  <div class="center-page">
    <div class="center-wrap">
      <div class="center-link"><i class="el-icon-s-home" /> <i class="el-icon-caret-right" />个人中心<i class="el-icon-caret-right" />资金管理</div>
      <div class="w clearfix">
        <SubMenu />
        <div class="r-w fr">
          <div class="t">
            <span class="fl">资金管理</span>
            <div class="fr">
              <span class="">申请开票</span>
              <span class="">充值规则</span>
            </div>
          </div>
          <ul class="money-detail">
            <li>
              <p>账户余额(云币)</p>
              <p>32321312</p>
            </li>
            <li>
              <p>入账</p>
              <p>18662</p>
            </li>
            <li>
              <p>花费</p>
              <p>18662</p>
            </li>
            <li>
              <p>累计(云币)</p>
              <p>18662</p>
            </li>
            <li>
              <nuxt-link to="/center/moneymanager/recharge"><el-button type="warning">余额充值</el-button></nuxt-link>
            </li>
          </ul>
          <div class="list-con change-tab-css">
            <el-tabs v-model="activeName">
              <el-tab-pane label="充值记录" name="first">
                <el-table
                  :data="rechargeData"
                  stripe
                  style="width: 100%;padding:0 32px;"
                >
                  <el-table-column
                    prop="code"
                    label="充值编号"
                    width="150"
                    align="center"
                  />
                  <el-table-column
                    prop="money"
                    label="充值金额(人民币)"
                    width="200"
                    align="center"
                  >
                    <template slot-scope="scope">
                      <span class="mc">{{ scope.row.money }}元</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="number"
                    label="云币数量"
                    width="200"
                    align="center"
                  />
                  <el-table-column
                    prop="account"
                    label="充值账号"
                    width="150"
                    align="center"
                  />
                  <el-table-column
                    prop="date"
                    label="充值时间"
                    align="center"
                  />
                </el-table>
                <div class="pagination-wrap">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                  />
                </div>
              </el-tab-pane>
              <el-tab-pane label="消费记录表" name="second">
                <el-table
                  :data="customData"
                  stripe
                  style="width: 100%;padding:0 32px;"
                >
                  <el-table-column
                    prop="code"
                    label="消费编号"
                    width="150"
                    align="center"
                  />
                  <el-table-column
                    prop="code2"
                    label="项目编号"
                    width="150"
                    align="center"
                  />
                  <el-table-column
                    prop="money"
                    label="消费云币"
                    width="200"
                    align="center"
                  >
                    <template slot-scope="scope">
                      <span class="mcg">{{ scope.row.money }}元</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="account"
                    label="消费账号"
                    width="150"
                    align="center"
                  />
                  <el-table-column
                    prop="date"
                    label="充值时间"
                    align="center"
                  />
                </el-table>
                <div class="pagination-wrap">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                  />
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
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
      activeName: 'first',
      rechargeData: [
        {
          code: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        }
      ],
      customData: [
        {
          code: '001',
          code2: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          code2: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          code2: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          code2: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          code2: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          code2: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        }
      ]
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
          .fr {
            color: #5a8ad9;
            font-size: 14px;
            span {
              margin-left: 30px;
              cursor: pointer;
            }
          }
        }
        .money-detail {
          background-color: #fff;
          height: 150px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          > li {
            width: 20%;
            display: flex;
            align-items: center;
            flex-direction: column;
            p:first-child {
              color: #999;
              font-size: 12px;
            }
            p:last-child {
              color: #333;
              font-size: 20px;
              margin-top:14px;
            }
            &:first-child {
              p:first-child {
                font-size: 16px;
              }
              p:last-child {
                color: #F4621F;
                font-size: 34px;
                margin-top:20px;
              }
            }
          }
        }
        .list-con {
          margin-top: 12px;
          background-color: #fff;
          .mc{
            color:#F4621F
          }
          .mcg{
            color:#008813
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
