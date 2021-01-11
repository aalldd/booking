<template>
  <div class="statistics">
    <PersonInfo></PersonInfo>
    <Balance :deposit="deposit"></Balance>
    <ButtonGroup
        @withdraw="getWithdrawNum"
        :deposit="deposit"
        @depositAmount="depositAmount"
    ></ButtonGroup>
    <Nav :balance="deposit"></Nav>
    <Activity></Activity>
    <Layout></Layout>
  </div>
</template>

<script lang='ts'>
/* eslint-disable */
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import PersonInfo from '@/components/statistics/PersonInfo.vue';
import Balance from '@/components/statistics/Balance.vue';
import ButtonGroup from '@/components/statistics/ButtonGroup.vue';
import Nav from '@/components/statistics/Nav.vue';
import Activity from '@/components/statistics/Activity.vue';
import Layout from '@/components/statistics/Layout.vue';

@Component({
  components: {PersonInfo, Balance, ButtonGroup, Nav, Activity, Layout}
})
export default class statistics extends Vue {
  recordList=[]
  deposit=0
  //初始化数据
  initData(){
    this.$store.commit('saveDeposit')
    this.$store.commit('saveTagList')
    this.$store.commit('saveRecordList')
  }
  created(){
    this.initData()
    this.$store.commit('fetchRecordList')
    this.$store.commit('fetchDeposit')
    this.recordList=this.$store.state.recordList
    this.deposit=this.$store.state.deposit
  }
  getWithdrawNum(value: number){
    this.$store.commit('withdrawDeposit',value)
    this.deposit=this.$store.state.deposit
  }
  depositAmount(value: number){
    this.$store.commit('depositAmount',value)
    this.deposit=this.$store.state.deposit
  }
}
</script>

<style scoped lang='scss'>
.statistics {
  position: relative;
  min-height: 100vh;
  background-color: #F7FAFD;
}
</style>
