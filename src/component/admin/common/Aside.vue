<template>
  
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b">

      <el-submenu :index="item.title" v-for="item in menus" :key="item.title">

        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.title}}</span>
        </template>

        <el-menu-item-group>

          <el-menu-item :index="subitem.title" v-for="subitem in item.children" :key="subitem.title">
            <router-link :to="subitem.path">{{subitem.title}}</router-link>
          </el-menu-item>

        </el-menu-item-group>





      </el-submenu>
    </el-menu>
  
</template>
<script>
  export default {
    data() {
      return {
        menus: [
          {
            title: "资源下载",
            children: [
              { title: "内容", path: "/a" },
              { title: "头部", path: "/b" },
              { title: "脚步", path: "/c" },
            ]
          },
          {
            title: "购物商城",
            children: [
              { title: "内容管理", path: "/admin/goodsCtList" },
              { title: "类别管理", path: "/admin/goodsCtEdit" }
            ]
          },
          {
            title: "订单管理",
            children: [
              { title: "内容", path: "/a" },
              { title: "头部", path: "/b" },
              { title: "脚步", path: "/c" },
            ]
          }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
 .el-aside[data-v-8aeb1e26]{
  background-color: skyblue;
}


</style>

