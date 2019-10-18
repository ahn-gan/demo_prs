<template>
  <div class="main-content">
    <div class="login-form" @keydown.enter="submitForm('userInfoForm')">
      <el-form :model="user" ref="userInfoForm" label-width="100px">
        <el-form-item label="用户名" class="label-region">
          <el-input type="text" v-model="user.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" class="label-region">
          <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('userInfoForm')" class="btn-margin">登录</el-button>
          <el-button @click="resetForm('userInfoForm')" class="btn-margin">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {login} from '../request/userRequest'
  import Cookies from 'vue-cookies'

  export default {
    name: "Login",
    data() {
      return {
        user: {
          userName: '',
          password: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        if (this.user.userName.length === 0) {
          this.$message.error('请输入用户名');
          return;
        } else if (this.user.password.length === 0) {
          this.$message.error('请输入密码');
          return;
        } else {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // submit login information
              this.check();
            } else {
              return false;
            }
          });
        }
      },
      async check() {
        let response = await login(this.user);
        Cookies.set('JWT-TOKEN', response);
        this.$router.push('/hello')
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.user = {
          userName: '',
          password: ''
        };
      }
    },
    mounted() {
      document.title = "登录";
    }
  }
</script>

<style scoped>
  .login-form {
    width: 40%;
    position: relative;
    margin-left: 28%;
    top: 30%;
    background: black;
    opacity: 0.75;
    padding: 2% 5% 1% 0;
    border-radius: 10px;
  }

  .btn-margin {
    width: 45%;
    margin-left: 3%;
  }

  >>> .el-form-item__label {
    color: #FFFFFF;
  }

</style>
