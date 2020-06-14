<template>
  <el-card class="goodsclass-card">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="goodsclass-bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.goodsclass-card{
    height: 100%;
    .goodsclass-bread{
        font-size: 16px;
    }
}
</style>