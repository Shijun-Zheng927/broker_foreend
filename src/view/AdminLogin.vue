<template>
  <div class="loginPage">
    <div class="loginForm">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="" prop="adminName">
          <el-input v-model="ruleForm.adminName" prefix-icon='el-icon-user' placeholder="请输入用户名"></el-input>
        </el-form-item>
				<el-form-item label="" prop="password">
          <el-input type="password" v-model="ruleForm.password" prefix-icon='el-icon-lock' placeholder="请输入密码"></el-input>
        </el-form-item>
				<el-form-item>
					<div class="buttonPadding"></div>
    			<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
  			</el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
	name: "login",
	data(){
		return{
			ruleForm:{
				adminName:'',
				password:''
			},
			rules:{
				adminName:[
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				password:[
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			}
		}	
	},
	methods:{
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					// console.log(this.ruleForm);
					// this.axios.post("/adminLogin",this.ruleForm).then(res =>{
					// 	if(res.data.flag=='fail'){
					// 		this.$message.error("账号或密码错误");
					// 	}else{
					// 		window.sessionStorage.setItem("token",res.data.token);
					// 		window.sessionStorage.setItem("adminName",this.ruleForm.adminName);
					// 		this.$router.push('/adminhome')
					// 	}
					// }).catch(err=>{
					// 	console.log(err);
					// })
          this.$router.push('/MdPage')
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
	background:#409eff;
}
.loginForm{
	background-color: rgb(255, 255, 255, 0.8);
	width: 350px;
	padding: 70px 95px 30px 0px;
	border-radius: 10px;
	top: 50%;
	left: 50%;
	position: absolute;
	transform: translate(-50%,-50%);
}
.buttonPadding{
	float: left;
	width: 90px;
	height: 40px;
}
</style>