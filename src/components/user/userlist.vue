<template>
  <el-card class="box-card">
    <!-- 1.面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="box-breadcrumb">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 2.搜索 -->
    <el-row class="row-search">
      <el-col>
        <el-input placeholder="请输入内容" v-model="msg" class="input-search">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success" plain class="add-button" @click="dialogFormVisible = true">添加用户</el-button>
        <!-- 添加用户 -->
      </el-col>
    </el-row>

    <!-- 3.表格 -->
    <el-table :data="tableData" stripe style="width: 100%" class="userlist-table">
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column label="创建日期">
        <template slot-scope="tableData">{{ tableData.row.date | dateFormat }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <!-- 编辑用户 -->
        <el-button type="primary" icon="el-icon-edit" circle @click="dialogedit =  true"></el-button>
        <!-- 删除用户 -->
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
        <!-- 分配角色 -->
        <el-button type="success" icon="el-icon-check" circle @click="dialogFormVisiblefp = true"></el-button>
      </el-table-column>
    </el-table>
    <!-- 4.分页 -->
    <el-pagination background layout="prev, pager, next" :total="50" class="userlist-page"></el-pagination>
    <!-- 添加用户对话框 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible" id="adduser">
      <el-form
        id="register-form"
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passward" :label-width="formLabelWidth">
          <el-input type="password" v-model="ruleForm.passward" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" :label-width="formLabelWidth">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label-width="formLabelWidth"
          prop="email"
          label="邮箱"
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]"
        >
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑用户对话框 -->
    <el-dialog title="编辑用户" :visible.sync="dialogedit" id="adduser">
      <el-form
        id="register-form"
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item
          :label-width="formLabelWidth"
          prop="email"
          label="邮箱"
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]"
        >
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogedit = false">取 消</el-button>
        <el-button type="primary" @click="dialogedit = false">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 分配角色对话框 -->
    <el-dialog title="分配角色" :visible.sync="dialogFormVisiblefp">
      <el-form :model="formfp">
        <el-form-item label="用户名" label-width="120px">
          <el-input v-model="formfp.namefp" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" label-width="120px">
          <el-select v-model="formfp.regionfp" placeholder="请选择">
            <el-option label="主管" value="shanghai"></el-option>
            <el-option label="超级管理员" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisiblefp = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisiblefp = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
import axios from "@/assets/api/http.js";
export default {
  created() {
    this.getUserlist();
  },
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
      msg: "",
      form: {
        formname: ""
      },
      tableData: [
        {
          username: "",
          email: ""
        }
      ],
      //添加用户
      dialogFormVisible: false,
      formLabelWidth: "120px",
      ruleForm: {
        username: "",
        passward: "",
        checkPass: "",
        email: ""
      },
      rules: {
        passward: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }]
      },
      //编辑用户
      dialogedit: false,
      //分配角色
      dialogFormVisiblefp: false,
      formfp: {
        namefp: "",
        regionfp: ""
      }
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //添加用户
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
              message: "添加成功！",
              type: "success"
            });
          } else {
            if (res.data.status == 400) {
              this.$message.error("用户名已存在！");
              this.ruleForm = {};
            }
          }
        }
      });
      this.dialogFormVisible = false;
    },
    //获取用户列表数据
    async getUserlist() {
      const res = await this.$http.get("/adduserlist");
      console.log(res);
      if (res.data.code === "ok") {
        this.tableData = res.data.data;
      } else {
        console.log("数据获取失败");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  height: 100%;
  .box-breadcrumb {
    font-size: 16px;
  }
  .userlist-table{
    margin-top: 30px;
  }
  .row-search {
    margin-top: 30px;
    .input-search {
      width: 300px;
      margin-right: 10px;
    }
  }
  .userlist-page{
    margin-top: 10px;
  }
}
</style>