<template>
  <div class="statistics">
    <PersonInfo></PersonInfo>
    <Balance :balance="balance"></Balance>
    <ButtonGroup
        @withdraw="getWithdrawNum"
        :balance="balance"
        @balanceAmount="balanceAmount"
    ></ButtonGroup>
    <Nav :balance="flow"></Nav>
    <Activity></Activity>
    <Layout></Layout>
  </div>
</template>

<script lang='ts'>
/* eslint-disable */
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
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
  recordList = [];
  balance = 0;
  flow=0;
  @Watch("flow")
  onFlowChanged(val: number,oldVal: number){
    let changedVal=val-oldVal
    this.$store.commit('balanceAmount',changedVal)
  }
  //初始化数据
  initData() {
    this.$store.commit('saveBalance');
    this.$store.commit('saveTagList');
    this.$store.commit('saveRecordList');
  }

  created() {
    this.$store.commit('fetchRecordList');
    this.$store.commit('fetchBalance');
    this.$store.commit('fetchFlow')
    this.recordList = this.$store.state.recordList;
    this.balance = this.$store.state.balance;
    this.flow=this.$store.state.flow
  }
  //取钱
  getWithdrawNum(value: number) {
    this.$store.commit('withdrawBalance', value);
    this.balance = this.$store.state.balance;
  }
  //存钱
  balanceAmount(value: number) {
    console.log(value);
    this.$store.commit('balanceAmount', value);
    this.balance = this.$store.state.balance;
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
