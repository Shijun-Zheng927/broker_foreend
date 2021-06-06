<template>
  <div>
    <el-container>
      <el-header>
        <el-button icon="el-icon-s-home" circle @click="homeClick" style="color: aliceblue" class="main-button"></el-button>
        <el-button @click="console" icon="el-icon-bank-card" circle style="color: aliceblue" class="console-button" title="控制台"></el-button>
        <el-button circle class="main-button avater-button" @click="userClick">
          <span class="avater-span">
            <img :src="imgUrl" alt="">
          </span>
        </el-button>
      </el-header>
      <el-main>
        <div class="aside">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="openDirec"
            @close="closeDirec"
            @select="handleSelect"
            >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">概述</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>桶操作</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">创建桶</el-menu-item>
                <el-menu-item index="2-2">列举所有桶</el-menu-item>
                <el-menu-item index="2-3">判断桶是否存在</el-menu-item>
                <el-menu-item index="2-4">获取桶的地域</el-menu-item>
                <el-menu-item index="2-5">获取桶的信息</el-menu-item>
                <el-menu-item index="2-6">获取桶的访问权限</el-menu-item>
                <el-menu-item index="2-7">设置桶的访问权限</el-menu-item>
                <el-menu-item index="2-8">删除桶</el-menu-item>
                <el-menu-item index="2-9">列举查找桶（类型1）</el-menu-item>
                <el-menu-item index="2-10">清单设置（类型1）</el-menu-item>
                <el-menu-item index="2-11">设置桶策略（类型2）</el-menu-item>
                <el-menu-item index="2-12">获取桶策略（类型2）</el-menu-item>
                <el-menu-item index="2-13">删除桶策略（类型2）</el-menu-item>
                <el-menu-item index="2-14">获取桶存量信息（类型2）</el-menu-item>
                <el-menu-item index="2-15">设置桶配额（类型2）</el-menu-item>
                <el-menu-item index="2-16">获取桶配额（类型2）</el-menu-item>
                <el-menu-item index="2-17">设置桶存储类型（类型2）</el-menu-item>
                <el-menu-item index="2-18">获取桶存储类型（类型2）</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>上传操作</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">上传字符串</el-menu-item>
                <el-menu-item index="3-2">上传网络流</el-menu-item>
                <el-menu-item index="3-3">上传文件流</el-menu-item>
                <el-menu-item index="3-4">文件上传</el-menu-item>
                <el-menu-item index="3-5">追加上传流（第一次）</el-menu-item>
                <el-menu-item index="3-6">追加上传流（第二次及以后）</el-menu-item>
                <el-menu-item index="3-7">追加上传文件（第一次）</el-menu-item>
                <el-menu-item index="3-8">追加上传文件（第二次及以后）</el-menu-item>
                <el-menu-item index="3-9">断点续传</el-menu-item>
                <el-menu-item index="3-10">分片上传</el-menu-item>
                <el-menu-item index="3-11">取消分片上传</el-menu-item>
                <el-menu-item index="3-12">简单列举所有已上传分片</el-menu-item>
                <el-menu-item index="3-13">列举所有已上传分片</el-menu-item>
                <el-menu-item index="3-14">简单列举分片上传事件</el-menu-item>
                <el-menu-item index="3-15">分页列举所有上传事件</el-menu-item>
                <el-menu-item index="3-16">上传Byte数组（类型1）</el-menu-item>
                <el-menu-item index="3-17">分页列举已上传分片（类型1）</el-menu-item>
                <el-menu-item index="3-18">列举全部分片上传事件（类型1）</el-menu-item>
                <el-menu-item index="3-19">创建文件夹</el-menu-item>
                <el-menu-item index="3-20">分段上传初始化（类型2）</el-menu-item>
                <el-menu-item index="3-21">合并分段上传（类型2）</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>下载操作</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">流式下载</el-menu-item>
                <el-menu-item index="4-2">范围下载</el-menu-item>
                <el-menu-item index="4-3">断点续传下载</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>日志操作</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">开启桶日志</el-menu-item>
                <el-menu-item index="5-2">查看桶日志</el-menu-item>
                <el-menu-item index="5-3">关闭桶日志</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>对象操作</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="6-1">判断对象是否存在</el-menu-item>
                <el-menu-item index="6-2">列举对象</el-menu-item>
                <el-menu-item index="6-3">列举指定数目对象</el-menu-item>
                <el-menu-item index="6-4">列举指定前缀对象</el-menu-item>
                <el-menu-item index="6-5">列举指定前缀和数目对象</el-menu-item>
                <el-menu-item index="6-6">分页列举全部对象</el-menu-item>
                <el-menu-item index="6-7">列举文件夹中对象</el-menu-item>
                <el-menu-item index="6-8">删除对象</el-menu-item>
                <el-menu-item index="6-9">复制对象</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>标签操作</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="7-1">设置桶标签</el-menu-item>
                <el-menu-item index="7-2">获取桶标签</el-menu-item>
                <el-menu-item index="7-3">根据标签获取桶</el-menu-item>
                <el-menu-item index="7-4">删除标签</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
        <div class="content">
          <!-- <router-view @func="getMsgFromSon"></router-view> -->
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default ({
  data(){
    return{
      imgUrl:'',
    }
  },
  methods: {
    homeClick(){
      this.$router.push('/MainPage/Overview')
    },
    handleSelect(key, keyPath) {
      switch(key){
        case '1':
          this.$router.push('/APIText/APIOverview');
          break;
        case '2-1':
          this.$router.push('/APIText/CreateBucket');
          break;
        case '2-2':
          this.$router.push('/APIText/ListAllBucket');
          break;
        case '2-3':
          this.$router.push('/APIText/DoesBucketExist');
          break;
        case '2-4':
          this.$router.push('/APIText/GetBucketLocation');
          break;
        case '2-5':
          this.$router.push('/APIText/GetBucketInfo');
          break;
        case '2-6':
          this.$router.push('/APIText/GetBucketAcl');
          break;
        case '2-7':
          this.$router.push('/APIText/SetBucketAcl');
          break;
        case '2-8':
          this.$router.push('/APIText/DeleteBucket');
          break;
        case '2-9':
          this.$router.push('/APIText/ListRequestBucket');
          break;
        case '2-10':
          this.$router.push('/APIText/SetBucketInventory');
          break;
        case '2-11':
          this.$router.push('/APIText/SetBucketPolicy');
          break;
        case '2-12':
          this.$router.push('/APIText/GetBucketPolicy');
          break;
        case '2-13':
          this.$router.push('/APIText/DeleteBucketPolicy');
          break;
        case '2-14':
          this.$router.push('/APIText/GetBucketStorageInfo');
          break;
        case '2-15':
          this.$router.push('/APIText/SetBucketQuota');
          break;
        case '2-16':
          this.$router.push('/APIText/GetBucketQuota');
          break;
        case '2-17':
          this.$router.push('/APIText/SetBucketStoragePolicy');
          break;
        case '2-18':
          this.$router.push('/APIText/GetBucketStorageClass');
          break;
        case '3-1':
          this.$router.push('/APIText/PutString');
          break;
        case '3-2':
          this.$router.push('/APIText/PutStream');
          break;
        case '3-3':
          this.$router.push('/APIText/PutFileStream');
          break;
        case '3-4':
          this.$router.push('/APIText/PutFile');
          break;
        case '3-5':
          this.$router.push('/APIText/AppendObjectStreamFirst');
          break;
        case '3-6':
          this.$router.push('/APIText/AppendObjectStream');
          break;
        case '3-7':
          this.$router.push('/APIText/AppendObjectFileFirst');
          break;
        case '3-8':
          this.$router.push('/APIText/AppendObjectFile');
          break;
        case '3-9':
          this.$router.push('/APIText/CheckPointUpload');
          break;
        case '3-10':
          this.$router.push('/APIText/MultipartUpload');
          break;
        case '3-11':
          this.$router.push('/APIText/AbortMultipartUpload');
          break;
        case '3-12':
          this.$router.push('/APIText/SimpleListParts');
          break;
        case '3-13':
          this.$router.push('/APIText/ListPartsAll');
          break;
        case '3-14':
          this.$router.push('/APIText/SimpleListMultipartUploads');
          break;
        case '3-15':
          this.$router.push('/APIText/ListMultipartUploadsBP');
          break;
        case '3-16':
          this.$router.push('/APIText/PutBytes');
          break;
        case '3-17':
          this.$router.push('/APIText/ListPartsByPaper');
          break;
        case '3-18':
          this.$router.push('/APIText/ListMultipartUploads');
          break;
        case '3-19':
          this.$router.push('/APIText/CreateFolder');
          break;
        case '3-20':
          this.$router.push('/APIText/InitMultipartUpload');
          break;
        case '3-21':
          this.$router.push('/APIText/CompMultipartUpload');
          break;
        case '4-1':
          this.$router.push('/APIText/StreamDownload');
          break;
        case '4-2':
          this.$router.push('/APIText/RangeDownload');
          break;
        case '4-3':
          this.$router.push('/APIText/CheckPointDownload');
          break;
        case '5-1':
          this.$router.push('/APIText/OpenBucketLog');
          break;
        case '5-2':
          this.$router.push('/APIText/GetBucketLog');
          break;
        case '5-3':
          this.$router.push('/APIText/CloseBucketLog');
          break;
        case '6-1':
          this.$router.push('/APIText/IfObjectExist');
          break;
        case '6-2':
          this.$router.push('/APIText/SimpleList');
          break;
        case '6-3':
          this.$router.push('/APIText/SimpleListWithNum');
          break;
        case '6-4':
          this.$router.push('/APIText/SimpleListWithPrefix');
          break;
        case '6-5':
          this.$router.push('/APIText/SimpleListWithNP');
          break;
        case '6-6':
          this.$router.push('/APIText/PagingList');
          break;
        case '6-7':
          this.$router.push('/APIText/PagingListWithPrefix');
          break;
        case '6-8':
          this.$router.push('/APIText/DeleteObject');
          break;
        case '6-9':
          this.$router.push('/APIText/CopyObject');
          break;
        case '7-1':
          this.$router.push('/APIText/SetBucketTag');
          break;
        case '7-2':
          this.$router.push('/APIText/GetBucketTag');
          break;
        case '7-3':
          this.$router.push('/APIText/ListBucketByTag');
          break;
        case '7-4':
          this.$router.push('/APIText/DeleteBucketTag');
          break;
      }
    },
    userClick(){
      this.$router.push('/PersonalPage')
    },
    console(){
      this.$router.push('/ConsolePage')
    },
    // getMsgFromSon(data){
    //   this.imgUrl = data;
    // },
    openDirec(key, keyPath) {
      console.log(key, keyPath);
    },
    closeDirec(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created(){
    this.imgUrl = window.sessionStorage.getItem('avatar');
  }
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
  width: 1920px;
}
</style>

<style scoped>
.aside{
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  width: 300px;
  overflow-y: scroll;
}
.content{
  position: absolute;
  left: 300px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
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
.console-button{
  right: 80px;
  font-size: 25px;
  padding: 4px;
  background-color: rgba(255,0,0,0);
  border: 0px;
  width: 45px;
  height: 45px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
.console-button:active {
  background-color: rgba(255,0,0,0);
}
.console-button:hover {
  background-color: rgba(221, 221, 221, 0.459);
}
</style>