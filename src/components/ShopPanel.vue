<template>
  <div>
    <el-card class="buy-card">
      <el-form ref="form" :model="form" :label-position='labelPosition' label-width="150px" class="buy-form">
        <el-form-item label="存储空间名称">
          <el-input v-model="form.bucketName" style="width: 217px;"></el-input>
        </el-form-item>
        <!-- <el-form-item label="区域">
          <el-select v-model="form.region" placeholder="请选择区域">
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="北京" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="资源包类型">
          <el-select v-model="form.category" placeholder="请选择资源包类型">
            <el-option label="标准" value="standard"></el-option>
            <el-option label="归档" value="archive"></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="规格">
          <el-select v-model="form.size" placeholder="请选择规格">
            <el-option label="40GB" value="40GB"></el-option>
            <el-option label="100GB" value="100GB"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="购买数量">
          <el-input-number v-model="form.number" @change="handleNumberChange" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item label="购买时长">
          <el-select v-model="form.time" placeholder="请选择购买时长">
            <el-option label="1月" value="1"></el-option>
            <el-option label="2月" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="总金额">
          <h2>￥100</h2>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="buy">订阅</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form: {
        region: '',
        category: '',
        size: '',
        number: '',
        time: ''
      },
      labelPosition: 'left'
    }
  },
  methods: {
    handleNumberChange(){

    },
    buy(){
      this.$confirm('确认订阅吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // this.$message({
        //   type: 'success',
        //   message: '删除成功!'
        // });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消订阅'
        });          
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