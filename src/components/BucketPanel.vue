<template>
  <div>
    <div class="aside">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/ConsolePage' }">Bucket列表</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>Bucket列表</el-breadcrumb-item> -->
        <el-breadcrumb-item>{{bucket}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-menu
        default-active="1"
        @select="handleSelect">
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>存储空间</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu> -->
        <el-menu-item index="1">
          <i class="el-icon-info"></i>
          <span slot="title">&nbsp;概览</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-goods"></i>
          <span slot="title">&nbsp;文件管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-info"></i>
          <span slot="title">&nbsp;入门</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-help"></i>
          <span slot="title">&nbsp;资源与学习</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <div class="top-padding"></div>
      <router-view></router-view>
    </div>
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
    handleSelect(key, keyPath) {
      switch(key){
        case '1':
          this.$router.push({
            name: 'BucketAbout',
            query: {
              bucket: this.bucket
            }
          });
          break;
        case '2':
          this.$router.push({
            name: 'FileManager',
            query: {
              bucket: this.bucket
            }
          });
          break;
        case '3':
          this.$router.push('/MainPage/Overview');
          break;
        case '4':
          this.$router.push('/MainPage/Overview');
          break;
      }
    },
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
.breadcrumb{
  margin: 35px 0 30px 30px;
}
.aside{
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  width: 300px;
}
.content{
  position: absolute;
  left: 300px;
  right: 0;
  top: 60px;
  /* 139px */
  bottom: 0;
  overflow-y: scroll;
}
.top-padding {
  width: 100%;
  height: 79px;
}
</style>