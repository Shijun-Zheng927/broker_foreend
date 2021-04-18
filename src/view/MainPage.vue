<template>
  <div>
    <el-container>
      <el-header>
        <el-button v-if="show" icon="el-icon-s-fold" circle @click="menuClick" style="color: aliceblue" class="main-button"></el-button>
        <el-button v-if="!show" icon="el-icon-s-unfold" circle @click="menuClick" style="color: aliceblue" class="main-button"></el-button>
        <el-button circle class="main-button avater-button" @click="userClick">
          <span class="avater-span">
            <img src="../assets/logo.png" alt="">
          </span>
        </el-button>
      </el-header>
      <el-main>
        <div class="main">
          <div class="aside" v-show="show">
            <transition name="el-zoom-in-center">
              <div v-show="show">
                <el-menu
                  default-active="1"
                  @open="handleOpen"
                  @close="handleClose"
                  @select="handleSelect">
                  <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">&nbsp;概览</span>
                  </el-menu-item>
                  <el-menu-item index="2">
                    <i class="el-icon-s-management"></i>
                    <span slot="title">&nbsp;产品功能</span>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <i class="el-icon-s-goods"></i>
                    <span slot="title">&nbsp;定价</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <i class="el-icon-info"></i>
                    <span slot="title">&nbsp;入门</span>
                  </el-menu-item>
                  <el-menu-item index="5">
                    <i class="el-icon-s-help"></i>
                    <span slot="title">&nbsp;资源与学习</span>
                  </el-menu-item>
                  <!-- <div class="aside-padding"></div> -->
                </el-menu>
              </div>
            </transition>
          </div>
          <div class="content">
            <router-view></router-view>
          </div>
          <div class="help-aside" v-show="!show">
            <transition name="el-zoom-in-center">
              <div v-show="!show">
                <el-card class="help-card">常见问题</el-card>
              </div>
            </transition>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default ({
  data(){
    return{
      show: true,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      switch(key){
        case '1':
          this.$router.push('/MainPage/Overview');
          break;
        case '2':
          this.$router.push('/MainPage/Overview');
          break;
        case '3':
          this.$router.push('/MainPage/Overview');
          break;
        case '4':
          this.$router.push('/MainPage/Overview');
          break;
        case '5':
          this.$router.push('/MainPage/Overview');
          break;
      }
    },
    menuClick(evt){
      this.show = !this.show;
      let target = evt.target;
      if(target.nodeName == "I"){
        target = evt.target.parentNode;
      }
      target.blur();
    },
    userClick(){
      this.$router.push('/PersonalPage')
    }
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
.main{
  width: 1920px;
  height: 100%;
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
  bottom: 0;
  overflow-y: scroll;
}
.help-aside{
  display: block;
  position: absolute;
  left: 10px;
  top: 100px;
  bottom: 0;
  width: 280px;
}
/* .aside-padding{
  width: 100%;
  height: 629px;
} */
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
.help-card {
  width: 100%;
  height: 100%;
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
</style>