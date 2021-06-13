<template>
  <div class="upload">
    <el-tabs
      class="tab-wrap"
      tab-position="left"
    >
      <el-tab-pane label="展厅信息">
        <el-form
          ref="showBaseForm"
          class="showBaseForm"
          :model="showBaseForm"
          :rules="showBaseFormRules"
          label-width="100px"
          style="width:90%"
        >
          <el-form-item
            label="LOGO"
            prop="logo"
          >
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="showBaseForm.logoSrc"
                :src="showBaseForm.logoSrc"
                class="avatar"
              >
              <i
                v-else
                class="el-icon-plus avatar-uploader-icon"
              />
            </el-upload>
          </el-form-item>
          <el-form-item
            label="展厅名称"
            prop="name"
          >
            <el-input
              v-model="showBaseForm.name"
              type="text"
              placeholder="请输入展厅名称"
              maxlength="20"
              show-word-limit
            />
          </el-form-item>
          <el-form-item
            label="展厅描述"
            prop="disc"
          >
            <el-input
              v-model="showBaseForm.disc"
              type="textarea"
              placeholder="请输入描述内容"
              maxlength="300"
              :rows="4"
              show-word-limit
            />
          </el-form-item>
          <div class="clearfix">
            <el-form-item
              class="fl w50"
              label="联系人"
              prop="username"
            >
              <el-input
                v-model="showBaseForm.username"
                placeholder="请输入联系人"
              />
            </el-form-item>
            <el-form-item
              class="fl w50"
              label="电话"
              prop="tel"
            >
              <el-input
                v-model="showBaseForm.tel"
                placeholder="请输入电话"
              />
            </el-form-item>
            <el-form-item
              class="fl w50"
              label="邮箱"
              prop="tel"
            >
              <el-input
                v-model="showBaseForm.tel"
                placeholder="请输入邮箱号"
              />
            </el-form-item>
            <el-form-item
              class="fr w50"
              label="微信"
              prop="wxcode"
            >
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img
                  v-if="showBaseForm.wxSrc"
                  :src="showBaseForm.wxSrc"
                  class="avatar"
                >
                <i
                  v-else
                  class="el-icon-plus avatar-uploader-icon"
                />
              </el-upload>
            </el-form-item>
          </div>
        </el-form>
        <div class="formfooter">
          <el-button
            type="primary"
            size="medium"
            @click="submitForm('ruleForm')"
          >确定</el-button>
          <el-button
            size="medium"
            @click="resetForm('ruleForm')"
          >取消</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="展厅封面">
        <el-form
          ref="showBaseForm"
          class="showBaseForm placeWrap"
          :model="placeWrap"
          :rules="placeWrapRules"
          label-width="100px"
          style="width:90%"
        >
          <el-form-item
            label="封面图片"
            prop=""
          >
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="placeWrap.wrapSrc"
                :src="placeWrap.wrapSrc"
                class="avatar"
              >
              <div
                v-else
                class="uplaodicon"
              >
                <i class="el-icon-picture-outline avatar-uploader-icon" />
                <p>上传图片</p>
              </div>
            </el-upload>
            <div class="tip">
              <p>仅限JPG/PNG格式。2MB以内
              </p>
              <p>建议尺寸1600*1000px
              </p>
            </div>
          </el-form-item>
          <el-form-item
            label="封面视频"
            prop=""
          >
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="placeWrap.wrapVideo"
                :src="placeWrap.wrapVideo"
                class="avatar"
              >
              <div
                v-else
                class="uplaodicon"
              >
                <i class="el-icon-video-camera avatar-uploader-icon" />
                <p>上传视频</p>
              </div>

            </el-upload>
            <div class="tip">
              <p>仅限JPG/PNG格式。2MB以内
              </p>
              <p>建议尺寸1600*1000px
              </p>
            </div>
          </el-form-item>
        </el-form>
        <div class="formfooter">
          <el-button
            type="primary"
            size="medium"
            @click="submitForm('ruleForm')"
          >确定</el-button>
          <el-button
            size="medium"
            @click="resetForm('ruleForm')"
          >取消</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="背景音乐">
        <div class="bg-music">
          <el-switch
            v-model="bgMusic.isOpenMusic"
            inactive-text="背景音乐"
          />
          <ul class="music-list">
            <li
              :class="{on:playIndex === 0}"
              @click="setMusic(0)"
            >
              <audio
                id="music0"
                src="https://win-web-ra01-sycdn.kuwo.cn/9692c5934fab01a8ab1de8ad23851dab/60c4a79e/resource/n1/128/58/37/325180458.mp3"
                preload
                hidden
              />
              <i class="el-icon-video-play" /> <span class="mus-t">世界第一等.MP3</span>
              <span class="mus-size fr">1MB</span>
            </li>
            <li
              :class="{on:playIndex === 1}"
              @click="setMusic(1)"
            >
              <audio
                id="music1"
                src="https://win-web-rh01-sycdn.kuwo.cn/27f520658340bc0a4b007ab720704a05/60c4b042/resource/n1/94/61/726642879.mp3"
                preload
                hidden
              />
              <i class="el-icon-video-play" /> <span class="mus-t">相思.MP3</span>
              <span class="mus-size fr">1MB</span>
            </li>
          </ul>
          <div class="formfooter">
            <el-button
              type="primary"
              size="medium"
              @click="submitForm('ruleForm')"
            >确定</el-button>
            <el-button
              size="medium"
              @click="resetForm('ruleForm')"
            >取消</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="增值服务">
        <div class="bg-service">
          <ul>
            <el-checkbox-group
              id="imgPreview"
              v-model="checkList"
            >
              <li>
                <span>在线客服<i class="el-icon-info" /></span>
                <el-checkbox
                  class="check-box"
                  label="1"
                  size="medium"
                >&nbsp;</el-checkbox>
              </li>
              <li>
                <span>访客信息
                  <el-tooltip
                    class="item"
                    effect="dark"
                    popper-class="tool-tip-class"
                    content="访客通过微信浏览展厅会被要求授权并绑定手机号,展厅可统计来自微信的访客信息。"
                    placement="top-start"
                  ><i class="el-icon-info" /></el-tooltip>
                </span>
                <el-checkbox
                  class="check-box"
                  label="2"
                  size="medium"
                >&nbsp;</el-checkbox>
              </li>
              <li>
                <span>直播<i class="el-icon-info" /></span>
                <el-checkbox
                  class="check-box"
                  label="3"
                  size="medium"
                >&nbsp;</el-checkbox>
              </li>
              <li>
                <span>VR带看&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一对一<i class="el-icon-info" /> </span>
                <el-checkbox
                  class="check-box"
                  label="4"
                  size="medium"
                >&nbsp;</el-checkbox>
              </li>
            </el-checkbox-group>
          </ul>
          <div class="formfooter">
            <el-button
              type="primary"
              size="medium"
              @click="submitForm('ruleForm')"
            >确定</el-button>
            <el-button
              size="medium"
              @click="resetForm('ruleForm')"
            >取消</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="权限设置">
        <div class="bg-auth">
          <h1>权限设置:</h1>
          <ul>
            <el-checkbox-group
              v-model="checkList"
            >
              <li>
                <el-checkbox
                  class="check-box"
                  label="1"
                  size="medium"
                >访问密码</el-checkbox>
              </li>
              <li>
                <el-checkbox
                  class="check-box"
                  label="2"
                  size="medium"
                >加载时显示“展厅名称”</el-checkbox>
              </li>
              <li>
                <el-checkbox
                  class="check-box"
                  label="3"
                  size="medium"
                >加载时显示“展厅描述”</el-checkbox>
              </li>
              <li>
                <el-checkbox
                  class="check-box"
                  label="4"
                  size="medium"
                >封面作为加载背景图</el-checkbox>
              </li>
              <li>
                <el-checkbox
                  class="check-box"
                  label="5"
                  size="medium"
                >隐藏评论</el-checkbox>
              </li>
              <li>
                <el-checkbox
                  class="check-box"
                  label="6"
                  size="medium"
                >隐藏分享</el-checkbox>
              </li>
              <li>
                <el-checkbox
                  class="check-box"
                  label="7"
                  size="medium"
                >隐藏展厅“头像”</el-checkbox>
              </li>

            </el-checkbox-group>
          </ul>
          <div class="formfooter">
            <el-button
              type="primary"
              size="medium"
              @click="submitForm('ruleForm')"
            >确定</el-button>
            <el-button
              size="medium"
              @click="resetForm('ruleForm')"
            >取消</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: [],
      playIndex: '',
      showBaseForm: {
        logoSrc: require('@/assets/images/index/bannerbg.png'),
        name: '党建教育纪念模板-070300',
        disc: '',
        username: '',
        tel: '',
        wxSrc: ''
      },
      showBaseFormRules: {
        name: [
          { required: true, message: '请输入展厅名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在20 个字符', trigger: 'blur' }
        ]
      },
      placeWrap: {
        wrapSrc: require('@/assets/images/index/bannerbg.png'),
        wrapVideo: ''
      },
      placeWrapRules: {},
      bgMusic: {
        isOpenMusic: true,
        id: 'xxx'
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
          // this.$refs.upload.submit();
          console.log(
            this.ruleForm.name,
            this.fileList,
            this.ruleForm.dynamicTags,
            this.ruleForm.url,
            this.ruleForm.textarea,
            this.ruleForm.checkList,
            this.diafileList
          )
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      // this.$refs[formName].resetFields()
      this.$emit('childClose')
    },
    setMusic(num) {
      for (let i = 0; i < 2; i++) {
        const audioOne = document.querySelector('#music' + i)
        if (i === num) {
          if (audioOne.paused) {
            // 切换播放中的css样式
            audioOne.load() // 音频重新加载，重新播放
            audioOne.play()
            this.playIndex = num
          } else {
            audioOne.pause()
            this.playIndex = null
          }
        } else {
          audioOne.pause()
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.upload {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  .w50 {
    width: 50%;
  }
  .tab-wrap {
    font-weight: 500;
    color: #333;
    width: 100%;
    height: 630px;
    /deep/ .el-tabs__content {
      height: 100%;
      overflow: auto;
    }
    .showBaseForm {
      padding-top: 40px;
      height: 100%;
      position: relative;
      .avatar-uploader {
        height: 68px;
        width: 68px;
        background: #cccc;
        font-size: 30px;
        text-align: center;
        line-height: 68px;
      }
      .avatar {
        width: 68px;
        height: 68px;
      }
    }
    .placeWrap {
      .avatar-uploader {
        height: 120px;
        width: 200px;
        background: #f2f2f2;
        border: 1px solid #cccccc;
        border-radius: 4px;
        font-size: 30px;
        text-align: center;
        overflow: hidden;
      }
      .avatar {
        width: 200px;
        height: 120px;
      }
      .tip {
        margin-top: 10px;
        line-height: 20px;
        font-size: 12px;
        color: #999;
      }
      /deep/ .el-upload {
        height: 100%;
        width: 100%;
      }
      .uplaodicon {
        justify-content: center;
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 100%;
        width: 100%;
        color: #9b9b9b;
        i {
          font-size: 40px;
        }
        p {
          line-height: 20px;
          font-size: 14px;
        }
      }
    }
    .bg-music {
      padding: 30px 10px 0 40px;
      /deep/ .is-active {
        color: #333;
      }
      .music-list {
        margin-top: 20px;
        > li {
          font-size: 16px;
          height: 50px;
          line-height: 50px;
          border-top: 1px solid #f2f2f2;
          cursor: pointer;
          padding-right: 10px;
          i {
            margin: 0 10px;
          }
          &.on {
            color: #41d9d9;
          }
        }
      }
    }
    .bg-service {
      padding: 30px 10px 0 40px;
      color: #333;
      ul {
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 55px;
          line-height: 55px;
          > span {
            font-size: 14px;
            display: flex;
            align-items: center;
          }
          i {
            color: #ccc;
            font-size: 20px;
            margin-left: 2px;
          }
        }
      }
    }
    .bg-auth {
      padding: 30px 10px 0 40px;
      color: #333;
      display: flex;
      justify-content: flex-start;
      h1{
          font-weight: bold;
          font-size: 14px;
          margin-right:20px;
      }
      ul li{
          margin-bottom: 15px;
      }
    }
  }
}
.formfooter {
  padding: 20px 0 0 0;
  margin-top: 0px;
  text-align: right;
  position: absolute;
  right: 32px;
  bottom: 10px;
  border-top: 1px solid #ccc;
  width: 100%;
  button {
    width: 100px;
  }
}
</style>
