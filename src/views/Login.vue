<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="10">
      <div class="grid-content bg-purple">
        <h2>请登录</h2>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="loginForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="loginForm.code"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">立即创建</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
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
      loginForm: {
        userName: '',
        password: '',
        code:''
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
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>
