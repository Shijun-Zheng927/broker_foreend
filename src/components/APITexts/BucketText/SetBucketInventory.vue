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
      <el-form label-position="left" label-width="210px" :model="formData">
        <el-form-item label="桶名称">
          <el-input v-model="formData.bucketName" placeholder="xmsx-003"></el-input>
        </el-form-item>
        <el-form-item label="存储空间清单Id">
          <el-input v-model="formData.inventoryId" placeholder="inventory"></el-input>
        </el-form-item>
        <el-form-item label="清单生成频率">
          <el-input v-model="formData.inventoryFrequency" placeholder="2"></el-input>
        </el-form-item>
        <el-form-item label="清单包含对象版本">
          <el-input v-model="formData.inventoryIncludedObjectVersions" placeholder="1"></el-input>
        </el-form-item>
        <el-form-item label="是否启用存储清单">
          <el-input v-model="formData.isEnabled" placeholder="1"></el-input>
        </el-form-item>
        <el-form-item label="搜索包含该前缀的对象">
          <el-input v-model="formData.objPrefix" placeholder="2"></el-input>
        </el-form-item>
        <el-form-item label="清单存储路径前缀">
          <el-input v-model="formData.destinationPrefix" placeholder="inventory/"></el-input>
        </el-form-item>
        <el-form-item label="清单格式">
          <el-input v-model="formData.bucketFormat" placeholder="1"></el-input>
        </el-form-item>
        <el-form-item label="目的地bucket的用户accountId">
          <el-input v-model="formData.accountId" placeholder="1704003793197459"></el-input>
        </el-form-item>
        <el-form-item label="目的地bucket的roleArn">
          <el-input v-model="formData.roleArn" placeholder="acs:ram:1704003793197459:role/AliyunoSSRole"></el-input>
        </el-form-item>
        <el-form-item label="目的地bucket的名称">
          <el-input v-model="formData.destBucketName" placeholder="xmsx-003"></el-input>
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
        inventoryId:'',
        inventoryFrequency:'',
        inventoryIncludedObjectVersions:'',
        isEnabled:'',
        objPrefix:'',
        destinationPrefix:'',
        bucketFormat:'',
        accountId:'',
        roleArn:'',
        destBucketName:''
      },
      response:''
    }
  },
  methods:{
    send(){
      this.axios.post('/setBucketInventoryConfiguration',this.formData).then((res)=>{
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