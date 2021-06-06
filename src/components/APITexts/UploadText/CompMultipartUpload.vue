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
          <el-input v-model="formData.bucketName" placeholder="brokertest-standard"></el-input>
        </el-form-item>
        <el-form-item label="目标存储路径">
          <el-input v-model="formData.objectKey" placeholder="xxxx.pdf"></el-input>
        </el-form-item>
        <el-form-item label="分片管理Id">
          <el-input v-model="formData.uploadId" placeholder="初始化得到的id"></el-input>
        </el-form-item>
        <el-form-item label="位置（类型2使用）">
          <el-input v-model="formData.etag" placeholder="etag列表（每个etag之间用;隔开）"></el-input>
        </el-form-item>
        <el-form-item label="编号（类型2使用）">
          <el-input v-model="formData.partNumber" placeholder="partNumber列表（每个partNumber之间用;隔开）"></el-input>
        </el-form-item>
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
        objectKey:'',
        uploadId:'',
        etag:'',
        partNumber:''
      },
      response:'',
      etagList:[],
      partList:[],
      partNumberList:[],
    }
  },
  methods:{
    send(){
      this.etagList = this.formData.etag.split(';');
      this.partList = this.formData.partNumber.split(';');
      for(var i = 0;i<this.partList.length;i++){
        this.partNumberList.push(parseInt(this.partList[i]));
      }
      this.axios.post('/completeMultipartUpload',{
        bucketName: this.formData.bucketName,
        objectKey: this.formData.objectKey,
        uploadId: this.formData.uploadId,
        etag: this.etagList,
        partNumber: this.partNumberList
      }).then((res)=>{
        this.partNumberList = [];
        this.response = res.data;
      }).catch((err)=>{
        this.response = 'bad resquest';
      });
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