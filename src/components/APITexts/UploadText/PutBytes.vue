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
          <el-input v-model="formData.objectPath" placeholder="xx.txt"></el-input>
        </el-form-item>
        <el-form-item label="	内容">
          <el-input v-model="formData.content" placeholder="输入数组内容"></el-input>
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
        objectPath:'',
        content:''
      },
      response:''
    }
  },
  methods:{
    send(){
      this.axios.post('/putBytes',this.formData).then((res)=>{
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