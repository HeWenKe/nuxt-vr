<template>
  <div class="container home-page">
    <div class="banner-page">
      <div class="wrap">
        <div class="ball icon1">
          <img src="@/assets/images/index/ball1.png">
        </div>
        <div class="ball icon2">
          <img src="@/assets/images/index/ball2.png">
        </div>
        <div class="ball icon3">
          <img src="@/assets/images/index/ball3.png">
        </div>
        <div class="ball icon4">
          <img src="@/assets/images/index/ball4.png">
        </div>
        <div class="wd">
          <h1>超简单的在线展厅制作工具</h1>
          <span>快速构建3D可视化场景一键玩转数字互动营销
          </span>
          <nuxt-link to="/show">立即制作</nuxt-link>
        </div>
        <div class="video">
          <video muted="" autoplay="true" loop="true">
            <source
              src="https://www.chuanying520.com/production/video/banner.mp4?v=1"
              type="video/mp4"
            >
          </video>
        </div>

      </div>
    </div>
    <div class="case-con">
      <h1 class="tl">丰富的案例应用 满足各种场景需求
      </h1>
      <div class="tab-list">
        <li class="on">科技馆</li>
        <li>体验馆</li>
        <li>产业馆</li>
        <li>艺术馆</li>
        <li>主题馆</li>
        <li>展览馆</li>
        <li>其他</li>
      </div>
      <div class="tab-con">
        <ul>
          <li>
            <div class="select-icon" />
            <div class="img-wrap">
              <img src="@/assets/images/index/bannerbg.png" alt="">
            </div>
            <div class="show-bar">
              <p><span class="title-text">深圳文博会陕西展馆线上展览 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
              <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
            </div>
            <button class="vr-btn">立即查看</button>
          </li>
          <li>
            <div class="select-icon" />
            <div class="img-wrap">
              <img src="@/assets/images/index/bannerbg.png" alt="">
            </div>
            <div class="show-bar">
              <p><span class="title-text">深圳文博会陕西展馆线上展览 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
              <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
            </div>
            <button class="vr-btn">立即查看</button>
          </li>
          <li>
            <div class="select-icon" />
            <div class="img-wrap">
              <img src="@/assets/images/index/bannerbg.png" alt="">
            </div>
            <div class="show-bar">
              <p><span class="title-text">深圳文博会陕西展馆线上展览 </span> <i class="pre-view"><i class="el-icon-view" /> 2000</i></p>
              <p class="code-text"><span>编号:001 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积:100m²</span></p>
            </div>
            <button class="vr-btn">立即查看</button>
          </li>
        </ul>
        <button class="vr-btn">查看更多</button>
      </div>
    </div>
    <div class="build-con">
      <h1 class="tl">丰富的案例应用 满足各种场景需求
      </h1>
      <div class="b-step">
        <p class="icon-wrap m">选择模板</p>
        <p class="next-step" />
        <p class="icon-wrap s">自助布展</p>
        <p class="next-step" />
      </div>
      <div class="tab-list">
        <ul>
          <li class="m1 on">
            <p class="t-name">海量展厅模版供选择
            </p>
            <p>
              3D形象馆、3D展台、3D商城一应俱全
            </p>
          </li>
          <li class="m1">
            <p class="t-name">自由陈列快速布展
            </p>
            <p>
              可展示文本、图片、视频、3D模型等素材
            </p>
          </li>
          <li class="m1">
            <p class="t-name">快速保存一键发布
            </p>
            <p>
              3D形象馆、3D展台、3D商城一应俱全
            </p>
          </li>
          <li class="m1">
            <p class="t-name">兼容多渠道高效裂变

            </p>
            <p>
              一键链接官网、APP、微信、微博、抖音等

            </p>
          </li>
          <li class="m1">
            <p class="t-name">沉浸式体验所见即所得
            </p>
            <p>
              用户720°动态漫游，零距离与产品互动
            </p>
          </li>
        </ul>
        <div class="img-con">
          <img src="@/assets/images/index/picsm.png" alt="">
        </div>
      </div>
      <div id="an-container1" class="an-box">
        <div class="img-wrap item-leftContainer">
          <img src="@/assets/images/index/picsm.png" alt="">
        </div>
        <div class="an-detail item-rightContainer">
          <h2>极速布展</h2>
          <p>3D场景+3D产品，让展示和交互更真实</p>
          <ul>
            <li>
              <i class="el-icon-copy-document" />
              模板自选
            </li>
            <li>
              <i class="el-icon-document-copy" />
              素材管理
            </li>
            <li>
              <i class="el-icon-picture-outline" />
              图文布展
            </li>
            <li>
              <i class="el-icon-magic-stick" />
              热点配置
            </li>
            <li>
              <i class="el-icon-money" />
              模型布展
            </li>
          </ul>
        </div>

      </div>
      <div id="an-container2" class="an-box bg-fff ">
        <div class="an-detail item-leftContainer">
          <h2>3D逛展</h2>
          <p>突破空间限制，创造沉浸式体验</p>
          <ul>
            <li>
              <i class="el-icon-map-location" />
              自由漫游
            </li>
            <li>
              <i class="el-icon-paperclip" />
              自动巡馆
            </li>
            <li>
              <i class="el-icon-thumb" />
              热点互动
            </li>
            <li>
              <i class="el-icon-share" />
              一键分享
            </li>
          </ul>
        </div>
        <div class="img-wrap item-rightContainer">
          <img src="@/assets/images/index/picsm.png" alt="">
        </div>
      </div>
      <div id="an-container3" class="an-box">
        <div class="img-wrap item-leftContainer">
          <img src="@/assets/images/index/picsm.png" alt="">
        </div>
        <div class="an-detail item-rightContainer">
          <h2>增值功能</h2>
          <p>高效营销裂变，AI大数据分析</p>
          <ul>
            <li>
              <i class="el-icon-video-camera" />
              在线直播
            </li>
            <li>
              <i class="el-icon-headset" />
              在线客服
            </li>
            <li>
              <i class="el-icon-document" />
              在线表单
            </li>
            <li>
              <i class="el-icon-c-scale-to-original" />
              加密访问
            </li>
            <li>
              <i class="el-icon-edit-outline" />
              访问统计
            </li>
            <li>
              <i class="el-icon-s-custom" />
              访客信息
            </li>
          </ul>
        </div>
      </div>
      <div class="join-us">
        <p>
          即刻加盟
        </p>
        <p>
          开启3D数字化展厅时代
        </p>
        <button class="vr-btn">
          加盟我们
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
// import { mapState } from 'vuex'
export default {
  async asyncData({ $axios }) {
    console.log($axios)
    console.log(process.env.NODE_ENV)
    const ip = await $axios.$get('/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=today_topic_2018')
    return { ip }
    // return { ip };
  },
  computed: {
    username() {
      return this.$store.state.username
    }
  },
  mounted() {
    window.addEventListener('scroll', this.bindHandleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.bindHandleScroll)
  },
  methods: {
    //  ...mapMutations({
    //     toggle: 'todos/toggle'  //页面中会用到更新状态
    //   }),
    tologin() {
      this.$store.commit('setUsername', 'hewenke11111111111')
    },
    bindHandleScroll() {
      const parentEelement1 = document.getElementById('an-container1')
      const parentEelement2 = document.getElementById('an-container2')
      const parentEelement3 = document.getElementById('an-container3')
      this.setAnimation(parentEelement1)
      this.setAnimation(parentEelement2)
      this.setAnimation(parentEelement3)
    },
    setAnimation(parentEelement) {
      (function(parentEelement) {
        const windowHeight = window.innerHeight
        const parentOffsetTop = parentEelement.offsetTop
        const leftElement = parentEelement.getElementsByClassName('item-leftContainer')[0]
        if (window.pageYOffset + windowHeight > leftElement.offsetTop + parentOffsetTop + 200) {
          leftElement.style.animation = 'showLeft 2s forwards' // 添加动画
        } else {
          leftElement.style.animation = 'hideLeft 1s forwards' // 隐藏动画
        }
        const rightElement = parentEelement.getElementsByClassName('item-rightContainer')[0]
        if (window.pageYOffset + windowHeight > rightElement.offsetTop + parentOffsetTop + 200) {
          rightElement.style.animation = 'showRight 2s forwards' // 添加动画
        } else {
          rightElement.style.animation = 'hideRight 1s forwards' // 隐藏动画
        }
      })(parentEelement)
    }
  }
}
</script>

