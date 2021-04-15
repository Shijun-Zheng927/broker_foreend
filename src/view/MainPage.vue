<template>
  <div>
    <el-container>
      <el-header>
        <el-button v-if="show" icon="el-icon-s-fold" circle @click="menuClick"></el-button>
        <el-button v-if="!show" icon="el-icon-s-unfold" circle @click="menuClick"></el-button>
        <el-button circle class="avater-button">
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
                  @close="handleClose">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                      <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                  </el-menu-item>
                  <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                  </el-menu-item>
                  <div class="aside-padding"></div>
                </el-menu>
              </div>
            </transition>
          </div>
          <div class="content">
            Main
          </div>
          <div class="help-aside">
            <transition name="el-zoom-in-center">
              <div v-show="!show">
                help
              </div>
            </transition>
          </div>
        </div>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
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
    menuClick(evt){
      console.log("111")
      this.show = !this.show;
      let target = evt.target;
      if(target.nodeName == "I"){
          target = evt.target.parentNode;
      }
      target.blur();
    }
  }
})
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
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
}
.el-button {
  background-color: rgba(255,0,0,0);
  border: 0px;
  width: 45px;
  height: 45px;
  font-size: 20px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
.el-button:active {
  background-color: rgba(255,0,0,0);
}
</style>

<style scoped>
.main{
  width: 1800px;
  height: 900px;
}
.aside{
  float: left;
  width: 15%;
  height: 100%;
}
.content{
  float: left;
  width: 85%;
}
.help-aside{
  float: left;
  width: 15%;
}
.aside-padding{
  width: 100%;
  height: 800px;
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
</style>