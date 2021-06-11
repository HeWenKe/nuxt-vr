<template>
  <!-- 应用案例 -->
  <div class="app_page abg">
    <div class="single-banner-wrap">
      <h1>加速赋能百行千业
      </h1>
      <p>
        融合创新产业数字化升级能力
      </p>
    </div>
    <div class="case-content-wrap">
      <div class="search-wrap">
        <div class="each-item">
          <span>分类：</span>
          <ul>
            <li class="on">
              全部
            </li>
            <li>
              科技馆
            </li>
            <li>
              体验馆
            </li>
            <li>
              产业馆
            </li>
            <li>
              艺术馆
            </li>
            <li>
              主题馆
            </li>
            <li>
              展览会
            </li>
            <li>
              其他
            </li>
          </ul>
        </div>
        <div class="each-item">
          <span>面积：</span>
          <ul>
            <li class="on">
              全部
            </li>
            <li>
              ≤50m²
            </li>
            <li>
              51-100m²
            </li>
            <li>
              101-200m²
            </li>
            <li>
              201-300m²
            </li>
            <li>
              301-500m²
            </li>
            <li>
              601-700m²
            </li>
            <li>
              701-1000m²
            </li>
            <li>
              1001-1500m²
            </li>
            <li>
              ＞1500m²
            </li>
          </ul>
        </div>
        <div class="each-item">
          <span>价格：</span>
          <ul>
            <li class="on">
              全部
            </li>
            <li>
              1000元
            </li>
            <li>
              2000元
            </li>
            <li>
              3000元
            </li>
            <li>
              4000元
            </li>
            <li>
              5000元
            </li>
          </ul>
        </div>
        <div class="each-item">
          <span>搜索：</span>
          <el-input
            v-model="input4"
            style="width:230px;"
            placeholder="请搜索你想要的模板"
          >
            <i slot="suffix" class="el-input__icon el-icon-search" />
          </el-input>
        </div>
      </div>
      <div class="list-con clearfix">
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即查看</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即查看</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即查看</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即查看</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即查看</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即查看</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即查看</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即查看</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即查看</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即查看</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即查看</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即查看</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img src="@/assets/images/index/bannerbg.png" alt="">
          </div>
          <div class="show-bar">
            <p><span class="title-text">深圳文博会陕西展馆线上展览 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
          </div>
          <button class="vr-btn">立即查看</button>
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
</template>
<script>
export default {
  async asyncData({ $axios }) {
    console.log($axios)
    console.log(process.env.NODE_ENV)
    const ip = await $axios.$get('/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=today_topic_2018')
    return { ip }
    // return { ip };
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
.item-wrap{
  height:276px;
}

</style>

