<template>

  <div class="wrap">
    <div class="login">
      <h3>管理员登录</h3>
      <el-form :rules="rules" ref="ruleForm" label-position="left" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名：" prop="uname">
          <el-input v-model="formLabelAlign.uname"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="upwd">
          <el-input type="password" v-model="formLabelAlign.upwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button class="aa" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      var validateuName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        else {
          callback();
        }
      };
      var validateuPwd = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'));
        }
        else {
          callback();
        }
      };
      return {
        formLabelAlign: {
          uname: "",
          upwd: ""
        },
        rules: {
          uname: [
            { validator: validateuName, trigger: 'blur' }
          ],
          upwd: [
            { validator: validateuPwd, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {

      login() {

        this.$http.post(this.$api.login, this.formLabelAlign).then(res => {
          if (res.data.status == 0) {


            this.$alert("登录成功");
            // console.log(this.$route.query.nextPage);
            var nextPage=this.$route.query.nextPage;
            // this.$router.push({ name: "admin" })
            this.$router.push({path:nextPage?nextPage:'/admin'})
          } else {
            this.$alert("登录失败");
          }
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login();
          } else {
            this.$alert("不可以登录")
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  .wrap{
    background-color: skyblue;
  }
  .aa {
    color: white;
    background-color: #409EFF;
  }

  .login {
    width: 600px;
    height: 300px;
    padding: 40px;
    margin: 0 auto;
    border: 3px solid white;
    border-radius: 10px;
    position: relative;
    top: 100px;
    background-color: skyblue;
    /* left: 50%;
    transform: translateX(-50%); */
  }

  h3 {
    color: white;
    text-align: center;
    font-size: 30px;
    top: -90px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;

  }
</style>
<style>
</style>