<template>
  <div class="center-page">
    <div class="center-wrap">
      <div class="center-link"><i class="el-icon-s-home" /> <i class="el-icon-caret-right" />个人中心<i class="el-icon-caret-right" />收藏管理</div>
      <div class="w clearfix">
        <SubMenu />
        <div class="r-w fr">
          <div class="list-con change-tab-css">
            <el-tabs v-model="activeName">
              <el-tab-pane
                label="案例"
                name="first"
              >
                <el-table
                  :data="rechargeData"
                  stripe
                  style="width: 100%;padding:0 32px;"
                >
                  <el-table-column
                    prop="code"
                    label="展馆名称"
                    width="450"
                    align="center"
                  >
                    <template slot-scope="scope">
                      <div class="name-wrap">
                        <div class="img-wrap fl">
                          <img
                            src="@/assets/images/index/bannerbg.png"
                            alt=""
                          >
                        </div>
                        <div class="info fl">
                          <p class="n">鸿发陶瓷工艺品展厅{{ scope.code }} </p>
                          <p class="code"><span>编号001</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
                        </div>
                      </div>

                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="money"
                    label="金额"
                    width="200"
                    align="center"
                  >
                    <template slot-scope="scope">
                      <span class="mc">{{ scope.row.money }}元</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="number"
                    label="操作"
                    align="center"
                  >
                    <template slot-scope="">
                      <span>取消收藏</span>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="pagination-wrap">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                  />
                </div>
              </el-tab-pane>
              <el-tab-pane
                label="模板"
                name="second"
              >
                <el-table
                  :data="rechargeData"
                  stripe
                  style="width: 100%;padding:0 32px;"
                >
                  <el-table-column
                    prop="code"
                    label="展馆名称"
                    width="450"
                    align="center"
                  >
                    <template slot-scope="scope">
                      <div class="name-wrap">
                        <div class="img-wrap fl">
                          <img
                            src="@/assets/images/index/bannerbg.png"
                            alt=""
                          >
                        </div>
                        <div class="info fl">
                          <p class="n">鸿发陶瓷工艺品展厅{{ scope.code }} </p>
                          <p class="code"><span>编号001</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
                        </div>
                      </div>

                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="money"
                    label="金额"
                    width="200"
                    align="center"
                  >
                    <template slot-scope="scope">
                      <span class="mc">{{ scope.row.money }}元</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="number"
                    label="操作"
                    align="center"
                  >
                    <template slot-scope="">
                      <span>取消收藏</span>
                    </template>
                  </el-table-column>
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
        .name-wrap {
          height: 100px;
          padding: 8px 0;
          .img-wrap {
            width: 124px;
            height: 104px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .info {
            margin: 16px 0 0 18px;
            .n {
              font-size: 16px;
            }
            .code {
              margin-top: 14px;
              color: #bababa;
            }
          }
        }

        .list-con {
          margin-top: 12px;
          background-color: #fff;
          .mc {
            color: #f4621f;
          }
          .mcg {
            color: #008813;
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
