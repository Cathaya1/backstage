<template>
  <el-card class="orderlist-card">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="orderlist-bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="tableData" style="width: 100%" class="orderlist-table">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column prop="ordernumber" label="订单编号" width="180"></el-table-column>
      <el-table-column prop="orderprice" label="订单价格" width="180"></el-table-column>
      <el-table-column prop="orderpaid" label="是否付款"></el-table-column>
      <el-table-column prop="ordersend" label="是否发货"></el-table-column>
      <el-table-column prop="ordertime" label="下单时间"></el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" icon="el-icon-edit" circle @click="dialogFormVisible = true"></el-button>
      </el-table-column>
    </el-table>
    <el-dialog title="修改订单地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="省市区">
          <el-cascader
            v-model="value"
            :options="options"
            expandTrigger="hover"
            :props="defaultprops"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" label-position="top">
          <el-input v-model="form.adress"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          ordernumber: "AF16464",
          orderprice: "199",
          orderpaid: "是",
          ordersend: "否",
          ordertime: "2019-4-16"
        }
      ],
      dialogFormVisible: false,
      form: {
        adress: ''
      },
      value: [],
      options: [],
      defaultprops: {}
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.orderlist-card {
  height: 100%;
  .orderlist-bread {
    font-size: 16px;
  }
  .orderlist-table {
    margin-top: 30px;
  }
}
</style>