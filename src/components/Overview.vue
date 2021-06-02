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
    <div v-for="(item,index) in ALItemAbout" :key="index">
      <el-card class="item-card">
        <el-col :span="20">
          <el-row class="item-row1">
            {{item.type}}
          </el-row>
          <el-row class="item-row2">
            {{item.scene}}
          </el-row>
          <el-row class="item-row3">
            <el-col :span="5">最低存储时间</el-col>
            <el-col :span="5">OSS传输加速</el-col>
            <el-col :span="5">图片处理</el-col>
            <el-col :span="5">最少存储时间要求</el-col>
            <!-- <el-col :span="5">多协议</el-col> -->
          </el-row>
          <el-row class="item-row4">
            <el-col :span="5">{{item.minStorageTime}}</el-col>
            <el-col :span="5">{{item.ossAcceleration}}</el-col>
            <el-col :span="5">{{item.imageProcessing}}</el-col>
            <el-col :span="5">{{item.minStorageTime}}</el-col>
            <!-- <el-col :span="4">支持多协议访问</el-col> -->
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row class="price-row1">
            <span class="price">￥{{item.lrsPrice}}</span>
            <span class="unit">/GB/月(LRS)</span>
          </el-row>
          <el-row class="price-row1" style="padding-top: 0" v-if="item.zrsPrice">
            <span class="price">￥0.09</span>
            <span class="unit">/GB/月(ZRS)</span>
          </el-row>
          <el-row class="price-row2" v-if="item.zrsPrice">
            <el-button type="primary" style="margin: 0 auto">了解详情</el-button>
          </el-row>
          <el-row class="price-row2"  style="padding-top: 30px" v-if="!item.zrsPrice">
            <el-button type="primary" style="margin: 0 auto">了解详情</el-button>
          </el-row>
        </el-col>
      </el-card>
      <el-card class="item-card" v-if="HWItemAbout[index]">
        <el-col :span="20">
          <el-row class="item-row1">
            {{HWItemAbout[index].type}}
          </el-row>
          <el-row class="item-row2">
            {{HWItemAbout[index].introduction}}&nbsp;&nbsp;&nbsp;&nbsp;{{HWItemAbout[index].scene}}
          </el-row>
          <el-row class="item-row3">
            <el-col :span="5">最低存储时间</el-col>
            <el-col :span="5">设计持久性（单AZ）</el-col>
            <el-col :span="5">设计可用性（单AZ）</el-col>
            <el-col :span="5">响应</el-col>
            <!-- <el-col :span="5">多协议</el-col> -->
          </el-row>
          <el-row class="item-row4">
            <el-col :span="5">{{HWItemAbout[index].minStorageTime}}</el-col>
            <el-col :span="5">{{HWItemAbout[index].designPersistenceSingle}}</el-col>
            <el-col :span="5">{{HWItemAbout[index].designAvailabilitySingle}}</el-col>
            <el-col :span="5">{{HWItemAbout[index].responseTime}}</el-col>
            <!-- <el-col :span="4">支持多协议访问</el-col> -->
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row class="price-row1">
            <span class="price">￥{{HWItemAbout[index].huaweiPrice}}</span>
            <span class="unit">/GB/月</span>
          </el-row>
          <el-row class="price-row2"  style="padding-top: 30px">
            <el-button type="primary" style="margin: 0 auto" @click="createBucket">了解详情</el-button>
          </el-row>
        </el-col>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      itemAbout: [],
      ALItemAbout: [],
      HWItemAbout: [],
      toFather: false
    }
  },
  methods: {
    createBucket(){
      this.$emit('childFn', this.toFather)
    }
  },
  created() {
    this.axios.get("/getAli").then((res) => {
      this.ALItemAbout = res.data;
      // // console.log(this.ALItemAbout.length)
      // for(var i=0;i<res.data.length;i++){
      //   this.itemAbout[2*i] = this.ALItemAbout[i];
      // }
      // console.log(this.itemAbout);
    }).catch((err)=>{
      console.log(err);
    });
    this.axios.get("/getHuawei").then((res) => {
      this.HWItemAbout = res.data;
      // for(var i=0;i<res.data.length;i++){
      //   this.itemAbout[2*i+1] = this.HWItemAbout[i];
      // }
      // console.log(this.itemAbout);
    }).catch((err)=>{
      console.log(err);
    });
  },
}
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
  margin: 20px auto;
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
  padding-top: 20px;
}
.price-row2 {
  font-size: 30px;
}
</style>