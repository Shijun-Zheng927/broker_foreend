<template>
  <div>
    <el-card class="about-card">
      流量
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bucket: '',
    }
  },
  methods:{
    getRouterData(){
      this.bucket = this.$route.query.bucket;
      console.log(this.bucket);
    }
  },
  created(){
    this.getRouterData();
  }
}
</script>

<style scoped>
.about-card{
  margin: 0 auto;
  width: 1200px;
}
</style>