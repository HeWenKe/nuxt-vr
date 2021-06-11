<template>
  <el-dialog
    :visible="LoginType.isLogin"
    :before-close="handleClose"
  >
    <div class="clearfix login-con">
      <div class="login-bg fl" />
      <div v-if="isRestPwd" class="login-form fr">
        <el-tabs :value="LoginType.type" class="tab-wrap" @tab-click="handleClick">
          <el-tab-pane label="登录" name="login">
            <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="0" class="loginForm">
              <el-form-item label="" prop="tel">
                <el-input v-model="ruleForm.tel" placeholder="手机号" type="num" autocomplete="off" />
              </el-form-item>
              <el-form-item label="" prop="password">
                <el-input v-model="ruleForm.password" placeholder="密码" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item>
                <button class="vr-btn" type="button" style="width:100%;" @click="submitForm('ruleForm')">登录</button>
                <div class="action-wrap">
                  <el-checkbox v-model="isRemeber">记住密码</el-checkbox>
                  <span @click="isRestPwd = !isRestPwd">忘记密码？</span>
                </div>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <el-form ref="registerForm" class="registerForm" :model="ruleForm" status-icon :rules="rules" label-width="0">
              <el-form-item label="" prop="tel">
                <el-input v-model="ruleForm.tel" placeholder="手机号" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item label="" prop="code">
                <el-input v-model="ruleForm.tel" style="width:218px;" placeholder="验证码" type="password" autocomplete="off" />
                <button class="vr-btn send-code c9">发送验证码</button>
              </el-form-item>
              <el-form-item label="" prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  placeholder="密码长度6~16位数,必须含一位字母"
                  type="password"
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item label="" prop="checkPass" style="margin-bottom:20px;">
                <el-input v-model="ruleForm.checkPass" placeholder="请再次输入密码" type="password" autocomplete="off" />
              </el-form-item>
              <div class="action-wrap">
                <el-checkbox v-model="isRemeber" />&nbsp;&nbsp;我已阅读并接受<nuxt-link to="/service" class="c9" target="_blank">用户协议</nuxt-link>&nbsp;&nbsp;和&nbsp;&nbsp;<nuxt-link to="/copyright" class="c9" target="_blank">隐私政策</nuxt-link>
              </div>
              <el-form-item>
                <button class="vr-btn" type="button" style="width:100%;" @click="submitForm('ruleForm')">立即注册</button>
              </el-form-item>
              <p>
                已有账号请 <span class="c9" @click="activeName='first'">登录</span>
              </p>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div v-else class="login-form fr">
        <el-tabs class="tab-wrap" value="pwdreset">
          <el-tab-pane label="忘记密码" name="pwdreset">
            <el-form ref="registerForm" class="findpwd" :model="ruleForm" status-icon :rules="rules" label-width="0">
              <el-form-item label="" prop="tel">
                <el-input v-model="ruleForm.tel" placeholder="手机号" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item label="" prop="code">
                <el-input v-model="ruleForm.tel" style="width:218px;" placeholder="验证码" type="password" autocomplete="off" />
                <button class="vr-btn send-code c9">发送验证码</button>
              </el-form-item>
              <el-form-item label="" prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  placeholder="密码长度6~16位数,必须含一位字母"
                  type="password"
                  autocomplete="off"
                />
              </el-form-item>

              <el-form-item label="" prop="checkPass" style="margin-bottom:10px;">
                <el-input v-model="ruleForm.checkPass" placeholder="请再次输入密码" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item>
                <button class="vr-btn" type="button" style="width:100%;" @click="submitForm('ruleForm')">提交</button>
              </el-form-item>

            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-dialog>

</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      isRemeber: false,
      activeName: 'login',
      isRestPwd: true,
      ruleForm: {
        tel: '',
        pass: '',
        checkPass: '',
        password: ''
      },
      rules: {
        tel: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]

      }
    }
  },
  computed: {
    LoginType() {
      return this.$store.state.LoginType
    }
  },
  methods: {
    handleClose() {
      this.$store.commit('setIsLogin', { type: 'login', isLogin: false })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.commit('setToken', '9999999999')
          window.location.reload()
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.login-con{
  width:760px;
}
.login-bg{
  width:315px;
  height:490px;
  background:url(@/assets/images/custom/login_bg.png) center no-repeat;
  background-size: 100% 100%;
}
.login-form{
  width:445px;
  display: flex;
  justify-content: center;

  button{
    border-radius: 4px;
    width: 100%;
    height: 42px;
    margin-top:30px;
  }
  /deep/ .el-tabs__content{
  }
  .action-wrap{
    display: flex;
    justify-content: space-between;
    span{
      cursor: pointer;
    }
  }
  .loginForm{
    padding-top:62px;
  }
  .registerForm{
     padding-top:0px;
    .action-wrap{
      justify-content: start

    }
    .vr-btn{
      margin-top:10px;
    }
    p{
      margin-top:10px;
      text-align: center;
      cursor: pointer;
    }
    .send-code{
      width:100px;
      height:42px;
      margin-top:0;
      background: rgba(74, 212, 196, 0);
      border: 1px solid #41D9D9;
      border-radius: 4px;
      &:hover{
        color:#41D9D9
      }
    }
  }
  .findpwd{
    padding-top:20px;
    .send-code{
      width:100px;
      height:42px;
      margin-top:0;
      background: rgba(74, 212, 196, 0);
      border: 1px solid #41D9D9;
      border-radius: 4px;
      &:hover{
        color:#41D9D9
      }
    }
  }

  /deep/ input::-webkit-input-placeholder { /* WebKit browsers */
      color: #757575;
      font-size: 14px;
  }

  /deep/ input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #757575;
    font-size: 14px;
  }

  /deep/ input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #757575;
    font-size: 14px;
  }
}
.tab-wrap{
  width:328px;
  padding-top:30px;
}
/deep/ .el-dialog__body{
  padding:0 ;
}
/deep/ .el-dialog__header{
  height:0;
  overflow: hidden;
  padding:0;
}
/deep/ .el-dialog{
  border-radius: 8px;
  width:760px;
  .el-tabs__item{
    color:#999;
    font-size: 18px;
      &.is-active{
      color:#333;
    }

  }
  .el-tabs__active-bar{
    background-color: #000;
  }
  .el-tabs__item{
    height: 60px;;
  }
}
</style>

