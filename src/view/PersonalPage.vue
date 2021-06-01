<template>
  <div>
    <el-container>
      <el-header>
        <el-button icon="el-icon-s-home" circle @click="homeClick" style="color: aliceblue" class="main-button"></el-button>
        <el-button @click="console" icon="el-icon-bank-card" circle style="color: aliceblue" class="console-button" title="控制台"></el-button>
        <el-button circle class="main-button avater-button" @click="userClick">
          <span class="avater-span">
            <img src="../assets/logo.png" alt="">
          </span>
        </el-button>
      </el-header>
      <el-main>
        <div class="aside">
          <el-menu
            default-active="1"
            @select="handleSelect">
            <el-menu-item index="1">
              <i class="el-icon-user-solid"></i>
              <span slot="title">&nbsp;个人信息</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-s-goods"></i>
              <span slot="title">&nbsp;余额</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-info"></i>
              <span slot="title">&nbsp;入门</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-s-help"></i>
              <span slot="title">&nbsp;资源与学习</span>
            </el-menu-item>
            <!-- <div class="aside-padding"></div> -->
          </el-menu>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
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
    handleSelect(key, keyPath) {
      switch(key){
        case '1':
          this.$router.push('/PersonalPage/UserInfo');
          break;
        case '2':
          this.$router.push('/PersonalPage/UserBanl');
          break;
        case '3':
          this.$router.push('/MainPage/Overview');
          break;
        case '4':
          this.$router.push('/MainPage/Overview');
          break;
      }
    },
    userClick(){
      this.$router.push('/PersonalPage')
    },
    console(){
      this.$router.push('/ConsolePage')
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
  padding: 0;
  height: 100%;
  width: 1920px;
}
</style>

<style scoped>
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
  bottom: 0;
  overflow-y: scroll;
}
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
.console-button{
  right: 80px;
  font-size: 25px;
  padding: 4px;
  background-color: rgba(255,0,0,0);
  border: 0px;
  width: 45px;
  height: 45px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
.console-button:active {
  background-color: rgba(255,0,0,0);
}
.console-button:hover {
  background-color: rgba(221, 221, 221, 0.459);
}
</style>