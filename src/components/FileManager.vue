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
          prop="fileName"
          label="文件名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="fileSize"
          label="文件大小"
          width="180">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="deleteFile(scope.$index, scope.row)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small" @click="rename(scope.$index, scope.row)">重命名</el-button>
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
      tableData:[
        {
          fileName: 'test.txt',
          fileSize: '200KB'
        }
      ],
      bucket: '',
    }
  },
  methods: {
    deleteFile(index,row) {
      this.$confirm('确认删除该文件吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.delete('/deleteObject',{
          bucketName: this.bucket,
          objectKey: ''
        }).then(res => {
          this.tableData.splice(index,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(err => {
          console.log(err);
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
    rename(index,row){
      // this.$prompt('请输入文件名', '重命名', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      // }).then(({ newName }) => {
      //   this.axios.post('').then((res)=>{
      //     this.$message({
      //       type: 'success',
      //       message: '修改后的文件名：' + newName
      //     });
      //     row.fileName = newName;
      //   }).catch((err)=>{
      //     this.$message({
      //       type: 'error',
      //       message: '修改失败'
      //     }); 
      //   })
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '取消修改'
      //   });       
      // });
      this.$prompt('请输入文件名', '重命名', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '修改后的文件名是: ' + value
        });
        row.fileName = value;
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    newFolder(){
      // this.$prompt('请输入目录名（/ 用于分割路径，可快速创建子目录，但不要以 / 或 \ 开头，不要出现连续的 /；）', '新建目录', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      // }).then(({ folder }) => {
      //   this.axios.post('').then((res)=>{
      //     this.$message({
      //       type: 'success',
      //       message: '目录名' + folder
      //     });
      //     this.tableData.unshift({
      //       fileName: folder,
      //       fileSize: ''
      //     })
      //   }).catch((err)=>{
      //     this.$message({
      //       type: 'error',
      //       message: '修改失败'
      //     }); 
      //   })
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '取消创建'
      //   });       
      // });
      this.$prompt('请输入目录名', '新建目录', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '新建的目录名是: ' + value
        });
        this.tableData.unshift({
          fileName: value,
          fileSize: ''
        })
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
        // this.axios
        //   .post("/uploadIntroduce", {
        //     file: this.html,
        //     name: this.name,
        //   })
        //   .then((res) => {
        //     this.name = '';
        //     this.content = '';
        //     this.html = '';
        //   });
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