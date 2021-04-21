<template>
  <div>
    <el-card class="user-info-card">
      <el-row style="padding-left: 30px">
        <h2>修改个人信息</h2>
      </el-row>
      <el-row style="padding-left: 30px">
        <h4>手机</h4>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" :rules="rules" ref="formLabelAlign">
          <el-form-item label="修改手机" prop="phone">
            <el-input v-model="formLabelAlign.phone" style="width: 300px"></el-input>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <el-button type="primary" @click="phoneChange('formLabelAlign')">修改</el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row style="padding-left: 30px;padding-top: 30px">
        <h4>密码</h4>
        <el-form :label-position="labelPosition" label-width="80px" :model="passwordForm" :rules="rules" ref="passwordForm">
          <el-form-item label="原密码" prop="oldPass">
            <el-input v-model="passwordForm.oldPass" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPass">
            <el-input v-model="passwordForm.newPass" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confPass">
            <el-input v-model="passwordForm.confPass" style="width: 300px"></el-input>
          </el-form-item>
          <el-button type="primary" @click="passChange('passwordForm')">修改</el-button>
        </el-form>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.ruleForm.password) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
    return {
      labelPosition: 'top',
      formLabelAlign: {
        phone: '',
        region: '',
        type: ''
      },
      passwordForm: {
        oldPass: '',
        newPass: '',
        confPass: '',
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur'},
					{ min: 11,max: 11,message:"输入的手机号不合法", trigger: 'blur'}
        ],
        oldPass:[
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 3,max: 8,message:"长度在3到8个字符",trigger:'blur'}
        ],
        newPass:[
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 3,max: 8,message:"长度在3到8个字符",trigger:'blur'}
        ],
        confPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    };
  },
  methods:{
    phoneChange(formName){
      this.$refs[formName].validate((valid) => {
        if(valid) {

        }else {
          return false;
        }
      })
    },
    passChange(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {

        }else {
          return false;
        }
      })
    }
  }
}
</script>

<style scoped>
.user-info-card {
  margin: 40px auto;
  width: 1200px;
}
</style>