<style lang="scss">
.banner-page {
  height: 745px;
  background: url(@/assets/images/index/bannerbg.png) no-repeat center -100px;
  overflow: hidden;
  margin-top: -76px;
  .wrap {
    height: 100%;
    padding-top: 100px;
    position: relative;
    .ball {
      img {
        display: block;
      }
      position: absolute;
      transition: all 0.5s;
    }
    .icon1 {
      top: 212px;
      left: -70px;
      animation: updown 4s linear infinite;
    }
    .icon2 {
      top: 655px;
      left: 117px;
      animation: updown 3s linear infinite;
    }
    .icon3 {
      top: 538px;
      left: 435px;
      animation: updown 5s linear infinite;
    }
    .icon4 {
      top: 314px;
      right: -108px;
      animation: updown 3.5s linear infinite;
    }

    @keyframes updown {
      0% {
        transform: translate(0, -10%);
        opacity: 1;
      }

      25% {
        transform: translate(0, 0);
      }

      50% {
        transform: translate(0, 10%);
        opacity: 0.5;
      }

      75% {
        transform: translate(0, 0);
      }

      100% {
        transform: translate(0, -10%);
        opacity: 1;
      }
    }
    .wd {
      width: 610px;
      float: left;
      padding-left: 70px;
      padding-top: 130px;
      h1 {
        display: block;
        font-size: 40px;
        color: #fff;
        font-weight: normal;
        letter-spacing: 5px;
      }
      span {
        display: block;
        font-size: 18px;
        color: #fff;
        padding: 25px 0 40px;

      }
      a {
        display: block;
        width: 170px;
        height: 48px;
        border-radius: 48px;
        background: #fff;
        text-align: center;
        font-size: 18px;
        color: #fff;
        line-height: 48px;
         background-color: #41D9D9
      }
    }
    .video {
      background: url(@/assets/images/index/picsm.png) no-repeat center;
      background-size: 100% 100%;
      width: 684px;
      height: 439px;
      float: right;
      padding: 55px 29px 0;
      position: relative;
      video {
        display: block;
        width: 100%;
      }
    }
  }
}

