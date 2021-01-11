<template>
  <div class="balance">
    <div class="budget">
      <h5>预算值</h5>
      <div class="amount-total">${{ budget }}</div>
    </div>
    <div class="balance-left">
      <h5>剩余值</h5>
      <div class="balance-amount">${{ balance }}</div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Balance extends Vue {
  @Prop({default: 0}) budget: number | undefined;
  flow = 0;

  mounted() {
    this.$store.commit('fetchFlow');
    this.flow = this.$store.state.flow;
  }

  get balance() {
    if (this.budget) {
      const res = this.budget + this.$store.state.flow;
      return res;
    } else {
      return 0;
    }
  }
}
</script>

<style scoped lang='scss'>
.balance {
  margin-top: 40px;
  padding: 0 37px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h5 {
    font-size: 12px;
    color: #A8A8A8;
  }

  .amount-total, .balance-amount {
    font-size: 16px;
    color: #000;
    font-weight: bold;
  }
}
</style>
