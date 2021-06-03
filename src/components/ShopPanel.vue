<template>
  <div>
    <el-card class="buy-card">
      <el-form ref="form" :model="form" :label-position='labelPosition' label-width="200px" class="buy-form" :rules="rules">
        <el-form-item label="存储空间名称(英文小写)" prop="bucketName">
          <el-input v-model="form.bucketName" style="width: 217px;"></el-input>
        </el-form-item>
        <el-form-item label="资源包类型">
          <el-select v-model="form.storageClass" :change="changeCate()" placeholder="请选择资源包类型">
            <el-option
              v-for="item in classOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="读写权限">
          <el-radio-group v-if="category" v-model="form.rwPolicy">
            <el-radio-button
              v-for="item in cateOptions1"
              :key="item.label"
              :label="item.label">
              {{item.value}}
            </el-radio-button>
          </el-radio-group>
          <el-radio-group v-else v-model="form.rwPolicy">
            <el-radio-button
              v-for="item in cateOptions2"
              :key="item.label"
              :label="item.label">
              {{item.value}}
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="buy('form')">订阅</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    var validateBucket = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入名称'));
      } else {
        callback();
      }
    };
    return {
      classOptions: [{
        value: '0',
        label: '标准1',
      },{
        value: '1',
        label: '低频1',
      },{
        value: '2',
        label: '归档1',
      },{
        value: '3',
        label: '冷归档',
      },{
        value: '4',
        label: '标准2',
      },{
        value: '5',
        label: '低频2',
      },{
        value: '6',
        label: '归档2',
      },],
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
      form: {
        bucketName: '',
        storageClass: '0',
        rwPolicy: '0',
      },
      rules: {
        bucketName:[
          { required:true, validator: validateBucket, trigger: 'blur' },
          { min: 3, max: 32, message: '长度在 3 到 32 个字符', trigger: 'blur' }
        ]
      },
      labelPosition: 'left',
      category: true,
      existFlag: false,
    }
  },
  methods: {
    changeCate(){
      if(this.form.storageClass>3){
        this.category = false;
      }else{
        this.category = true;
      }
      // console.log('1'+this.form.rwPolicy);
    },
    buy(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios.get('/doesBucketExist',{params:{bucketName:this.form.bucketName}}).then((res)=>{
            if(res.data === true){
              this.$message({
                type: 'error',
                message: '该名称已存在，请修改！'
              });
            }else{
              this.$confirm('确认订阅吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                console.log(this.form);
                this.axios.post('/createBucket',this.form).then((res)=>{
                  if(res.data === 'fail'){
                    this.$message({
                      type: 'error',
                      message: '创建失败！名称允许小写字母数字和-'
                    })
                  }else{
                    this.$message({
                      type: 'success',
                      message: '订阅成功!'
                    });
                    this.$router.push('/MainPageOverview');
                  }
                })
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消订阅'
                });          
              });
            }
          }).catch((err)=>{
            console.log(err);
          })
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.buy-card {
  margin: 40px auto;
  width: 1200px;
}
.buy-form {
  margin: 40px 0 40px 30px;
}
</style>