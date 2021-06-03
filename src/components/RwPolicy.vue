<template>
  <div>
    <el-card class="policy-card">
      <el-row style="padding-left: 30px">
        <h2>修改访问权限</h2>
      </el-row>
      <el-row class="choose-policy">
        Bucket ACL:&nbsp;&nbsp;&nbsp;&nbsp;
        <el-radio-group v-if="category" v-model="rwPolicy">
          <el-radio-button
            v-for="item in cateOptions1"
            :key="item.label"
            :label="item.label">
            {{item.value}}
          </el-radio-button>
        </el-radio-group>
        <el-radio-group v-else v-model="rwPolicy">
          <el-radio-button
            v-for="item in cateOptions2"
            :key="item.label"
            :label="item.label">
            {{item.value}}
          </el-radio-button>
        </el-radio-group>
      </el-row>
      <el-row class="choose-button">
        <el-button type="primary" @click="changePolicy">修改</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bucket: '',
      category: true,
      rwPolicy: '0',
      cateOptions1: [{
        label: '0',
        value: '私有'
      },{
        label: '1',
        value: '公共读'
      },{
        label: '2',
        value: '公共读写'
      },],
      cateOptions2: [{
        label: '0',
        value: '私有'
      },{
        label: '1',
        value: '公共读'
      },{
        label: '2',
        value: '桶、对象公共读'
      },{
        label: '3',
        value: '公共读写'
      },{
        label: '4',
        value: '桶、对象公共读'
      },],
    }
  },
  methods:{
    getRouterData(){
      this.bucket = this.$route.query.bucket;
      console.log(this.bucket);
    },
    changePolicy(){
      this.$confirm('确认修改吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(this.form);
        this.axios.post('/setBucketAcl',{
          bucketName: this.bucket,
          rwPolicy: this.rwPolicy,
        }).then((res)=>{
          if(res.data === 'fail'){
            this.$message({
              type: 'error',
              message: '修改失败'
            })
          }else{
            this.$message({
              type: 'success',
              message: '修改成功!'
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        });          
      });
    }
  },
  created(){
    this.getRouterData();
  }
}
</script>

<style scoped>
.policy-card{
  margin: 0 auto;
  width: 1200px;
}
.choose-policy{
  padding-left: 30px;
  margin-top: 30px;
}
.choose-button{
  padding-left: 143px;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>