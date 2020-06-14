<template>
  <el-card class="classparams-card">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="classparams-bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.classparams-card{
    height: 100%;
    .classparams-bread{
        font-size: 16px;
    }
}
</style>