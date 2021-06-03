<template>
  <div>
    <el-card class="file-card">
      <el-row style="padding-left: 30px">
        <h2>上传文件</h2>
      </el-row>
      <el-row class="upload-path">
        上传文件路径：
        <el-input placeholder="请输入内容" v-model="backPath" style="width: 600px">
          <template slot="prepend">oss://{{bucket}}/</template>
        </el-input>
      </el-row>
      <!-- <el-upload
        class="upload-form"
        ref="upload"
        action=""
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" type="success" @click="upload">上传</el-button>
      </el-upload> -->
      <el-row>
        <el-upload
          class="upload-demo upload-rec"
          drag
          action=""
          :http-request="upload"
          >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bucket: '',
      fileList: [],
      objectPath: 'oss://bucket1/',
      backPath:'',
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
    upload(param){
      var formData = new FormData();
      formData.append("bucketName",this.bucket);
      formData.append("objectPath",this.objectPath);
      formData.append("file",param.file);
      this.axios({
        url: "/putFile",
        data: formData,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      });
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
}
.upload-form {
  width: 400px;
}
.upload-path {
  padding-left: 30px;
  margin-top: 30px
}
.upload-rec {
  padding-left: 150px;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>