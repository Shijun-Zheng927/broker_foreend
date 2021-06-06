<template>
  <div>
    <el-container>
      <el-header>
        <el-button v-if="show&&home" icon="el-icon-s-fold" circle @click="menuClick" style="color: aliceblue" class="main-button"></el-button>
        <el-button v-if="!show&&home" icon="el-icon-s-unfold" circle @click="menuClick" style="color: aliceblue" class="main-button"></el-button>
        <el-button v-if="!home" icon="el-icon-s-home" circle @click="homeClick" style="color: aliceblue" class="main-button"></el-button>
        <el-button @click="console" icon="el-icon-bank-card" circle style="color: aliceblue" class="console-button" title="控制台"></el-button>
        <el-button circle class="main-button avater-button" @click="userClick">
          <span class="avater-span">
            <img :src="imgUrl" alt="">
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
                  <el-menu-item index="5">
                    <i class="el-icon-s-help"></i>
                    <span slot="title">&nbsp;API说明文档</span>
                  </el-menu-item>
                  <!-- <div class="aside-padding"></div> -->
                </el-menu>
              </div>
            </transition>
          </div>
          <div class="content">
            <router-view @childFn="parentFn"></router-view>
          </div>
          <div class="help-aside" v-show="!show">
            <transition name="el-zoom-in-center">
              <div v-show="!show">
                <el-card class="help-card">
                  <h3>常见问题</h3>
                  <router-link to="/APIText">帮助文档</router-link>
                </el-card>
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
      home: true,
      url:'',
      filename:'',
      imgUrl: '',
    }
  },
  methods: {
    homeClick(){
      this.home = true;
      this.show = true;
      this.$router.push('/MainPage/Overview');
    },
    parentFn(fromChild){
      this.show = fromChild;
      this.home = fromChild;
      console.log(this.show);
    },
    console(){
      this.$router.push('/ConsolePage')
    },
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
        case '5':
          this.$router.push('/APIText');
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
      this.$router.push('/PersonalPage');
    },
    test(){
      this.axios.post('/downloadTest').then((res)=>{
        console.log(res.data.url);
        // this.itemClick();
        let a = document.createElement('a');
        let url = 'http://192.168.1.109:8443/file/a.jpg';
        console.log(this.url);
        fetch(url).then(res => res.blob()).then(blob => {
          a.href = URL.createObjectURL(blob);
          a.download = 'a.jpg';
          document.body.appendChild(a);
          a.click();
          URL.revokeObjectURL(a.href);
          document.body.removeChild(a);
        });
      }).catch((err)=>{
        console.log(err);
      })
    },
  },
  created(){
    this.imgUrl = window.sessionStorage.getItem('avatar');
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
.avater-button{
  right: 20px;
  font-size: 30px;
  padding: 4px;
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