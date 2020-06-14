<template>
  <el-card class="role-card">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="role-bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="success" plain class="role-button">添加角色</el-button>
    <el-table :data="tableData" style="width: 100%" class="role-table">
      <el-table-column type="expand" width="50"></el-table-column>
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="180"></el-table-column>
      <el-table-column prop="roleDesc" label="角色描述" width="180"></el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          roleName: "王小虎",
          roleDesc: "上海市普陀区金沙江路 1518 弄"
        },
        {
          roleName: "王小虎",
          roleDesc: "上海市普陀区金沙江路 1517 弄"
        },
        {
          roleName: "王小虎",
          roleDesc: "上海市普陀区金沙江路 1519 弄"
        },
        {
          roleName: "王小虎",
          roleDesc: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.role-card {
  .role-bread {
    height: 100%;
    font-size: 16px;
  }
  .role-button{
      margin-top: 30px;
  }
  .role-table {
    margin-top: 30px;
  }
}
</style>