<template>
  <div>
    <el-container>
      <el-header>
        <el-button icon="el-icon-s-fold" circle @click="homeClick" style="color: aliceblue" class="main-button"></el-button>
        <el-button circle class="main-button avater-button" @click="userClick">
          <span class="avater-span">
            <img src="../assets/logo.png" alt="">
          </span>
        </el-button>
      </el-header>
      <el-main>
        <!-- <div class="aside">
          <el-menu
            default-active="1-1"
            @select="handleSelect">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>存储空间</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
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
          <router-view></router-view>
        </div> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default ({
  methods: {
    homeClick(){
      this.$router.push('/MainPage/Overview')
    },
    userClick(){
      this.$router.push('/PersonalPage')
    },
  },
  mounted(){
    
  }
})
</script>

<style>
.el-header {
  background-color: #409EFF;
  color: aliceblue;
  line-height: 60px;
  height: 60px;
  position: relative;
}
.el-main {
  /* background-color: #E9EEF3; */
  /* color: #333; */
  /* text-align: center;
  line-height: 160px; */
  padding: 0;
  height: 100%;
  width: 1920px;
}
</style>

<style scoped>
.avater-button{
  right: 20px;
  font-size: 30px;
  padding: 4px;
}
.avater-span{
  width: 40px;
  height: 40px;
}
.avater-span img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.main-button {
  background-color: rgba(255,0,0,0);
  border: 0px;
  width: 45px;
  height: 45px;
  font-size: 20px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
.main-button:active {
  background-color: rgba(255,0,0,0);
}
.main-button:hover {
  background-color: rgba(221, 221, 221, 0.459);
}
.main-button {
  background-color: rgba(255,0,0,0);
  border: 0px;
  width: 45px;
  height: 45px;
  font-size: 20px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
</style>