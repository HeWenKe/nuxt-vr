<template>
  <div class="goodsdetail-page">
    <div class="goods-detail">
      <div class="img-w fl">
        <img
          src="@/assets/images/index/bannerbg.png"
          width="100%"
          height="100%"
          alt=""
        >
      </div>
      <div class="r-w fr">
        <p class="name">项目名称-0013</p>
        <p class="info ell">据明代张居正讲评的记载，孤竹国的君主墨胎氏遗命立幼子叔齐为继承人，孤竹国的君主墨胎氏遗命立幼子叔齐为继承人，孤竹国的君主墨胎氏遗命立幼子叔齐为继承人。叔齐欲让位于兄长伯夷伯夷不受叔齐亦不愿登位…
        </p>
        <p class="code"><span>编号001</span> <span>面积:100m²</span></p>
        <div class="price">
          <span class="">模板</span>
          <span class="f18">28888云币</span>
          <span class="fr">累计评价：1191</span>
          <span class="fr">销量：200+</span>
        </div>
        <div class="step-wrap">
          <span>时长</span>
          <div>
            <el-slider
              v-model="time"
              range
              :marks="marksTime"
              :step="6"
              show-stops
              :max="24"
            />
          </div>

        </div>
        <div class="step-wrap">
          <span>流量</span>
          <div>
            <el-slider
              v-model="potal"
              range
              :marks="marksPotal"
              :step="100"
              show-stops
              :max="500"
            />
          </div>
        </div>
        <div class="step-wrap">
          <span>总计</span>
          <div>
            <span class="total">388888云币</span> (28888+6*1+300*1)
          </div>
        </div>
        <div class="buy">
          <el-button type="warning">立即购买</el-button>
          <el-button
            type="warning"
            plain
          >预览模板</el-button>
        </div>
      </div>

    </div>
    <h1 class="sub-t">模板推荐</h1>
    <div class="case-content-wrap">
      <div class="list-con clearfix">
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img
              src="@/assets/images/index/bannerbg.png"
              alt=""
            >
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
            <p class="price-wrap"><span class="price-num">¥2000</span><span class="time-buy">限时优惠</span><span class="old-price">¥2500</span><span class="buy-num">100人购买</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即制作</button>
            <button class="vr-btn">预览模板</button>
          </div>

        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img
              src="@/assets/images/index/bannerbg.png"
              alt=""
            >
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
            <p class="price-wrap"><span class="price-num">¥2000</span><span class="time-buy">限时优惠</span><span class="old-price">¥2500</span><span class="buy-num">100人购买</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即制作</button>
            <button class="vr-btn">预览模板</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img
              src="@/assets/images/index/bannerbg.png"
              alt=""
            >
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
            <p class="price-wrap"><span class="price-num">¥2000</span><span class="time-buy">限时优惠</span><span class="old-price">¥2500</span><span class="buy-num">100人购买</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即制作</button>
            <button class="vr-btn">预览模板</button>
          </div>

        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img
              src="@/assets/images/index/bannerbg.png"
              alt=""
            >
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
            <p class="price-wrap"><span class="price-num">¥2000</span><span class="time-buy">限时优惠</span><span class="old-price">¥2500</span><span class="buy-num">100人购买</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即制作</button>
            <button class="vr-btn">预览模板</button>
          </div>
        </div>
        <div class="item-wrap">
          <div class="select-icon" />
          <div class="img-wrap">
            <img
              src="@/assets/images/index/bannerbg.png"
              alt=""
            >
          </div>
          <div class="show-bar">
            <p><span class="title-text">乡村历史展馆 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
            <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
            <p class="price-wrap"><span class="price-num">¥2000</span><span class="time-buy">限时优惠</span><span class="old-price">¥2500</span><span class="buy-num">100人购买</span></p>
          </div>
          <div class="btn-wrap">
            <button class="vr-btn">立即制作</button>
            <button class="vr-btn">预览模板</button>
          </div>

        </div>

      </div>
    </div>
    <div class="list-con change-tab-css">
      <el-tabs v-model="activeName">
        <el-tab-pane label="详情介绍" name="first">
          <div class="p30">
            详情
          </div>
        </el-tab-pane>
        <el-tab-pane label="用户评价" name="second">
          <div class="p30">
            评价
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  components: {},

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
      time: 0,
      potal: 0,
      marksTime: [],
      marksPotal: {
        0: '0G',
        100: '100G',
        200: '200G',
        300: '300G',
        400: '400G',
        500: '500G'
      }
    }
  },
  mounted() {
    this.marksTime = {
      0: '0月',
      6: '6月',
      12: '12月',
      18: '18月',
      24: '24月'
    }
  },
  destroyed() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.goodsdetail-page {
  color: #333;
  width: 1600px;
  font-weight: 500 !important;
  margin: 40px auto;
  /deep/ .el-slider__marks-text {
    font-size: 12px;
    width: fit-content;
  }
  .p30{
    padding:30px;
  }
  .goods-detail {
    height: 500px;
    .img-w {
      width: 750px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .r-w {
      width: 810px;
    }
    .name {
      font-size: 24px;
      font-weight: bold;
      margin-top: 12px;
    }
    .info {
      font-size: 12px;
      color: #666;
      margin-top: 14px;
    }
    .code {
      color: #bababa;
      margin-top: 22px;
    }
    .price {
      height: 60px;
      background: #ededed;
      color: #666;
      line-height: 60px;
      padding: 0 20px;
      margin-top: 30px;
      .f18 {
        font-size: 18px;
        color: #666;
        margin-left: 15px;
      }
      .fr {
        margin-left: 40px;
      }
    }
    .step-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 37px;
      > div {
        width: calc(100% - 80px);
        .total {
          color: #f4621f;
          font-size: 24px;
        }
      }
      > span {
        color: #999;
      }
    }
    .buy {
      margin-left: 78px;
      margin-top: 36px;
      button {
        width: 176px;
      }
    }
  }
  .sub-t {
    margin-top: 55px;
    font-size: 18px;
    font-weight: 500;
  }
  .item-wrap {
    height: 312px;
  }
}
</style>
