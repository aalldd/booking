<template>
  <div class="balance">
    <h5>balance</h5>
    <div class="amount-total">${{ balance }}</div>
    <h5>deposit</h5>
    <div class="amount-total">${{ balance }}</div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Balance extends Vue {
  @Prop({default:0}) balance: number | undefined;
}
</script>

<style scoped lang='scss'>
.balance {
  margin-top: 40px;
  padding-left: 37px;
  h5 {
    font-size: 12px;
    color: #A8A8A8;
  }

  .amount-total {
    font-size: 16px;
    color: #000;
    font-weight: bold;
  }
}
</style>
