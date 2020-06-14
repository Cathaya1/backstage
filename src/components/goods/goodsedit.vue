<template>
  <el-card class="goodslist-card">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="goodslist-bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-alert title="成功提示的文案" type="success" center show-icon class="goodslist-alert"></el-alert>
    <el-steps :active="1*active" finish-status="success" class="goodslist-step">
      <el-step title="基本信息"></el-step>
      <el-step title="商品参数"></el-step>
      <el-step title="商品属性"></el-step>
      <el-step title="商品图片"></el-step>
      <el-step title="商品内容"></el-step>
    </el-steps>
    <el-form label-position="top" label-width="80px" :model="form" class="goodslist-form">
      <el-tabs v-model="active" tab-position="left">
        <el-tab-pane name="1" label="基本信息">
          <el-form-item label="商品名称">
            <el-input v-model="form.goods_name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="form.goods_price"></el-input>
          </el-form-item>
          <el-form-item label="商品重量">
            <el-input v-model="form.goods_weight"></el-input>
          </el-form-item>
          <el-form-item label="商品数量">
            <el-input v-model="form.goods_number"></el-input>
          </el-form-item>
          <el-form-item label="商品分类">
            <el-cascader
              v-model="value"
              :options="options"
              expandTrigger="hover"
              :props="defaultprops"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane name="2" label="商品参数"></el-tab-pane>
        <el-tab-pane name="3" label="商品属性"></el-tab-pane>
        <el-tab-pane name="4" label="商品图片">
          <!-- :file-list="fileList2" -->
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-tab-pane>
        <el-tab-pane name="5" label="商品内容">
          <el-form-item>
            <el-button type="primary">添加商品内容</el-button>
          </el-form-item>
          <quillEditor></quillEditor>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </el-card>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      active: "",
      form: {},
      //商品分类数据
      value: [],
      options: [],
      defaultprops: {}
    };
  },
  methods: {
    //商品分类
    handleChange(value) {
      console.log(value);
    },
    //图片上传
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

<style lang="scss" scoped>
.goodslist-card {
  height: 100%;
  .goodslist-bread {
    font-size: 16px;
  }
  .goodslist-alert {
    margin-top: 30px;
  }
  .goodslist-step {
    margin-top: 30px;
  }
  .goodslist-form {
    height: 450px;
    overflow: auto;
    margin-top: 30px;
  }
}
.ql-editor {
  min-height: 400px;
}
</style>