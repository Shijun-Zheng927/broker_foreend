<template>
  <div>
    <el-card class="tag-card">
      <el-row style="padding-left: 30px">
        <h2>标签设置</h2>
      </el-row>
      <div class="top-button">
        <el-button type="primary" @click="newTag">新增标签</el-button>
        <el-button type="info" style="margin-left: 20px" @click="deleteTag">删除标签</el-button>
      </div>
      <el-table
        :data="tableData"
        stripe
        style="width: 1100px;margin: 20px auto">
        <el-table-column
          prop="tagKey"
          label="Key"
          width="300">
          <template slot-scope="scope">
            <el-tag
              disable-transitions>{{scope.row.tagKey}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="tagValue"
          label="Value">
          <template slot-scope="scope">
            <el-tag
              type="info"
              disable-transitions>{{scope.row.tagValue}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <el-row style="padding: 0 30px 0 30px" :gutter="20" v-if="newFlag">
        <el-col :span="10">
          <el-input v-model="tagKey" placeholder="请输入Key"></el-input>
        </el-col>
        <el-col :span="10">
          <el-input v-model="tagValue" placeholder="请输入Value"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="add" type="primary">添加</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="log-card">
      <el-row style="padding-left: 30px">
        <h2>日志设置</h2>
      </el-row>
      <div class="top-button" v-if="!openFlag">
        <el-button type="primary" @click="openLog">开启日志</el-button>
        <el-button type="info" style="margin-left: 20px" @click="closeLog">关闭日志</el-button>
      </div>
      <div class="open-div" v-if="openFlag">
        <el-row>
          <el-col :span="3" style="line-height: 40px;">目标桶名称：</el-col>
          <el-col :span="12">
            <el-input v-model="logBucketName"></el-input>
          </el-col>
        </el-row>
        <el-row>&nbsp;</el-row>
        <el-row>
          <el-col :span="3" style="line-height: 40px;">日志路径:</el-col>
          <el-col :span="12">
            <el-input v-model="logpath"></el-input>
          </el-col>
        </el-row>
        <el-row>&nbsp;</el-row>
        <el-row>
          <el-button @click="open" type="primary" style="margin-left: 140px">打开日志</el-button>
          <el-button @click="back" type="info" style="margin-left: 20px">取消</el-button>
        </el-row>
      </div>
      <el-table
        :data="logData"
        stripe
        style="width: 1100px;margin: 20px auto"
        v-if="!openFlag">
        <el-table-column
          prop="targetBucketName"
          label="目标桶名称"
          width="300">
        </el-table-column>
        <el-table-column
          prop="targetPrefix"
          label="桶内路径">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bucket: '',
      tableData: [],
      keyList:{},
      newFlag: false,
      tagKey: '',
      tagValue: '',
      openFlag: false,
      logBucketName: '',
      logpath: '',
      logData: [],
      keys:[],
      values:[]
    }
  },
  methods:{
    getRouterData(){
      this.bucket = this.$route.query.bucket;
    },
    newTag(){
      this.newFlag = true;
    },
    deleteTag(index,row){
      this.$confirm('确认删除所有标签吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.delete('/deleteBucketTagging',{data:{bucketName: this.bucket}}).then(res => {
          if(res.data === 'fail'){
            this.$message({
              type: 'error',
              message: '删除失败'
            }); 
          }else{
            this.tableData = [];
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }
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
    back(){
      this.openFlag = false;
      this.logBucketName = '';
      this.logpath = '';
    },
    add(){
      this.$confirm('确认添加吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        for(var i = 0;i<this.tableData.length;i++){
          this.keys.push(this.tableData[i].tagKey);
          this.values.push(this.tableData[i].tagValue)
        }
        this.keys.push(this.tagKey);
        this.values.push(this.tagValue);
        this.axios
          .post("/setBucketTagging", {
            bucketName: this.bucket,
            tagKey: this.keys,
            tagValue: this.values,
          })
          .then((res) => {
            if(res.data === 'fail'){
              this.$message({
                type: 'error',
                message: '添加失败'
              }); 
            }else{
              this.$message({
                type: 'success',
                message: '添加成功'
              });
              this.tagKey = '';
              this.tagValue = '';
              this.newFlag = false;
              this.tableData=[];
              this.getTag();
            }
          }).catch((err)=>{
            this.$message({
              type: 'info',
              message: '已取消添加'
            }); 
          });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消添加'
        });          
      });
    },
    openLog(){
      this.openFlag = true;
    },
    open(){
      this.$confirm('确认打开日志吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.post('/openBucketLogging',{
          logBucketName: this.logBucketName,
          bucketName: this.bucket,
          logpath: this.logpath
        }).then(res => {
          if(res.data === 'success'){
            this.openFlag = false;
            this.logBucketName = '';
            this.logpath = '';
            this.$message({
              type: 'success',
              message: '开启成功!'
            });
            this.getLog();
          }else{
            this.$message({
              type: 'error',
              message: '开启失败'
            }); 
          }
        }).catch(err => {
          this.$message({
            type: 'error',
            message: '开启失败，检查您输入的值'
          }); 
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });          
      });
    },
    closeLog(){
      this.$confirm('确认关闭日志吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.post('/closeBucketLogging',{
          bucketName: this.bucket,
        }).then(res => {
          if(res.data === 'success'){
            this.$message({
              type: 'success',
              message: '关闭成功!'
            });
            this.logData = [];
          }else{
            this.$message({
              type: 'error',
              message: '关闭失败！'
            }); 
          }
        }).catch(err => {
          console.log(err);
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });          
      });
    },
    getLog(){
      this.axios.post('/getBucketLogging',{
        bucketName: this.bucket
      }).then((res)=>{
        var key = Object.keys(res.data)[0]
        if(key!=null){
          var value = res.data[key];
          this.logData.push({
            targetBucketName: key,
            targetPrefix: value
          });
        }
      });
    },
    getTag(){
      this.axios.get('/getBucketTagging',{params:{
        bucketName: this.bucket
      }}).then((res)=>{
        for(var a in res.data){
          console.log(a);
          var value = res.data[a];
          this.tableData.push({
            tagKey: a,
            tagValue: value
          });
        }
      }).catch((err)=>{
        console.log(err);
      });
    }
  },
  created(){
    this.getRouterData();
    this.getLog();
    this.getTag();
  }
}
</script>

<style scoped>
.tag-card {
  width: 1200px;
  margin: 0 auto;
}
.log-card {
  width: 1200px;
  margin: 30px auto;
}
.top-button {
  width: 100%;
  padding-left: 30px;
  margin-top: 30px;
}
.tag-div {
  height: 200px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 30px;
}
.tag-item{
  width: 550px;
  float: left;
  height: 40px;
  font-size: 25px;
}
.open-div{
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 30px;
}
</style>