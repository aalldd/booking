<template>
  <div class="numberPad">
    <div class="field">
      <input type="text" :value="value" placeholder="please hold on amount">
    </div>
    <van-number-keyboard
        v-model="value"
        :show="true"
        :maxlength="14"
        extra-key="."
        @blur="setAmount"
    />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class NumberPad extends Vue{
  value = '';
  setAmount(value: number){
    if(this.value){
      this.$emit('giveNumber',this.value)
      window.alert('金额填写完成！')
      this.value=''
    }
  }
}
</script>

<style scoped lang='scss'>
.numberPad {
  .field {
    border: 1px solid #ccc;
    margin: 20px 30px;
    border-radius: 6px;
    padding: 4px 0;
    background-color: #E9F7F9;

    input {
      width: 100%;
      border: none;
      outline: none;
      background-color: inherit;
      text-align: center;
      color: #21B2C1;
    }
  }

  .van-number-keyboard {
    z-index: 0;
  }
}
</style>
