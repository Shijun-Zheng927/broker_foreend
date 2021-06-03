<template>
  <div>
    <el-card class="about-card">
      <el-row style="padding-left: 30px">
        <h2>{{bucketAbout.bucketName}}</h2>
      </el-row>
      <el-col :span="12" class="info-col">
        <el-row>地域：{{bucketAbout.location}}</el-row>
        <el-row>&nbsp;</el-row>
        <el-row>存储类型：{{bucketAbout.category}}</el-row>
      </el-col>
      <el-col :span="12" class="info-col">
        <el-row>读写权限：{{bucketAbout.rwPolicy}}</el-row>
        <el-row>&nbsp;</el-row>
        <el-row>创建时间：{{bucketAbout.createDate}}</el-row>
      </el-col>
    </el-card>
    <el-card class="flow-card">
      <el-row style="padding-left: 30px">
        <h2>流量</h2>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bucket: '',
      bucketAbout: {
        bucketName: 'xmsx-001',
        location: '北京',
        createDate: '2000',
        category: '标准',
        rwPolicy: '私'
      },
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
</style>