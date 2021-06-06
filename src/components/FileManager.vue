<template>
  <div>
    <el-card class="file-card">
      <el-row style="padding-left: 30px">
        <h2>文件管理</h2>
      </el-row>
      <div class="top-button">
        <el-button type="primary" @click="toUpload">上传文件</el-button>
        <el-button type="info" style="margin-left: 20px" @click="newFolder">新建目录</el-button>
        <el-button style="margin-left: 20px" @click="refresh">刷新</el-button>
      </div>
      <el-table
        :data="tableData"
        stripe
        style="width: 1100px;margin: 20px auto">
        <el-table-column
          prop="key"
          label="文件名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="size"
          label="文件大小（单位字节）"
          width="180"
          v-if="category">
        </el-table-column>
        <el-table-column
          prop="owner"
          label="拥有者"
          width="550">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="deleteFile(scope.$index, scope.row)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small" @click="download(scope.$index, scope.row)">下载</el-button>
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
      tableData:[],
      bucket: '',
      category: true,
    }
  },
  methods: {
    deleteFile(index,row) {
      this.$confirm('确认删除该文件吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.delete('/deleteObject',{data:{
          bucketName: this.bucket,
          objectKey: row.key
        }}).then(res => {
          if(res.data == 'success'){
            this.refresh();
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }else{
            this.$message({
              type: 'error',
              message: '删除失败!'
            });
          }
        }).catch(err => {
          this.$message({
            type: 'error',
            message: '删除失败!'
          });
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    refresh(){
      this.axios.post('/simpleList',{
        bucketName: this.bucket
      }).then((res)=>{
        this.tableData = res.data;
      }).catch((err)=>{
        console.log(err);
      })
    },
    toUpload(){
      this.$router.push({
        name: 'UpFile',
        query: {
          bucket: this.bucket
        }
      })
    },
    getRouterData(){
      this.bucket = this.$route.query.bucket;
      console.log(this.bucket);
    },
    newFolder(){
      this.$prompt('请输入目录名', '新建目录', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.axios.post('/createFolder',{
          bucketName: this.bucket,
          pathname: value
        }).then((res)=>{
          if(res.data == 'success'){
            this.refresh();
            this.$message({
              type: 'success',
              message: '添加成功'
            });
          }else{
            this.$message({
              type: 'error',
              message: '添加失败'
            });
          }
        }).catch(() => {
          this.$message({
            type: 'error',
            message: '添加失败，请检查输入目录名'
          });       
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    download(index,row){
      this.$confirm('确认下载吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.post("/checkPointDownload", {
          bucketName: this.bucket,
          objectKey: row.key,
          partSize: 5000000,
          taskNum: 5
        }).then((res) => {
          let url = res.data.url;
          let a = document.createElement('a');
          fetch(url).then(res => res.blob()).then(blob => {
            a.href = URL.createObjectURL(blob);
            a.download = row.key;
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(a.href);
            document.body.removeChild(a);
          });
        }).catch((err)=>{
          this.$message({
            type: 'error',
            message: '下载失败'
          });
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消下载'
        });          
      });
    }
  },
  created(){
    this.getRouterData();
    this.refresh();
    this.axios.post('/getBucketPlatform',{
      bucketName: this.bucket
    }).then((res)=>{
      if(res.data == 'ALI'){
        this.category = true;
      }else{
        this.category = false;
      }
    }).catch((err)=>{
      console.log(err);
    });
  }
}
</script>

<style scoped>
.file-card {
  margin: 0 auto;
  width: 1200px;
}
.top-button {
  width: 100%;
  padding-left: 30px;
  margin-top: 30px;
}
</style>