<template>
  <el-container class="admin">

    <el-aside width="200px">
      <Aside></Aside>
    </el-aside>

    <el-container>

      <el-header>
        <Header></Header>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>

  </el-container>
</template>
<script>
  import header from "./common/Header.vue";
  import aside from "./common/Aside.vue";
  export default {
    components: {
      Header: header,
      Aside: aside
    }

  }
</script>
<style scoped>
  .admin {
    height: 100%;
  }

  .el-header,
    {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>