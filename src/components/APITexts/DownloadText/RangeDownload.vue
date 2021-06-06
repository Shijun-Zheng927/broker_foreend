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
          <el-input v-model="formData.bucketName" placeholder="xmsx-003"></el-input>
        </el-form-item>
        <el-form-item label="目标存储路径">
          <el-input v-model="formData.objectKey" placeholder="m.pdf"></el-input>
        </el-form-item>
        <el-form-item label="范围起始点">
          <el-input v-model="formData.begin" placeholder="1"></el-input>
        </el-form-item>
        <el-form-item label="范围终止点">
          <el-input v-model="formData.end" placeholder="2000"></el-input>
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
        begin:'',
        end:''
      },
      response:''
    }
  },
  methods:{
    send(){
      this.axios.post('/rangeDownload',this.formData).then((res)=>{
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