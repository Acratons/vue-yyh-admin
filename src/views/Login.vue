<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="10">
      <div class="grid-content bg-purple">
        <h2>请登录</h2>
        <el-form :model="changePasswordForm" :rules="rules" ref="changePasswordForm" label-width="100px" class="demo-changePasswordForm">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="changePasswordForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="changePasswordForm.password"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="changePasswordForm.code" style="width: 400px; float: left"></el-input>
            <el-image :src="captchaImg" class="captchaImg"></el-image>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('changePasswordForm')">立即创建</el-button>
            <el-button @click="resetForm('changePasswordForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      changePasswordForm: {
        userName: '',
        password: '',
        code:'',
        token:''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用戶名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请輸入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 5, max: 5, message: '长度为 5 个字符', trigger: 'blur' }
        ],
      },
      captchaImg:null
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/login', this.changePasswordForm).then(res => {
            const jwt = res.headers['PermList']
            this.$store.commit('SET_TOKEN', jwt)

            this.$router.push("/index")
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getCaptcha(){
      this.$axios.get('/captcha').then(res => {
        console.log('res', res)
        this.changePasswordForm.token = res.data.data.token
        this.captchaImg = res.data.data.captchaImg
      })
    },

  },
  created() {
    this.getCaptcha()
  }
}
</script>

<style scoped>

</style>
