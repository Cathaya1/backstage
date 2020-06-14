<template>
  <div class="register-wrap">
    <el-form
      id="register-form"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h2>用户注册</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passward">
        <el-input type="password" v-model="ruleForm.passward" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]"
      >
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="toLogin">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      console.log(typeof value);
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        if (value.toString().length < 8) {
          callback(new Error("用户名长度不能小于8"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.passward) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        passward: "",
        checkPass: "",
        email: '',
      },
      rules: {
        passward: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          console.log(valid);
          let date = new Date();
          const res = await this.$http.post("/register", {
            username: this.ruleForm.username,
            passward: this.ruleForm.passward,
            email: this.ruleForm.email,
            date: date
          });
          console.log(res);
          if (res.data.status == 200) {
            this.$message({
              showClose: true,
              message: "注册成功！",
              type: "success"
            });
            this.$router.push({ path: "/login" });
          } else {
            if (res.data.status == 400) {
              this.$message.error("用户名已存在！");
              this.ruleForm = {};
            }
          }
        }
      });
    },
    toLogin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style lang="scss" scoped>
.register-wrap {
  height: 100%;
  // background-color: #324152;
  background-image: url("../../assets/images/bg.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  #register-form {
    width: 400px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
  }
}
</style>