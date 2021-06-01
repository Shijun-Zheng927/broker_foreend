<template>
  <div>
    <el-card class="file-card">
      <div class="top-button">
        <el-button type="primary" @click="toUpload">上传文件</el-button>
        <el-button type="info" style="margin-left: 20px">新建目录</el-button>
        <el-button style="margin-left: 20px">刷新</el-button>
      </div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
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
            <el-button type="text" size="small">编辑</el-button>
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
        this.axios.post('/changeOrder',{id:this.orderlist[index].id,status:'2'}).then(res => {
          this.tableData.splice(index,1);
        }).catch(err => {
          console.log(err);
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
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
    }
  },
  created(){
    this.getRouterData();
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
}
</style>