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
        <el-form-item label="标签键">
          <el-input v-model="formData.tagKey" placeholder="a"></el-input>
        </el-form-item>
        <el-form-item label="标签值">
          <el-input v-model="formData.tagValue" placeholder="a"></el-input>
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
        tagKey:'',
        tagValue:''
      },
      response:''
    }
  },
  methods:{
    send(){
      this.axios.get('/listBucketByTag',{params:{
        tagKey: this.formData.tagKey,
        tagValue: this.formData.tagValue
      }}).then((res)=>{
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