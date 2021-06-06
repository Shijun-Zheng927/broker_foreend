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
        <el-form label-position="left" label-width="150px" :model="formData1">
          <el-form-item label="桶名称">
            <el-input v-model="formData1.bucketName"></el-input>
          </el-form-item>
          <el-form-item label="目标存储路径">
            <el-input v-model="formData1.objectPath"></el-input>
          </el-form-item>
          <el-form-item label="文件类型">
            <el-input v-model="formData1.contentType"></el-input>
          </el-form-item>
          <el-form-item label="并发线程数">
            <el-input v-model="formData1.taskNum"></el-input>
          </el-form-item>
          <el-form-item label="上传分片大小">
            <el-input v-model="formData1.partSize"></el-input>
          </el-form-item>
          <el-row>
            <el-upload
              class="upload-demo upload-rec"
              ref="upload1"
              drag
              action=""
              :http-request="upload1"
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
        <el-button type="primary" @click="send1">发送</el-button>
      </template>
      <template v-slot:response>
        {{response1}}
      </template>
    </api-template>
    <el-card class="tem-card">
      <div class="tem-content-div">
        <el-row>
          <h2>示例（类型2）</h2>
          <h1>&nbsp;</h1>
          <h3>请求</h3>
        </el-row>
        <div class="tem-form-div">
          <el-form label-position="left" label-width="150px" :model="formData2">
            <el-form-item label="桶名称">
              <el-input v-model="formData2.bucketName"></el-input>
            </el-form-item>
            <el-form-item label="目标存储路径">
              <el-input v-model="formData2.objectPath"></el-input>
            </el-form-item>
            <el-row>
              <el-upload
                class="upload-demo upload-rec"
                ref="upload2"
                drag
                action=""
                :http-request="upload2"
                :auto-upload="false"
                :limit="1"
                >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              </el-upload>
            </el-row>
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
      formData1:{
        bucketName:'',
        objectPath:'',
        contentType:'',
        taskNum:'',
        partSize:''
      },
      formData2:{
        bucketName:'',
        objectPath:'',
      },
      response1:'',
      response2:'',
    }
  },
  methods:{
    send1(){
      this.$refs.upload1.submit();
    },
    upload1(param){
      var formData = new FormData();
      formData.append("bucketName",this.formData.bucketName);
      formData.append("objectPath",this.formData.objectPath);
      formData.append("contentType",this.formData.contentType);
      formData.append("taskNum",this.formData.taskNum);
      formData.append("partSize",this.formData.partSize);
      formData.append("file",param.file)
      this.axios({
        url: '/checkPointUploadA',
        data: formData,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        this.response1 = res.data;
      }).catch((err)=>{
        console.log(err);
      });
    },
    send2(){
      this.$refs.upload2.submit();
    },
    upload2(param){
      var formData = new FormData();
      formData.append("bucketName",this.formData.bucketName);
      formData.append("objectPath",this.formData.objectPath);
      formData.append("file",param.file)
      this.axios({
        url: '/checkPointUploadB',
        data: formData,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        this.response2 = res.data;
      }).catch((err)=>{
        console.log(err);
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