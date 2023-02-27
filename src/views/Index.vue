<template>
  <el-container class="el-container">
    <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="0">
          <template slot="title">
            <i class="el-icon-s-home"></i>
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-odometer"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item index="1-1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="1-2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>角色管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="1-3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>菜单管理</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统工具</span>
          </template>
          <el-menu-item index="2-1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统工具</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">数据字典</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <strong>vue-yyh-admin 后台管理系统</strong>

        <div class="header-avatar">
          <el-avatar size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>

          <el-dropdown>
            <span class="el-dropdown-link">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </div>



      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "index",

    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

  </script>

<style scoped>
  .header-avatar {
    float: right;
    width: 130px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-container {
    padding: 0;
    margin: 0;
    height: 100vh;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu-vertical-demo{
    height: 100%;
  }
</style>
