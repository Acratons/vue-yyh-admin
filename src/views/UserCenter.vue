<template>
  <el-form :model="changePasswordForm" :rules="rules" ref="changePasswordForm" label-width="100px" class="demo-changePasswordForm">
    <el-form-item label="旧密码" prop="userName">
      <el-input v-model="changePasswordForm.oldPassword"></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="password">
      <el-input v-model="changePasswordForm.newPassword"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="code">
      <el-input v-model="changePasswordForm.renPassword" style="width: 400px; float: left"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('changePasswordForm')">立即创建</el-button>
      <el-button @click="resetForm('changePasswordForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import ElementUI from "element-ui";

export default {
  name: "UserCenter",
  data() {
    return {
      changePasswordForm: {
        oldPassword:'',
        newPassword:'',
        renPassword:''
      },
      rules: {
        oldPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        newPassword: [
          { required: true, message: '请輸入密码', trigger: 'blur' }
        ],
        renPassword: [
          { required: true, message: '请輸入密码', trigger: 'blur' }
        ],
      },
      captchaImg:null
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/updateUserPassword', this.changePasswordForm).then(res => {
            //回调成功信息
            ElementUI.Message.success('成功修改')
          })
        } else {
        console.log('error submit!!');
        return false;
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

  },
}
</script>

<style scoped>

</style>
