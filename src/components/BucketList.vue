<template> 
  <div>
    <el-card class="list-card">
      <h1 class="bucket-list-title">Bucket列表</h1>
      <el-table
        :data="tableData"
        stripe
        style="width: 1400px;margin: 30px auto">
        <el-table-column 
          label="bucketName" 
          width="300">
          <template slot-scope="scope">
            <el-button
              size="text"
              @click="selectBucket(scope.$index, scope.row)">{{scope.row.bucketName}}</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="storageClass"
          label="存储类型"
          width="300">
        </el-table-column>
        <el-table-column
          prop="location"
          label="地域"
          width="300">
        </el-table-column>
        <el-table-column
          prop="createDate"
          label="创建时间">
        </el-table-column>
        <el-table-column 
          label="操作" 
          width="180">
          <template slot-scope="scope">
            <el-button
              size="text"
              @click="delectBucket(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="list-card">
      <h1 class="bucket-list-title">流量统计</h1>
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
      tableData: [
        
      ],
      downFlow:'',
      upFlow:'',
    }
  },
  methods:{
    selectBucket(index,row){
      this.$router.push({
        name: 'BucketPanel',
        query: {
          bucket: row.bucketName
        }
      });
    },
    delectBucket(index,row){
      console.log(row.bucketName);
      this.$confirm('确认删除该存储空间吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        this.axios.delete('/deleteBucket',{data:{
          bucketName:row.bucketName
        }}).then((res)=>{
          if(res.data === 'fail'){
            this.$message({
              type: 'error',
              message: '删除失败',
            });
          }else{
            this.$message({
              type: 'success',
              message: '删除成功',
            });
            this.tableData.splice(index,1);
          }
        }).catch((err)=>{
          this.$message({
            type: 'error',
            message: '删除失败',
          });
        });
      }).catch((err)=>{
        this.$message({
          type: 'info',
          message: '已取消删除'
        }); 
      })
    }
  },
  created(){
    this.axios.get('/listAllBucket').then((res)=>{
      this.tableData = res.data;
    }).catch((err)=>{
      console.log(err);
    });
    this.axios.post('/getUpload').then((res)=>{
      this.upFlow = res.data;
    }).catch((err)=>{
      console.log(err);
    });
    this.axios.post('/getDownload').then((res)=>{
      this.downFlow = res.data;
    }).catch((err)=>{
      console.log(err);
    });
  }
}
</script>

<style scoped>
.list-card{
  margin: 40px auto;
  width: 1500px;
}
.bucket-list-title{
  margin: 30px;
}
.flow-div{
  margin: 0 30px 0 30px;
  height: 200px;
  padding-top: 30px;
}
.up-flow{
  width: 670px;
  float: left;
  text-align: center;
}
.down-flow{
  width: 670px;
  float: left;
  text-align: center;
}
</style>