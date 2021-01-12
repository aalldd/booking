<template>
  <div class="buttonGroup">
    <div class="income" :class="{['active']:ExpenseType==='income'}">
      <button @click="$emit('update:ExpenseType','income')">收入</button>
    </div>
    <div class="payment" :class="{['active']:ExpenseType==='payment'}">
      <button @click="$emit('update:ExpenseType','payment')">支出</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class ButtonTab extends Vue {
  @Prop({default: 'income'}) readonly ExpenseType!: string;
}
</script>

<style scoped lang='scss'>
$TabsColor:#F6F7F9;
.buttonGroup {
  margin: 0 30px;
  height: 54px;
  background-color: darken($TabsColor,5%);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6C718F;

  .income, .payment {
    flex: 1;
    text-align: center;

    button {
      width: 100%;
      height: 100%;
      border: none;
      background-color: inherit;
    }
  }

  .active {
    width: 40%;
    background-color: #fff;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    margin: 0 10px;

    button {
      border-radius: 10px;
    }
  }
}
</style>
