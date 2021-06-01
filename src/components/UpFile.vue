<template>
  <div>
    <el-card class="file-card">
      <div class="upload-path">
        上传到：
      </div>
      <el-upload
        class="upload-form"
        ref="upload"
        action=""
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" type="success" @click="upload">上传</el-button>
      </el-upload>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bucket: '',
      fileList: [],
    }
  },
  methods:{
    getRouterData(){
      this.bucket = this.$route.query.bucket;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    upload(){

    },
  },
  created(){
    this.getRouterData();
  }
}
</script>

<style scoped>
.file-card{
  margin: 0 auto;
  width: 1200px;
  height: 200px;
}
.upload-form {
  width: 400px;
}
</style>