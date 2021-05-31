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
              @click="selectBucket(scope.$index, scope.row)">bucket1</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="存储类型"
          width="180">
        </el-table-column>
        <!-- <el-table-column
          prop="address"
          label="地址">
        </el-table-column> -->
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
          type: '归档'
        }
      ]
    }
  },
  methods:{
    selectBucket(index,row){
      this.$router.push({
        name: 'BucketPanel',
        query: {
          bucket: 'bucket1'
        }
      });
    }
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