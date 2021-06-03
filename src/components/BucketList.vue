<template> 
  <div>
    <el-card class="list-card">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        <el-breadcrumb-item>Bucket列表</el-breadcrumb-item>
      </el-breadcrumb>
      <h1 class="bucket-list-title">Bucket列表</h1>
      <el-table
        :data="tableData"
        stripe
        style="width: 1400px;margin: 0 auto">
        <el-table-column 
          label="Bucket" 
          width="180">
          <template slot-scope="scope">
            <el-button
              size="text"
              @click="selectBucket(scope.$index, scope.row)">{{scope.row.bucketName}}</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="存储类型"
          width="180">
        </el-table-column>
        <el-table-column
          prop="location"
          label="地域">
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
  </div>  
</template>

<script>
export default {
  data(){
    return{
      tableData: [
        {
          type: '归档',
          bucketName: 'bucket1',
          location: '北京',
          createDate: '2000',
        },
        {
          type: '归档',
          bucketName: 'bucket2',
          location: '北京',
          createDate: '2000',
        },
        {
          type: '归档',
          bucketName: 'bucket3',
          location: '北京',
          createDate: '2000',
        }
      ],
      list:[],
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
      this.$confirm('确认删除该存储空间吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        this.axios.delete('/deleteBucket',{
          bucketName: row.bucketName,
        }).then((res)=>{
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
      this.list = res.data;
    }).catch((err)=>{
      console.log(err);
    })
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
</style>