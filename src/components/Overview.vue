<template>
  <div>
    <el-card class="box-card">
      <el-row class="title-row">
        了解对象存储服务OBS
      </el-row>
      <el-row class="about-info">
        OBS对象存储提供高效、稳定、易用、安全的海量数据存储服务
      </el-row>
      <el-row class="about-row">
        <el-col :span="6">数据持久性高</el-col>
        <el-col :span="6">千万级TPS</el-col>
        <el-col :span="6">2.4Gb/s</el-col>
        <el-col :span="6">多协议</el-col>
      </el-row>
      <el-row class="about-row2">
        <el-col :span="6">99.9999999999%</el-col>
        <el-col :span="6">为用户提供高并发能力</el-col>
        <el-col :span="6">单流上传速度快</el-col>
        <el-col :span="6">支持多协议访问</el-col>
      </el-row>
    </el-card>
    <el-card class="item-card">
      <el-col :span="21">
        <el-row class="item-row1">
          了解对象存储服务OBS
        </el-row>
        <el-row class="item-row2">
          OBS对象存储提供高效、稳定、易用、安全的海量数据存储服务
        </el-row>
        <el-row class="item-row3">
          <el-col :span="4">数据持久性高</el-col>
          <el-col :span="4">千万级TPS</el-col>
          <el-col :span="4">2.4Gb/s</el-col>
          <el-col :span="4">多协议</el-col>
          <el-col :span="4">多协议</el-col>
        </el-row>
        <el-row class="item-row4">
          <el-col :span="4">99.9999999999%</el-col>
          <el-col :span="4">为用户提供高并发</el-col>
          <el-col :span="4">单流上传速度快</el-col>
          <el-col :span="4">支持多协议访问</el-col>
          <el-col :span="4">支持多协议访问</el-col>
        </el-row>
      </el-col>
      <el-col :span="3">
        <el-row class="price-row1">
          <span class="price">￥0.09</span>
          <span class="unit">/GB/月</span>
        </el-row>
        <el-row class="price-row2">
          <el-button type="primary" style="margin: 0 auto">了解详情</el-button>
        </el-row>
      </el-col>
    </el-card>
  </div>
</template>

<script>
export default({
  
})
</script>

<style scoped>
.box-card {
  margin: 40px auto;
  width: 1200px;
  height: 280px;
}
.title-row {
  padding: 40px 30px 0 30px;
  font-size: 25px;
  font-weight: bold;
}
.about-info {
  padding: 0 30px 0 30px;
}
.about-row {
  padding: 60px 30px 0 30px;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
}
.about-row2 {
  padding: 0 30px 0 30px;
  text-align: center;
}
.item-card {
  margin: 0 auto;
  width: 1200px;
  height: 190px;
}
.item-row1 {
  padding: 10px 10px 0 10px;
  font-size: 20px;
  font-weight: 550;
}
.item-row2 {
  padding: 10px 10px 0 10px;
  font-size: 13px;
}
.item-row3 {
  padding: 25px 10px 0 10px;
  font-size: 13px;
}
.item-row4 {
  padding: 10px 10px 0 10px;
  font-size: 17px;
  font-weight: 550;
}
.price {
  float: left;
  font-size: 25px;
  font-weight: bold;
  color: #409EFF;
}
.unit {
  float: left;
  font-size: 10px;
  padding-top: 12px;
}
.price-row1 {
  padding-top: 30px;
}
.price-row2 {
  font-size: 30px;
}
</style>