<template>
  <div class="upload">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm" @submit.native.prevent>
      <el-form-item label="文章标题" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入文章标题(1-32个字符)" />
      </el-form-item>
      <el-form-item label="文章内容" prop="name">
        <vue-editor v-model="content" :editor-toolbar="customToolbar" />
      </el-form-item>
      <el-form-item class="formfooter">
        <el-button type="primary" @click="submitForm('ruleForm');resetForm('ruleForm')">确认</el-button>
        <el-button @click="gdialogVisible();resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  components: { VueEditor },
  data() {
    return {
      ruleForm: {
        name: '',
        imgurl: '',
        modelurl: '',
        tags: '',
        dynamicTags: [],
        url: '',
        textarea: '',
        checkList: []
      },
      rules: {
        name: [
          { required: true, message: '素材名称', trigger: 'blur' }
        ],
        url: [
          { pattern: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/, message: '请输入正确地址', trigger: 'blur' }
        ],
        textarea: [
          { required: true, message: '素材描述', trigger: 'blur' }
        ]
      },
      inputVisible: true,
      inputValue: '',
      fileList: [],
      modelfileList: [],
      isshow: true,
      dialogImageUrl: '',
      dialogVisible: false,
      diafileList: [],
      content: '',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block']
      ]
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          // this.$refs.upload.submit();
          console.log(this.ruleForm.name, this.fileList, this.ruleForm.dynamicTags, this.ruleForm.url, this.ruleForm.textarea, this.ruleForm.checkList, this.diafileList)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    //   分类标签
    handletag(tag) {
      this.ruleForm.dynamicTags.splice(this.ruleForm.dynamicTags.indexOf(tag), 1)
    },
    handleInputConfirm() {
      const inputValue = this.ruleForm.tags
      if (inputValue) {
        if (this.ruleForm.dynamicTags.length < 3) {
          this.ruleForm.dynamicTags.push(inputValue)
        } else {
          this.$message({
            type: 'warning',
            message: '只能添加3个标签'
          })
        }
      }
      this.ruleForm.tags = ''
    },
    //   上传模型文件
    mhandleRemove(file, modelfileList) {
      console.log(file, modelfileList)
    },
    mhandlePreview(file) {
      console.log(file)
    },
    mbeforeRemove(file, modelfileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    mhandleChange(file, modelfileList) {
      if (modelfileList.length > 0) {
        console.log(modelfileList.length)
        this.modelfileList = [modelfileList[modelfileList.length - 1]] // 这一步，是 展示最后一次选择的文件
      }
    },
    // 上传封面
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
        this.fileList = [fileList[fileList.length - 1]] // 这一步，是 展示最后一次选择的文件
      }
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
.demo-ruleForm{
  width:100%;
}

</style>
