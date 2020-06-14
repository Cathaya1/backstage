<template>
  <el-card class="goodsedit-card">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="goodsedit-bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="goodsedit-search">
      <el-col>
        <el-input placeholder="请输入内容" v-model="msg" class="goodsedit-input">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success" plain class="goodsedit-button" @click="addgoods">添加商品</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" class="goodsedit-table">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column prop="goodsname" label="商品名称"></el-table-column>
      <el-table-column prop="goodsprice" label="商品价格(元)"></el-table-column>
      <el-table-column prop="goodsweight" label="商品重量"></el-table-column>
      <el-table-column prop="goodsdate" label="创建日期"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          goodsname: "2016-05-02",
          goodsprice: "王小虎",
          goodsweight: "上海市普陀区金沙江路 1518 弄",
          goodsdate: "上海市普陀区金沙江路 1518 弄",
        }
      ],
      msg: ""
    };
  },
  methods: {
      addgoods() {
         this.$router.push({ path: '/goodsedit' }) 
      }
  },
};
</script>

<style lang="scss" scoped>
.goodsedit-card {
  height: 100%;
  .goodsedit-bread {
    font-size: 16px;
  }
  .goodsedit-search{
    margin-top: 30px;
    .goodsedit-input{
      width: 300px;
    }
    .goodsedit-button{
      margin-left: 10px;
    }
  }
  .goodsedit-table{
    margin-top: 30px;
  }
}
</style>