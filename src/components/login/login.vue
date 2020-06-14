<template>
  <div class="login-wrap">
    <el-form
      class="login-form"
      :label-position="labelPostion"
      label-width="80px"
      :model="formLabelAlign"
    >
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formLabelAlign.passward"></el-input>
      </el-form-item>
      <el-button class="login-btn" id="btn-login" type="primary" @click="login">登录</el-button>
      <router-link to="/register">
        <el-button class="login-btn" id="btn-register" type="primary">注册</el-button>
      </router-link>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPostion: "top",
      formLabelAlign: {
        username: "",
        passward: ""
      }
    };
  },
  methods: {
    async login() {
      if (this.formLabelAlign.username=='' || this.formLabelAlign.passward == "") {
        this.$message.error("用户名或密码不能为空");
      } else {
        const res = await this.$http.post("/login", {
          username: this.formLabelAlign.username,
          passward: this.formLabelAlign.passward
        });
        console.log(res);
        if (res.data.status == "200") {
          this.$message({
            showClose: true,
            message: "登录成功！",
            type: "success"
          });
          localStorage.setItem('token',res.data.token);
          this.$router.push({ path: '/home'});
        } else {
          if (res.data.status == "400") {
            this.$message.error("用户名或密码错误！");
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-wrap {
  height: 100%;
  background-image: url('../../assets/images/bg.jpg');
  // background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 400px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 30px;
    .login-btn {
      width: 100px;
    }
    #btn-login {
      float: left;
    }
    #btn-register {
      float: right;
    }
  }
}
</style>