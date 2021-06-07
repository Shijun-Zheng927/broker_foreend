<template>
  <div>
    <el-card class="user-info-card">
      <el-row style="padding-left: 30px">
        <h2>修改个人信息</h2>
      </el-row>
      <el-row style="padding-left: 30px">
        <h4>修改头像</h4>
        <el-upload
          class="avatar-uploader"
          :http-request="upAvatar"
          action=""
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-row>
      <el-row style="padding-left: 30px;padding-top: 30px">
        <h4>修改手机号码</h4>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" :rules="rules" ref="formLabelAlign">
          <el-form-item label="修改手机号码" prop="phone">
            <el-input v-model="formLabelAlign.phone" style="width: 300px"></el-input>
          </el-form-item>
          <el-button type="primary" @click="phoneChange('formLabelAlign')">修改</el-button>
        </el-form>
      </el-row>
      <el-row style="padding-left: 30px;padding-top: 30px">
        <h4>修改密码</h4>
        <el-form :label-position="labelPosition" label-width="80px" :model="passwordForm" :rules="rules" ref="passwordForm">
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
			} else if (value !== this.passwordForm.newPass) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
    return {
      imageUrl: '',
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
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
      }
    };
  },
  methods:{
    phoneChange(formName){
      this.$refs[formName].validate((valid) => {
        if(valid) {
          this.axios.post('/setPhone',{
            phone: this.formLabelAlign.phone
          }).then((res)=>{
            if(res.data == '1'){
              this.$message({
                type: 'success',
                message: '修改成功'
              });
              window.sessionStorage.setItem("phone",this.formLabelAlign.phone);
            }else{
              this.$message({
                type: 'error',
                message: '修改失败'
              });
            }
          }).catch((err)=>{
            this.$message({
              type: 'error',
              message: '修改失败'
            });
          });
        }else {
          return false;
        }
      })
    },
    passChange(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
          this.axios.post('/setPassword',{
            password: this.passwordForm.newPass
          }).then((res)=>{
            if(res.data == '1'){
              this.$message({
                type: 'success',
                message: '修改成功'
              });
            }else{
              this.$message({
                type: 'error',
                message: '修改失败'
              });
            }
          }).catch((err)=>{
            this.$message({
              type: 'error',
              message: '修改失败'
            });
          });
        }else {
          return false;
        }
      })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // return isJPG && isLt2M;
    },
    upAvatar(param){
      this.imageUrl = param.file.url;
      var formData = new FormData();
      formData.append("file", param.file);
      this.axios.post("/setHead", formData).then((res) => {
        if (res != null) {
          window.sessionStorage.setItem("avatar",res.data);
          console.log(res.data);
          this.imageUrl = res.data;
          this.$emit('func',res.data);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  },
  created(){
    this.imageUrl = window.sessionStorage.getItem("avatar");
  },
}
</script>

<style scoped>
.user-info-card {
  margin: 40px auto;
  width: 1200px;
}
.avatar-uploader{
  margin-left: 100px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-left: 100px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>