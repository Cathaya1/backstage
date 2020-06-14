<template>
<!-- 头部 -->
  <el-container class="home-container">
    <el-header class="home-header">
      <el-row>
        <el-col :span="22">
          <h2>电商后台管理系统</h2>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple" id="header-a">
            <!-- <a href="#" @click.prevent="quit">退出</a> -->
            <el-button type="text" @click.prevent="quit" class="header-quit">退出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
    <!-- 侧边栏部分 -->
      <el-aside width="200px" class="home-aside">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu class="el-menu-vertical-demo" id="aside-menu" :unique-opened="true" :router="true">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/userlist" class="el-icon-menu">用户列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/rolelist" class="el-icon-menu">角色列表</el-menu-item>
                  <el-menu-item index="/rightslist" class="el-icon-menu">权限列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>商品管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/goodslist" class="el-icon-menu">商品列表</el-menu-item>
                  <el-menu-item index="/classparams" class="el-icon-menu">分类参数</el-menu-item>
                  <el-menu-item index="/goodsclass" class="el-icon-menu">商品分类</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/orderlist" class="el-icon-menu">订单列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>数据统计</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/dataform" class="el-icon-menu">数据报表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <!-- 页面主体部分 -->
      <el-main class="home-main">
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    quit() {
        localStorage.removeItem('token');
        this.$router.push({ path: '/login' });
        this.$message({
            showClose: true,
            message: "退出成功！",
            type: "success"
          });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
  .home-header {
    background-color: #b3c0d1;
    h2 {
      text-align: center;
      line-height: 20px;
    }
    .header-quit {
      line-height: 40px;
      font-size: 16px;
    }
  }
  .home-aside {
    background-color: #d3dce6;
    #aside-menu {
      width: 200px;
    }
  }
  .home-main {
    background-color: #e9eef3;
  }
}
</style>