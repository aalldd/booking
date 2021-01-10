<template>
  <div class="buttonWrapper">
    <button class="withdraw">Withdraw</button>
    <button class="deposit">Deposit</button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class ButtonGroup extends Vue{
}
</script>

<style scoped lang='scss'>
.buttonWrapper{
  display: flex;
  justify-content: space-between;
  padding: 0 37px;
  margin-top: 20px;
  button{
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 160px;
    height: 32px;
    font-size: 14px;
  }
  .withdraw{
    background-color: #ED7E81;
    color: #fff;
  }
  .deposit{
    background-color: #fff;
    color: #A8A8A8;
  }
}
</style>
