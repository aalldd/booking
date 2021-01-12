<template>
  <div class="nav">
    <div class="staking">资金流水</div>
    <div class="amount-staking">¥{{balance}}</div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
  @Prop({required: true}) balance!: number;
}
</script>

<style scoped lang='scss'>
.nav {
  padding: 33px;
  margin: 14px 37px 0;
  background: rgb(190, 101, 153);
  background: linear-gradient(45deg, rgba(190, 101, 153, 1) 0%, rgba(224, 172, 202, 1) 100%);
  border-radius: 10px;
  min-height: 120px;

  .staking {
    color: #A8A8A8;
  }

  .amount-staking {
    margin-top: 9px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
