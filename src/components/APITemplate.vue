<template>
  <div>
    <el-card class="tem-card">
      <div class="tem-content-div">
        <el-row>
          <h2>概述</h2>
        </el-row>
        <slot name="md"></slot>
      </div>
    </el-card>

    <el-card class="tem-card">
      <div class="tem-content-div">
        <el-row>
          <h2>示例</h2>
          <h1>&nbsp;</h1>
          <h3>请求</h3>
        </el-row>
        <div class="tem-form-div">
          <slot name="form"></slot>
        </div>
        <div class="tem-button-div">
          <slot name="button"></slot>
        </div>
        <el-row>
          <h1>&nbsp;</h1>
          <h3>响应</h3>
        </el-row>
        <div class="tem-response-div">
          <slot name="response"></slot>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'api-template',
}
</script>

<style>
.tem-md {
  width: 90%;
  margin: 20px auto;
  border: none !important;
}
.tem-card{
  width: 1200px;
  margin: 40px auto;
}
.tem-content-div{
  padding: 0 30px 0 30px;
}
.tem-form-div{
  width: 800px;
  margin: 0 auto;
}
.tem-button-div{
  width: 100%;
  text-align: center;
}
.tem-response-div{
  width: 75%;
  font-size: 18px;
  margin: 30px auto;
  word-wrap:break-word;
}
.upload-rec {
  padding-left: 150px;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>