<template>
  <div>
    <el-card class="user-banl-card">
      <el-row style="padding-left: 30px">
        <h2>余额</h2>
      </el-row>
      <el-row style="padding-left: 30px">
        <span class="banl-value">账户余额：￥{{banlance}}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <el-button type="primary" @click="recharge">充值</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banlance: '0',
    }
  },
  methods: {
    recharge(){

    }
  },
  created() {
    this.axios.post("/getAccount").then((res) => {
      this.banlance = res.data;
    })
  }
}
</script>

<style scoped>
.user-banl-card {
  margin: 40px auto;
  width: 1200px;
}
.banl-value {
  font-size: 20px;
}
</style>