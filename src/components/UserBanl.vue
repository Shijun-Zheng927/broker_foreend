<template>
  <div>
    <el-card class="user-banl-card">
      <el-row style="padding-left: 30px">
        <h2>余额</h2>
      </el-row>
      <el-row style="padding-left: 30px">
        <span class="banl-value">账户余额：￥{{banlance}}</span>
      </el-row>
      <el-row style="padding-left: 30px; margin-top: 30px">
        <h2>充值</h2>
      </el-row>
      <el-row style="padding-left: 30px;padding-bottom: 30px">
        <el-input-number v-model="num" @change="numChange" :min="1" :max="100" label="金额"></el-input-number>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <el-button type="primary" @click="recharge">充值</el-button>
      </el-row>
    </el-card>
    <el-card class="record-card">
      <el-row style="padding-left: 30px">
        <h2>充值记录</h2>
      </el-row>
      <el-table
        :data="tableData"
        stripe
        style="width: 1100px;margin: 20px auto">
        <el-table-column 
          prop="time"
          label="时间" 
          width="300">
        </el-table-column>
        <el-table-column
          prop="money"
          label="金额">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banlance: '0',
      num: 1,
      tableData: [{
        time: '20001201',
        money: '5000'
      }]
    }
  },
  methods: {
    recharge(){
      window.open('http://192.168.1.109:8443/alipay?amount='+this.num+'&token='+window.sessionStorage.getItem('phone'));
    },
    numChange(value){
      console.log(value);
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
.record-card {
  margin: 40px auto;
  width: 1200px;
}
</style>