<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>知识内容</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="btns">
      <el-button size="mini" icon="el-icon-plus">
        <router-link style="color:skyblue;" :to="{name:'goodsCtEdit'}">新增</router-link>
      </el-button>
      <el-button size="mini" icon="el-icon-check" @click='selectAll'>全选</el-button>
      <el-button size="mini" icon="el-icon-delete" @click='delProduct'>删除</el-button>
      <el-input @blur="getList" v-model="getListQuery.searchvalue" style="width:180px; float:right;" size="mini" placeholder="请输入内容"
        prefix-icon="el-icon-search">
      </el-input>
    </div>

    <div class="goodList">
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change='selectionChange'>
        <!-- 选择框 -->
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column prop="title" label="标题">
          <template slot-scope="scope">
            <!-- {{scope.row.title}} -->
            <el-tooltip class="item" effect="dark" placement="right-start">
              <div slot="content">
                <!-- <span>{{scope.row.imgurl}}</span> -->
                <img style="width:200px" :src="scope.row.imgurl" alt="商品预览">
              </div>
              <el-button>
                <router-link style="color:skyblue;" :to="{ name: 'goodsCtEdit', params: { id: scope.row.id } }">{{scope.row.title}}</router-link>  
              </el-button>
            </el-tooltip>
          </template>

        </el-table-column>

        <el-table-column prop="categoryname" label="所属类别" width="120"></el-table-column>

        <el-table-column prop="stock_quantity" label="库存" width="120"></el-table-column>

        <el-table-column prop="market_price" label="市场价" width="120"></el-table-column>

        <el-table-column prop="sell_price" label="销售价" width="120"></el-table-column>

        <el-table-column label="属性" width="120">
          <template slot-scope="scope">

            <i :class="['el-icon-picture',scope.row.is_slide==1?'active':'']" @click="changeStatus(scope.row.id,'is_slide',scope.row.is_slide==1?false:true)"></i>

            <i :class="['el-icon-upload',scope.row.is_top==1?'active':'']" @click="changeStatus(scope.row.id,'is_top',scope.row.is_slide==1?false:true)"></i>

            <i :class="['el-icon-star-on',scope.row.is_hot==1?'active':'']" @click="changeStatus(scope.row.id,'is_hot',scope.row.is_slide==1?false:true)"></i>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
              <!-- <span>修改</span> -->
            <router-link style="color:red;" :to="{name:'goodsCtEdit',params:{id:scope.row.id}}">修改</router-link>
          </template>
        </el-table-column>

        
      </el-table>

      <!-- @size-change="handleSizeChange"
      @current-change="handleCurrentChange" -->

      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="getListQuery.pageIndex"
        :page-sizes="page.pageSizes" :page-size="getListQuery.pageSize" :total="page.total" layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>

    </div>

  </div>



</template>
<script>
  export default {
    data() {
      return {
        tableData3: [],
        getListQuery: {
          pageIndex: 1,
          pageSize: 10,
          searchvalue: ""
        },
        page: {
          total: 100,
          pageSizes: [5, 10, 15, 20]
        },
        selection: []
      }
    },
    methods: {
      // 点击标题跳转到编辑页面
      turnEdit(id){
        this.$router.push();
      },
      changeStatus(id, type, typeStatus) {
        this.tableData3.filter(good => good.id == id)[0][type] = typeStatus ? 1 : 0;
      },
      handleSizeChange(val) {
        this.getListQuery.pageSize = val;
        this.getList();
      },
      handleCurrentChange(val) {
        // console.log(val);
        this.getListQuery.pageIndex = val;
        this.getList();
      },
      getList() {
        this.$http.get(this.$api.gsList, {
          params: this.getListQuery
        }).then(res => {
          
          // console.log(this.tableData3[0].imgurl);
          
          res.data.message.forEach((val)=>{
            val.imgurl=val.imgurl.replace("imgs","/imgs")
          })
          this.tableData3 = res.data.message;
          // console.log( this.tableData3);
          
          this.page.total = res.data.totalcount;
        })
      },
      // 删除选择操作
      selectionChange(ops) {
        this.selection = ops;
        // console.log(ops);
        
      },
      // 全选按钮
      selectAll() {
        document.querySelector('.el-checkbox__inner').click();
      },
      // 删除功能
      del() {
        var params = this.selection.map(v => v.id).join(',');
        this.$http.get(this.$api.gsDel + params).then(res => {
          if (res.data.status == 0) {
            this.getList();
            this.selection = [];
          }
        })
      },
      // 点击删除按钮
      delProduct() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.del();
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }

    },
    created() {
      this.getList();
    }
  }
</script>
<style scoped lang="less">
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

  .goodList {
    line-height: 20px;
    text-align: left;
  }

  [class^=el-icon] {
    color: gray;
    &.active {
      color: black;
    }
  }
</style>