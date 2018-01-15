<template>
  <el-dropdown class="head">
    <el-button type="primary">
      <span>你好,admin</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>修改密码</el-dropdown-item>
      <el-dropdown-item @click.native="loginout">登录注销</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
  export default{
    methods: {
      loginout(){
        this.$http.get(this.$api.logout).then(res=>{
          if(res.data.status==0){
            this.$router.push({name:"login"});
          }else{
            this.$alert(res.data.message);
          }
        })
      }
    }
  }
</script>
<style>
.el-header{
  text-align: right;
  line-height: 60px;
}
</style>