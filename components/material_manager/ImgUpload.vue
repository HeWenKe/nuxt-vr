<template>
  <div class="upload">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
      style="width:90%"
    >
      <el-form-item
        label="素材名称"
        prop="name"
      >
        <el-input
          v-model="ruleForm.name"
          placeholder="请输入素材名称"
        />
      </el-form-item>
      <el-form-item
        label="上传素材"
        prop="fileList"
      >
        <el-upload
          ref="upload"
          class="upload-demo"
          accept=".jpg,.png"
          :action="action"
          :on-success="handleSuccess"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :file-list="ruleForm.fileList"
          :on-change="handleChange"
          :auto-upload="false"
        >
          <el-button
            type="primary"
            plain
          >上传图片</el-button>
          <div
            slot="tip"
            class="el-upload__tip"
          >支持上传jpg/png文件，且不超过10MB</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="分类标签">
        <el-input
          v-model="ruleForm.tags"
          placeholder="输入标签后按“Enter”回车确认，最多支持3个"
          @keyup.enter.native="handleInputConfirm"
        />
        <div>常用：
          <el-tag
            v-for="tag in ruleForm.dynamicTags"
            :key="tag"
            closable
            :disable-transitions="false"
            @close="handletag(tag)"
          >
            {{ tag }}
          </el-tag>
        </div>
      </el-form-item>
      <el-form-item
        label="素材描述"
        prop="textarea"
      >
        <el-input
          v-model="ruleForm.textarea"
          type="textarea"
          placeholder="请输入描述内容"
          maxlength="300"
          show-word-limit
        />
      </el-form-item>
      <el-form-item class="formfooter">
        <el-button
          type="primary"
          plain
          @click="submitForm('ruleForm')"
        >确定</el-button>
        <el-button @click="gdialogVisible();resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeName: 'first',
      ruleForm: {
        name: '',
        fileList: [],
        tags: '',
        dynamicTags: [],
        aurl: '',
        textarea: '',
        checkList: []
      },
      rules: {
        name: [{ required: true, message: '素材名称', trigger: 'blur' }],
        fileList: [
          { required: true, message: '请选择图片', trigger: 'change' }
        ],
        aurl: [
          {
            pattern: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,
            message: '请输入正确地址',
            trigger: 'blur'
          }
        ],
        textarea: [{ message: '素材描述', trigger: 'blur' }]
      },
      inputVisible: true,
      inputValue: '',
      // fileList: [],
      isshow: true,
      dialogImageUrl: '',
      dialogVisible: false,
      diafileList: [],
      action: 'https://jsonplaceholder.typicode.com/posts/'
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
      if (tab.name === 'second') {
        // 触发重置标签事件
        this.ruleForm.dynamicTags = []
        this.isshow = true
      } else {
        // 触发重置标签事件
        this.ruleForm.dynamicTags = []
        this.isshow = true
      }
    },

    //   分类标签
    handletag(tag) {
      this.ruleForm.dynamicTags.splice(
        this.ruleForm.dynamicTags.indexOf(tag),
        1
      )
    },
    handleInputConfirm() {
      const inputValue = this.ruleForm.tags
      if (this.ruleForm.dynamicTags.length < 3) {
        this.ruleForm.dynamicTags.push(inputValue)
      } else {
        this.$message({
          type: 'warning',
          message: '只能添加3个标签'
        })
      }
      this.ruleForm.tags = ''
    },
    //   上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleChange(file, fileList) {
      if (fileList.length > 0) {
        console.log(fileList.length)
        this.ruleForm.fileList = [fileList[fileList.length - 1]] // 这一步，是 展示最后一次选择的文件
      }
    },
    // 图片上传
    handleSuccess(res, file, fileList) {
      // 这里可以写文件上传成功后的处理,但是一定要记得给fileUrl赋值
      this.registData.fileUrl = 'fileUrl'
      // 文件上传后不会触发form表单的验证,要手动添加验证
      this.$refs.registerRef.validateField('fileUrl')
    },
    // 关闭弹窗
    gdialogVisible() {
      this.$emit('handleClose')
    },
    next() {
      this.isshow = false
    },
    // handleRemove(file, fileList) {
    // console.log(file, fileList);
    // },
    handlePictureCardPreview(file, diafileList) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
      console.log(diafileList)
    },
    // 单个上传图片
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(valid)
          // this.$refs.upload.submit();
          const imgname = this.ruleForm.name
          const imgurl = this.ruleForm.fileList
          const dynamicTags = this.ruleForm.dynamicTags
          const aurl = this.ruleForm.aurl
          const textarea = this.ruleForm.textarea
          const qitadata = this.ruleForm.checkList
          console.log(imgname, imgurl, dynamicTags, aurl, textarea, qitadata)
        } else {
          this.$message({
            message: '表单未填写完',
            type: 'error'
          })
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped lang="scss">
.upload{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.formfooter {
  padding: 20px 0 0 0;
  margin-top: 0px;
  text-align: right;
}
.txtts {
  margin-bottom: 20px;
}
.checkboxdiv {
  margin: 0 0 30px 0;
}

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

</style>
