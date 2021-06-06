<template>
  <div>
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
            <el-input v-model="formData.bucketName" placeholder="xmsx-003"></el-input>
          </el-form-item>
          <el-form-item label="目标存储路径">
            <el-input v-model="formData.objectName" placeholder="x.exe"></el-input>
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
    <el-card class="tem-card">
      <div class="tem-content-div">
        <el-row>
          <h2>分片合并示例（类型1）</h2>
          <h1>&nbsp;</h1>
          <h3>请求</h3>
        </el-row>
        <div class="tem-form-div">
          <el-form label-position="left" label-width="150px" :model="formData2">
            <el-form-item label="桶名称">
              <el-input v-model="formData2.bucketName" placeholder="xmsx-003"></el-input>
            </el-form-item>
            <el-form-item label="目标存储路径">
              <el-input v-model="formData2.objectPath" placeholder="x.exe"></el-input>
            </el-form-item>
            <el-form-item label="分片上传ID">
              <el-input v-model="formData2.uploadId" placeholder="分片上传返回id"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="tem-button-div">
          <el-button type="primary" @click="send2">发送</el-button>
        </div>
        <el-row>
          <h1>&nbsp;</h1>
          <h3>响应</h3>
        </el-row>
        <div class="tem-response-div">
          {{response2}}
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      html:'',
      formData:{
        bucketName:'',
        objectName:'',
      },
      formData2:{
        bucketName:'',
        objectName:'',
        uploadId:''
      },
      response:'',
      response2:''
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
      formData.append("objectName",this.formData.objectName);
      formData.append("file",param.file);
      console.log(formData);
      this.axios({
        url: '/multipartUpload',
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
    send2(){
      this.axios.post('/',this.formData2).then((res)=>{
        this.response2 = res.data;
      }).then((err)=>{
        this.response2 = 'bad resquest';
      })
    }
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