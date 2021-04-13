<template>
  <div>
    <el-button @click="show = !show">click</el-button>
    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show">
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import Vue from 'vue'
Vue.component(CollapseTransition.name, CollapseTransition)
export default ({
  data: () => ({
    show: true
  })
})
</script>

<style scoped>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>