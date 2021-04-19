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
							注册
						</div>
          </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-form" size="">
            <el-form-item label="" prop="phone">
              <el-input v-model="ruleForm.phone" prefix-icon='el-icon-phone-outline' placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="" prop="username">
              <el-input v-model="ruleForm.username" prefix-icon='el-icon-user' placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input type="password" v-model="ruleForm.password" prefix-icon='el-icon-lock' placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" prefix-icon='el-icon-lock' placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item label="" prop="email">
              <el-input v-model="ruleForm.email" prefix-icon='el-icon-message' placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" style="width: 380px;font-size: 15px">注册</el-button>
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
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
		return{
			ruleForm:{
        phone: '',
				username:'',
        password:'',
        checkPass:'',
        email: '',
			},
			rules:{
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
					{ min: 11,max: 11,message:"输入的手机号不合法",trigger:'blur'}
        ],
				username:[
					{ required: true, message: '请输入用户名', trigger: 'blur' },
					{ min: 3,max: 8,message:"长度在3到8个字符",trigger:'blur'}
				],
				password:[
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 3,max: 8,message:"长度在3到8个字符",trigger:'blur'}
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        email: [
          { required: false, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
			}
		}	
  },
  methods:{
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
				if (valid) {
					// alert('submit!');
					console.log(this.ruleForm);
					this.axios.post("/register",{
						phone: this.ruleForm.phone,
						username: this.ruleForm.username,
						password:this.ruleForm.password,
						email: this.ruleForm.email}).then(res =>{
						if(res.data==0){
              this.ruleForm.username='';
              this.$message.error("该用户名已存在")
            }else{
              this.$router.push('/LoginPage');
              this.$message({
                message: '注册成功',
                type: 'success'
              });
            }
					}).catch(err=>{
						console.log(err);
					})
				} else {
					return false;
				}
			});
    }
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
  padding: 85px 60px 25px 60px;
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