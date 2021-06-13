<template>
  <div class="center-page">
    <div class="center-wrap">
      <div class="center-link"><i class="el-icon-s-home" /> <i class="el-icon-caret-right" />个人中心<i class="el-icon-caret-right" />展厅管理<i class="el-icon-caret-right" />素材管理</div>
      <div class="w clearfix">
        <div class="t">
          <span>素材管理</span>
          <el-input
            v-model="search"
            placeholder="搜索"
            prefix-icon="el-icon-search"
          />
        </div>
        <div>
          <div class="l-w fl">
            <h1>我的展厅</h1>
            <ul>
              <li class="on">
                展厅模板-01
              </li>
              <li>
                展厅模板-02
              </li>
              <li>
                展厅模板-03
              </li>
              <li>
                展厅模板-04
              </li>
            </ul>
          </div>
          <div class="r-w fr">
            <div class="action-wrap">
              <ul class="t">
                <li v-for="(item,index) in uploadType" :key="index" :class="{'on':item.type === currentType }" @click="getTypeList(item.type)">
                  {{ item.name }}
                </li>
              </ul>
              <div>
                <span class="has-select">已选中<span class="c9">{{ checkList.length }}</span>个文件</span>
                <el-button type="danger" size="medium">删除素材</el-button>
                <el-button type="primary" size="medium" @click="openModal">上传素材</el-button>
              </div>
            </div>
            <div class="list-con clearfix">
              <el-checkbox-group id="imgPreview" v-model="checkList">
                <div class="item-wrap">
                  <el-checkbox
                    class="check-box"
                    label="1"
                    size="medium"
                  >&nbsp;</el-checkbox>
                  <div class="img-wrap">
                    <img
                      preview="1"
                      large="@/assets/images/index/bannerbg.png"
                      src="@/assets/images/index/bannerbg.png"
                      alt=""
                    >
                  </div>
                  <div class="show-bar">
                    <p><span class="title-text">乡村历史展馆 </span></p>
                  </div>
                </div>
                <div class="item-wrap">
                  <el-checkbox
                    class="check-box"
                    label="2"
                  >&nbsp;</el-checkbox>
                  <div class="img-wrap">
                    <img
                      src="@/assets/images/index/bannerbg.png"
                      alt=""
                    >
                  </div>
                  <div class="show-bar">
                    <p><span class="title-text">乡村历史展馆 </span></p>
                  </div>

                </div>
                <div class="item-wrap">
                  <el-checkbox
                    class="check-box"
                    label="3"
                  >&nbsp;</el-checkbox>
                  <div class="img-wrap">
                    <img
                      src="@/assets/images/index/bannerbg.png"
                      alt=""
                    >
                  </div>
                  <div class="show-bar">
                    <p><span class="title-text">乡村历史展馆 </span> </p>
                  </div>
                </div>
                <div class="item-wrap">
                  <el-checkbox
                    class="check-box"
                    label="4"
                  >&nbsp;</el-checkbox>
                  <div class="img-wrap">
                    <img
                      src="@/assets/images/index/bannerbg.png"
                      alt=""
                    >
                  </div>
                  <div class="show-bar">
                    <p><span class="title-text">乡村历史展馆 </span> </p>
                  </div>
                </div>
                <div class="item-wrap">
                  <el-checkbox
                    class="check-box"
                    label="5"
                  >&nbsp;</el-checkbox>
                  <div class="img-wrap">
                    <img
                      src="@/assets/images/index/bannerbg.png"
                      alt=""
                    >
                  </div>
                  <div class="show-bar">
                    <p><span class="title-text">乡村历史展馆 </span> </p>
                  </div>
                </div>
              </el-checkbox-group>
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
      </div>
    </div>
    <el-dialog :title="title+'上传'" :width="currentType !== 'article' ? '520px': '680px'" :visible.sync="dialogFormVisible">
      <ImgUpload v-if="currentType === 'image'" v-model="dialogFormVisible" />
      <Gif v-if="currentType === 'gif'" v-model="dialogFormVisible" />
      <VideoComponent v-if="currentType === 'video'" v-model="dialogFormVisible" />
      <FileComponent v-if="currentType === 'file'" v-model="dialogFormVisible" />
      <AudioComponent v-if="currentType === 'audio'" v-model="dialogFormVisible" />
      <ArticleComponent v-if="currentType === 'article'" v-model="dialogFormVisible" />
    </el-dialog>

  </div>
