<template>
  <div>
    <el-card class="tem-card">
      <div class="tem-content-div">
        <el-row>
          <h2>概述</h2>
        </el-row>
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
      </div>
    </el-card>
  </div>
</template>


<script>
export default {
  data(){
    return{
      html:''
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