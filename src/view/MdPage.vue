<template>
  <div>
    <el-container>
      <el-header>
        <el-button circle class="main-button avater-button" @click="userClick">
          <span class="avater-span">
            <img src="../assets/logo.png" alt="">
          </span>
        </el-button>
      </el-header>
      <el-main>
        <mavon-editor
          v-model="content"
          ref="md"
          @imgAdd="imgAdd"
          @change="change"
          class="meClass"
        />
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default ({
  data() {
    return {
      content: "",
      html:""
    }
  },
  methods: {
    userClick(){
      this.$router.push('/PersonalPage')
    },
    imgAdd(){

    },
    change(){

    }
  },
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
  width: 1900px;
  margin: 0 auto;
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
.meClass{
  width: 80%;
  margin: 40px auto;
  min-height: 800px;
}
</style>