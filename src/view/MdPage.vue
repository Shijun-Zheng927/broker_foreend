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
        <div class="name-div">
          请输入文档名称：
          <el-input v-model="name" class="name-input"></el-input>
        </div>
        <mavon-editor
          v-model="content"
          ref="md"
          @imgAdd="imgAdd"
          @change="change"
          class="meClass"
        />
        <div style="margin: 0 auto;width: 70px;height: 200px">
          <el-button type="primary" @click="upIntroduction">提交</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      content: '', // 输入的markdown
      html: '', // 及时转的html
    }
  },
  methods: {
    // userClick(){
    //   this.$router.push('/PersonalPage')
    // },
    imgAdd(pos, file){
      var formData = new FormData();
      formData.append("file", file);
      console.log(formData.getAll("file"));
      this.axios({
        url: "/uploadImg",
        data: formData,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        console.log(res.data);
        this.$refs.md.$img2Url(pos, res.data);
      });
    },
    change(value, render) {
      this.html = render;
    },
    upIntroduction(){
      this.$confirm('确认提交吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '提交成功!'
        });
        this.axios
          .post("/uploadIntroduce", {
            file: this.html,
            name: this.name,
          })
          .then((res) => {
            this.name = '';
            this.content = '';
            this.html = '';
          });
        // this.axios.get("/getIntroduceName",{params:{name: this.name}})
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消提交'
        });          
      });
    }
  },
}
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
.name-input {
  width: 400px;
  margin-left: 20px;
}
.name-div {
  width: 80%;
  margin: 40px auto;
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
.meClass{
  width: 80%;
  margin: 40px auto;
  min-height: 800px;
}
</style>