<template>
  <el-card class="rights-card">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="rights-bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    
    <el-table :data="tableData" border style="width: 100%" class="rights-table">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column prop="authName" label="权限名称" width="180"></el-table-column>
      <el-table-column prop="path" label="路径" width="180"></el-table-column>
      <el-table-column prop="level" label="层级"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{    
          authName: '2016-05-02',
          path: '王小虎',
          level: '上海市普陀区金沙江路 1518 弄'
        }, {  
          authName: '2016-05-04',
          path: '王小虎',
          level: '上海市普陀区金沙江路 1517 弄'
        }, {
          authName: '2016-05-01',
          path: '王小虎',
          level: '上海市普陀区金沙江路 1519 弄'
        }, {  
          authName: '2016-05-03',
          path: '王小虎',
          level: '上海市普陀区金沙江路 1516 弄'
        }]
        }
    },
};
</script>

<style lang="scss" scoped>
.rights-card {
  height: 100%;
  .rights-bread {
    font-size: 16px;
  }
  .rights-table{
      margin-top: 30px;
  }
}
</style>