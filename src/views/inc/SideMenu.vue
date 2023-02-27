<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <router-link to="/index">
      <el-menu-item index="0">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
    </router-link>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-odometer"></i>
        <span>系统管理</span>
      </template>

      <router-link to="/menu">
        <el-menu-item index="1-1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
        </el-menu-item>
      </router-link>

      <router-link to="/role">
        <el-menu-item index="1-2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>角色管理</span>
          </template>
        </el-menu-item>
      </router-link>

      <router-link to="/menu">
        <el-menu-item index="1-3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>菜单管理</span>
          </template>
        </el-menu-item>
      </router-link>

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
</template>

<script>
export default {
  name: "SideMenu"
}
</script>

<style scoped>
.el-menu-vertical-demo{
  height: 100%;
}
</style>
