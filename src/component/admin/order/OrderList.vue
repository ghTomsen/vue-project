<template>
  <div class="wrap">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ name:'orderList' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 全选，删除 -->
    <div class="btns">
      <el-button type="primary" icon="el-icon-check">全选</el-button>
      <el-button type="primary" icon="el-icon-delete">删除</el-button>
      <el-select v-model="orderStatus.status" placeholder="请选择活动区域">
        <el-option label="区域一" value="a"></el-option>
        <el-option label="区域二" value="b"></el-option>
      </el-select>
      <el-input style="width:200px;float:right;" placeholder="请输入内容" prefix-icon="el-icon-search">
      </el-input>
    </div>
    <!-- 分类列表 -->

    <div class="orderList">
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">

        <el-table-column type="selection" width="55">
        </el-table-column>

        <el-table-column prop="accept_name" label="订单号" show-overflow-tooltip>
        </el-table-column>

        <el-table-column prop="order_no" label="会员账号" width="120">
        </el-table-column>

        <el-table-column prop="paymentTitle" label="支付方式" width="120">
        </el-table-column>

        <el-table-column prop="expressTitle" label="配送方式" width="120">
        </el-table-column>

        <el-table-column prop="statusName" label="订单状态" width="120">
        </el-table-column>

        <el-table-column prop="order_amount" label="总金额" width="120">
        </el-table-column>

        <el-table-column prop="payment_time" label="下单时间" width="120">
        </el-table-column>

        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <router-link style="color:skyblue;" to="">修改</router-link>
          </template>
        </el-table-column>

      </el-table>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        getOLquery: {
          pageIndex: 1,
          pageSize: 10,
          orderstatus: "",
          vipname: ""
        },
        orderStatus: {
          status: 'b'
        },
        tableData3: []
      }
    },
    methods: {
      fomiTime(time) {
        var date = new Date(time);
        // console.log(date);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y + M + D + h + m + s;
      }
    },
    created() {
      this.$http.get(this.$api.odList, {
        params: this.getOLquery
      }).then(res => {


        res.data.message.forEach(item => {
          item.payment_time = this.fomiTime(item.payment_time);
        })
        this.tableData3 = res.data.message;
        console.log(res.data.message);
      })
    }
  }
</script>
<style scoped lang="less">
  .wrap {
    text-align: left;
  }

  /* 面包屑 */

  .el-breadcrumb {
    line-height: 50px;
    font-size: 20px;
  }

  /* 全选，删除 */

  .btns {
    text-align: left;
    line-height: 50px;
  }

  .orderList {
    line-height: 50px;
  }
</style>