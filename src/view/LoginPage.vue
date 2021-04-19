<template>
  <div class="loginPage">
    <div class="loginFormDiv">
      <el-row>
        <el-col :span="12">
          <div class="login-img">
						<div class="web-name">
							<i class="el-icon-cloudy" style="font-size: 40px;float: left;"></i>
							<div class="name-div">
								&nbsp;&nbsp;云服务broker
							</div>
						</div>
						<br/>
						<div class="web-infor">
							打破品牌限制
						</div>
					</div>
        </el-col>
        <el-col :span="12">
          <div class="form-header">
						<div class="header-login">
							登录
						</div>
						<div class="register-a-div">
							<router-link to="/RegisterPage" class="register-a">点此注册</router-link>
						</div>
          </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-form" size="">
            <el-form-item label="" prop="phone">
              <el-input v-model="ruleForm.phone" prefix-icon='el-icon-phone-outline' placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input type="password" v-model="ruleForm.password" prefix-icon='el-icon-lock' placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" style="width: 380px;font-size: 15px">登录</el-button>
              <!-- <el-button type="primary" @click="add">注册</el-button> -->
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
	name: "login",
	data(){
		return{
			ruleForm:{
				phone:'',
				password:''
			},
			rules:{
				phone:[
					{ required: true, message: '请输入手机号', trigger: 'blur' }
				],
				password:[
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			}
		}	
	},
	methods:{
		add(){
			this.$router.push('/register');
		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					// alert('submit!');
					// console.log(this.ruleForm);
					this.axios.post("/login",this.ruleForm).then(res =>{
						console.log(res);
						if(res.data.phone==null){
							this.$message.error("账号或密码错误");
						}else{
							window.sessionStorage.setItem("token",res.data.token);
							window.sessionStorage.setItem("phone",this.ruleForm.phone);
							window.sessionStorage.setItem("avatar",res.data.avatar);
							this.$router.push('/MainPage')
						}
					}).catch(err=>{
						console.log(err);
					})
				} else {
					return false;
				}
			});
		},
	}
};
</script>

<style scoped>
.loginPage{
	position: absolute;
	width: 100%;
	height: 100%;
	background: url(../assets/background.jpg) center 0 no-repeat;
	background-size: cover;
	background-attachment: fixed;
}
.web-name{
	padding: 100px 60px 0 60px;
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	color: aliceblue;
}
.name-div{
	float: left;
	font-size: 25px;
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	color: aliceblue;
	height: 40px;
	line-height: 40px;
}
.web-infor{
	padding: 30px 60px 0 60px;
	font-size: 20px;
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	color: aliceblue;
}
.login-img{
  width: 100%;
  height: 570px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	background: #409EFF;
}
.form-header{
  padding: 170px 60px 25px 60px;
}
.header-login{
	float: left;
	font-size: 25px;
  font-weight: bold;
	padding-right: 260px;
}
.register-a-div{
	float: left;
	line-height: 33px;
	font-size: 15px;
}
.register-a{
	float: left;
}
.register-a:link{
	color: blue;
	text-decoration: none;
}
.register-a:visited{
	color: blue;
}
.register-a:hover{
	color: #409EFF;
	text-decoration: none;
}
.login-form{
  padding: 30px 60px 0 60px;
}
.loginFormDiv{
	background-color: rgb(255, 255, 255, 0.8);
	/* width: 350px;
	padding: 70px 95px 30px 0px; */
  width: 1000px;
  height: 570px;
	border-radius: 10px;
	top: 50%;
	left: 50%;
	position: absolute;
	transform: translate(-50%,-50%);
	box-shadow:rgba(0,0,0,.3) 0px 0px 15px;
}
</style>