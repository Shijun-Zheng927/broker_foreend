<template>
  <div>
    <el-card class="tem-card">
      <el-row style="padding-left: 30px">
        <h2>概述</h2>
      </el-row>
      <p class="p-txt">该部分对本平台提供的API进行说明，并提供实际例子可用于测试，您将看到请求测试的结果。</p>
      <p class="p-txt">所选项包括“（类型1）”、“（类型2）”时，表示该接口仅适合您所订阅的类型1或者2的产品。同时部分接口所需参数不同类产品有些许不同，您可通过查看具体内容得知。</p>
      <p class="p-txt">部分上传操作需要填写文件类型，您可通过<a href="https://tool.oschina.net/commons">文件类型</a>进行查找。</p>
      <p class="p-txt">特别说明：对于类型2产品进行追加上传文件对象时，需要先初始化，再多次上传文件（一次上传10M），最后需进行合并操作。</p>
    </el-card>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.tem-card{
  width: 1200px;
  margin: 40px auto;
}
.p-txt{
  margin-left: 30px;
  margin-right: 30px;
  text-indent: 2em;
  font-size: 18px;
}
</style>