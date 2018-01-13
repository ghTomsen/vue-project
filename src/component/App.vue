<template>
  <div>
    公共头部
    <router-view></router-view>
    <el-rate v-model="value1" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>
    <el-time-select v-model="value2" :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
    }" placeholder="选择时间">
    </el-time-select>
    </br>
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    公共底部

  </div>
</template>
<style>
</style>
<script>
  export default {
    data() {
      return {
        value1: 4,
        value2: 6
      }
    }
  }
</script>