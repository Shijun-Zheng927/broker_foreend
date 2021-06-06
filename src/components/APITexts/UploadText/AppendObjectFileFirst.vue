<template>
  <api-template>
    <template v-slot:md>
      <mavon-editor
        class="md"
        v-html="html"
        :boxShadow="false"
        :subfield="false"
        :defaultOpen="'preview'"
        :toolbarsFlag="false"
        :editable="false"
        :scrollStyle="true"
        :ishljs="true"
      ></mavon-editor>
    </template>
    <template v-slot:form>
      <el-form label-position="left" label-width="150px" :model="formData">
        <el-form-item label="桶名称">
          <el-input v-model="formData.bucketName" placeholder="xmsx-obs1"></el-input>
        </el-form-item>
        <el-form-item label="目标存储路径">
          <el-input v-model="formData.objectPath" placeholder="m.pdf"></el-input>
        </el-form-item>
        <el-form-item label="文件类型">
          <el-input v-model="formData.contentType" placeholder="application/pdf"></el-input>
        </el-form-item>
        <el-form-item label="分片管理Id(类型2需要)">
          <el-input v-model="formData.uploadId" placeholder="初始化获得的id"></el-input>
        </el-form-item>
        <el-row>
          <el-upload
            class="upload-demo upload-rec"
            ref="upload"
            drag
            action=""
            :http-request="upload"
            :auto-upload="false"
            :limit="1"
            >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
        </el-row>
      </el-form>
    </template>
    <template v-slot:button>
      <el-button type="primary" @click="send">发送</el-button>
    </template>
    <template v-slot:response>
      {{response}}
    </template>
  </api-template>
</template>

<script>
export default {
  data(){
    return{
      html:'',
      formData:{
        bucketName:'',
        objectPath:'',
        contentType:'',
        uploadId:''
      },
      response:''
    }
  },
  methods:{
    send(){
      this.$refs.upload.submit();
    },
    upload(param){
      console.log('test1');
      var formData = new FormData();
      formData.append("bucketName",this.formData.bucketName);
      formData.append("objectPath",this.formData.objectPath);
      formData.append("contentType",this.formData.contentType);
      formData.append("uploadId",this.formData.uploadId);
      formData.append("file",param.file);
      console.log(formData);
      this.axios({
        url: '/appendObjectFileFirst',
        data: formData,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        this.response = res.data;
      }).catch((err)=>{
        this.response = 'bad resquest';
      });
    },
  },
  created(){
    this.axios.get('/getIntroduceName',{params:{
      name: this.$getHref.str()
    }}).then((res) => {
      this.html = res.data;
    }).catch((err)=>{
      console.log(err);
    });
  }
}
</script>

<style scoped>

</style>