.case-con{
    padding-top:100px;
    text-align: center;
    background: #F9F9F9;
    width:100%;
    .tab-list{
      margin:40px 0 24px 0;
      display: flex;
      justify-content: center;
      >li{
        cursor: pointer;
        height:30px;
        line-height: 30px;
        padding:0 20px;
        border-radius: 23px;
        border: 1px solid #E9E9E9;
        margin:0 5px;
        &.on{
          background-color:#41D9D9;
          color: #fff;
          border: none;
        }
      }
    }
    .tab-con{
      >ul{
        display: flex;
        justify-content: center;
        margin:0 auto;
        >li{
        position: relative;
        width:300px;
        margin:0 12px;
        background-color: #fff;
        overflow: hidden;
        height: 275px;
        .img-wrap{
          width:300px;
          height: 200px;
           >img{
             width:100%;
             height:100%;
          }

        }
        &:hover{
          transform: scale(1.1);
          .show-bar{
            display: none;
          }
          button{
            display: block;
          }
          transition: all 1.5s

        }
        .select-icon{
          position: absolute;
          width:28px;
          height:28px;
          right:12px;
          top:12px;
          background-color: #3319a5

        }
        p{
          align-items:baseline;
          margin-bottom:12px;
          display: flex;
          justify-content: space-between;
          .title-text{
            font-size: 16px;
            font-weight: 500;
            color: #333333;
          }
          &.code-text{
            justify-content: left;
          }
          &.code-text,.pre-view{
            color:#BABABA;
            font-size: 13px;
          }
        }
        button{
          display: none;
          width:112px;
          height:38px;
          border-radius: 20px;
          margin-top:18.5px;
          margin-left:94px;
        }
        .show-bar{
          height:75px;
          padding:14px 15px 0;
        }
      }
      }

      >button{
        margin:80px auto 100px;
        width: 170px;
        height: 46px;
        font-size: 18px;
        font-weight: 500;
        box-shadow: #41D9D9 0px 0px 10px;
      }

    }
}
.build-con{
  padding-top:100px;
  .tl{
    margin-bottom:80px;
    text-align: center
  }
  .b-step{
    display: flex;
    justify-content: center;
    align-items: center;
    >p{
      margin:0 44px;
      &.icon-wrap{
        font-size: 16px;
        font-weight: bold;
        color: #696969;
        padding-top:46px;
        background: url(@/assets/images/index/picsm.png) top center no-repeat;
        background-size: 32px 32px;
      }
      &.next-step{
        height:14px ;
        width: 42px;
        background-color: #3319a5
      }

    }
  }
  .tab-list{
    margin-top:40px;
    margin-bottom: 110px;
    display: flex;
    justify-content: center;
    >ul{
      width:400px;
      >li{
        width:100%;
        height: 88px;
        padding-left:100px;
        color:#666;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center
        p{
          width: 100%;
        }
        .t-name{
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        &.m1{
          background:url(@/assets/images/index/picsm.png) 32px no-repeat;
          background-size: 48px 48px;
          &.on{
            color:#fff;
             background:#41D9D9   url(@/assets/images/index/picsm.png)  32px no-repeat;
             background-size: 48px 48px;
          }
        }
      }

    }
  }
  .img-con{
    width:860px;
    height: 430px;
    margin-left:156px;
    padding:30px 15px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.an-box{
  position: relative;
  background: #F9F9F9;
  padding:100px 0;
  display: flex;
  justify-content: center;
  .img-wrap{
    width:584px;
    height: 364px;
    margin-right: 136px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .an-detail{
    display: flex;
    align-items: center;
    width:720px;
    flex-wrap: wrap;
    align-content: center;
    h2{
       font-size: 32px;
       font-weight: bold;
       color: #333333;
       line-height: 20px;
       height: 32px;;
       position: relative;
       width:670px;
       &::before{
         content: '';
         display: block;
         width: 5px;
         height: 20px;
         background-color: #41D9D9;
         position: absolute;
         top:4px;
         left:-20px;
       }

    }
    p,li{
      color: #696969;
    }
    p{
      font-size: 20px;
      font-weight: 500;
      margin-top:20px;
      width:670px;
    }

    ul{
      margin-top:18px;
      display: flex;
      flex-wrap: wrap;
      width: 670px;
      li{
        display: flex;
        align-items: center;
        margin-right:68px;
        font-size: 14px;
        margin-top:32px;
        i{
          font-size: 24px;
          margin-right:14px;
          color:#555;
        }
      }
    }
  }
  &.bg-fff{
    background-color: #fff;
    .img-wrap{
      margin-right: 0;
      width:604px;
      height: 329px;
    }
  }

}
.join-us{
  height: 400px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-color: #555;
  p{
    text-align: center;
    width: 100%;
    font-size: 32px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    margin-bottom: 10px;
  }
  button{
    margin-top:30px;
    width: 168px;
    height: 52px;
  }
}
.tl{
  font-size: 32px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #696969;
  line-height: 20px;
}

//动画
//左侧容器
  .item-leftContainer {
    opacity: 0;
    transform: translateX(-300px);
  }
  //右侧容器
  .item-rightContainer {
    opacity: 0;
    transform: translateX(300px);
  }

  @keyframes showLeft {
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes showRight {
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes hideLeft {
    to {
      opacity: 0;
      transform: translateX(-300px);
    }
  }
  @keyframes hideRight {
    to {
      opacity: 0;
      transform: translateX(300px);
    }
  }

</style>
