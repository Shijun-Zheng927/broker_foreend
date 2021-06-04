<template>
  <div>
    <el-card class="about-card">
      <el-row style="padding-left: 30px">
        <h2>{{bucketAbout.bucket.name}}</h2>
      </el-row>
      <el-col :span="12" class="info-col">
        <el-row>地域：{{bucketAbout.bucket.location}}</el-row>
        <el-row>&nbsp;</el-row>
        <el-row>存储类型：{{bucketAbout.bucket.storageClass}}</el-row>
      </el-col>
      <el-col :span="12" class="info-col">
        <el-row>读写权限：{{bucketAbout.rwPolicy}}</el-row>
        <el-row>&nbsp;</el-row>
        <el-row>创建时间：{{bucketAbout.bucket.creationDate}}</el-row>
      </el-col>
    </el-card>
    <el-card class="flow-card">
      <el-row style="padding-left: 30px">
        <h2>流量统计</h2>
      </el-row>
      <div class="flow-div">
        <div class="up-flow">
          <h1>上传流量</h1>
          <br/>
          <h2>{{upFlow}}</h2>
        </div>
        <div class="down-flow">
          <h1>下载流量</h1>
          <br/>
          <h2>{{downFlow}}</h2>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bucket: '',
      bucketAbout: {
        
      },
      upFlow: '',
      downFlow: '',
    }
  },
  methods:{
    getRouterData(){
      this.bucket = this.$route.query.bucket;
      console.log(this.bucket);
    }
  },
  created(){
    this.getRouterData();
    this.axios.get('/getBucketInfo',{params:{bucketName: this.bucket}}).then((res)=>{
      this.bucketAbout = res.data;
    }).catch((err)=>{
      console.log(err);
    });
    this.axios.post('/getBucketFlow',{
      bucketName: this.bucket
    }).then((res)=>{
      this.upFlow = res.data.upload;
      this.downFlow = res.data.download;
    })
  }
}
</script>

<style scoped>
.about-card{
  margin: 0 auto;
  width: 1200px;
}
.flow-card{
  margin: 0 auto;
  width: 1200px;
  margin-top: 30px;
}
.info-col{
  margin: 10px 0 20px 0;
  font-size: 14px;
  padding-left: 30px;
}
.flow-div{
  margin: 0 30px 0 30px;
  height: 200px;
  padding-top: 30px;
}
.up-flow{
  width: 520px;
  float: left;
  text-align: center;
}
.down-flow{
  width: 520px;
  float: left;
  text-align: center;
}
</style>