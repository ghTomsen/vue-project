<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>知识内容</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="btns">
      <el-button size="mini" icon="el-icon-plus">新增</el-button>
      <el-button size="mini" icon="el-icon-check">全选</el-button>
      <el-button size="mini" icon="el-icon-delete">删除</el-button>
      <el-input style="width:180px; float:right;" size="mini" placeholder="请输入内容" prefix-icon="el-icon-search">
      </el-input>
    </div>

    <div class="goodList">
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
        <!-- 选择框 -->
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column prop="title" label="标题"></el-table-column>

        <el-table-column prop="categoryname" label="所属类别" width="120"></el-table-column>

        <el-table-column prop="stock_quantity" label="库存" width="120"></el-table-column>

        <el-table-column prop="market_price" label="市场价" width="120"></el-table-column>

        <el-table-column prop="sell_price" label="销售价" width="120"></el-table-column>

        <el-table-column label="属性" width="120">
          <template slot-scope="scope">
            <i class="el-icon-picture"></i>
            <i class="el-icon-upload"></i>
            <i class="el-icon-star-on"></i>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <router-link to="">修改</router-link>
            </template>
          </el-table-column>

        </el-table-column>
      </el-table>
    </div>
  </div>



</template>
<script>
  export default {
    data() {
      return {
        tableData3: [
          {
            id: 103,
            title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
            is_top: 1,
            is_hot: 1,
            is_slide: 1,
            categoryname: "男装",
            img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
            imgurl: "http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
            goods_no: "NZ0000000002",
            stock_quantity: 200,
            market_price: 1000,
            sell_price: 800
          },
          {
            id: 103,
            title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
            is_top: 1,
            is_hot: 1,
            is_slide: 1,
            categoryname: "男装",
            img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
            imgurl: "http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
            goods_no: "NZ0000000002",
            stock_quantity: 200,
            market_price: 1000,
            sell_price: 800
          }
        ]
      }
    },
    created () {
      this.$http.get(this.$api.atList,{params:{
        pageIndex:1,
        pageSize:10,
        searchvalue:""
      }}).then(res=>{
        console.log(res);
        
      })
    }
  }
</script>
<style scoped>
  .el-breadcrumb {
    line-height: 2;
    border-bottom: 1px solid gray;
  }

  .el-main {
    line-height: 20px;
  }

  .btns {
    text-align: left;
    line-height: 60px;
  }

 
  .goodList{
    line-height: 20px;
    text-align: left;
  }
</style>