</template>
<script>
import ImgUpload from '@/components/material_manager/ImgUpload'
import Gif from '@/components/material_manager/Gif'
import VideoComponent from '@/components/material_manager/Video'
import FileComponent from '@/components/material_manager/File'
import AudioComponent from '@/components/material_manager/Audio'
import ArticleComponent from '@/components/material_manager/Article'

import Viewer from 'viewerjs'

import 'viewerjs/dist/viewer.css'
export default {
  components: {
    ImgUpload,
    Gif,
    VideoComponent,
    FileComponent,
    AudioComponent,
    ArticleComponent
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
      search: '',
      checkList: [],
      currentType: 'image',
      uploadType: [
        {
          name: '图片',
          type: 'image'
        },
        {
          name: '动图',
          type: 'gif'
        },
        {
          name: '视频',
          type: 'video'
        },
        {
          name: '文件',
          type: 'file'
        },
        {
          name: '音频',
          type: 'audio'
        },
        {
          name: '文章',
          type: 'article'
        }
      ],

      dialogFormVisible: false
    }
  },
  computed: {
    title() {
      return this.uploadType.filter((v) => v.type === this.currentType)[0].name
    }
  },
  mounted() {
    setTimeout(() => {
      const imgWrap = document.getElementById('imgPreview')
      new Viewer(imgWrap, {})
    }, 15 * 1000)
  },
  destroyed() {},
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command)
    },
    openModal() {
      this.dialogFormVisible = true
    },
    getTypeList(type) {
      this.currentType = type
    }

  }
}
</script>
<style lang="scss" scoped>
.center-page {
  /deep/ .el-dialog__header{
    border-bottom: 1px dashed rgba(0, 0, 0, 0.6);
    padding-bottom:20px;
  }
  /deep/ .el-dialog__body{
    padding-bottom:0px;
    padding-top:20px;
  }
  background-color: #f9f9f9;
  .center-wrap {
    width: 1376px;
    margin: 0 auto;
    font-weight: 500;
    .center-link {
      padding: 32px 0;
      color: #999999;
      i {
        margin: 0 5px;
      }
    }
    .w {
      width: 100%;
      background-color: #fff;
      color: #333333;
      .t {
        height: 70px;
        padding: 32px;
        border-bottom: 2px dashed rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: space-between;
        align-items: center;
        /deep/ .el-input {
          width: 280px;
          height: 34px;
        }
      }
      .l-w {
        width: 216px;
        h1 {
          font-size: 16px;
          font-weight: 500;
          height: 70px;
          padding-left: 30px;
          line-height: 70px;
        }
        ul {
          > li {
            font-size: 14px;
            margin-bottom: 30px;
            padding-left: 30px;
            cursor: pointer;
            &.on {
              color: #41d9d9;
            }
          }
        }
      }
      .r-w {
        width: 1160px;
        .action-wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:0 32px;
            .has-select{
                margin-right: 10px;
            }

        }
        .t {
          border-bottom: none;
          font-size: 16px;
          justify-content: start;
          padding:0;
          li {
            margin: 0 16px;
            cursor: pointer;
            &.on {
              color: #41d9d9;
            }
          }
        }
        .list-con {
          .item-wrap {
            float: left;
            position: relative;
            width: 266px;
            background-color: #fff;
            overflow: hidden;
            margin-left: 18px;
            margin-bottom: 16px;
            box-shadow: #f9f9f9 0 10px 5px;
            .check-box {
              position: absolute;
              top: 10px;
              left: 10px;
            }
            .img-wrap {
              width: 266px;
              height: 170px;
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
              }
            }
            p {
              align-items: center;
              display: flex;
              justify-content: center;
              .title-text {
                font-size: 16px;
                font-weight: 500;
                color: #333333;
              }
            }
            .show-bar {
              padding: 10px;
              box-shadow: #999999 0 10px 5px;
            }
          }
        }
      }
    }
  }
}
</style>
