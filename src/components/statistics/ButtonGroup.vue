<template>
  <div class="buttonWrapper">
    <button class="withdraw" @click="withdraw">撤回预算</button>
    <button class="balance" @click="balanceAmount">增加预算</button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class ButtonGroup extends Vue {
  @Prop({required: true}) balance!: number;

  withdraw() {
    const withdrawNum = window.prompt('您想要撤回多少预算呢');
    if (withdrawNum) {
      const withdrawAcc = parseFloat(withdrawNum);
      if (withdrawAcc > this.balance) {
        window.alert('你以为可以花呗借款呢，撤回的金额不能大于存款');
      } else if (withdrawAcc < 0) {
        window.alert('你是要存钱还是取钱？不要跟爸爸闹');
      } else {
        this.$emit('withdraw', withdrawAcc);
      }
    } else {
      window.alert('请不要跟我闹，输入撤回的金额');
    }
  }
  balanceAmount(){
    const value=window.prompt('请出入您要存款的金额')
    if(value){
      const balanceAcc=parseFloat(value)
      if(balanceAcc<0){
        window.alert('你是要存款还是取钱，不要钻空子')
      }else {
        this.$emit('balanceAmount',balanceAcc)
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.buttonWrapper {
  display: flex;
  justify-content: space-between;
  padding: 0 37px;
  margin-top: 20px;

  button {
    border-radius: 10px;
    border: 1px solid #ccc;
    max-width: 160px;
    min-width: 120px;
    height: 32px;
    font-size: 14px;
  }

  .withdraw {
    background-color: #ED7E81;
    color: #fff;
  }

  .balance {
    background-color: #fff;
    color: #A8A8A8;
  }
}
</style>
