<template>
  <div class="accounts">
    <Header></Header>
    <ButtonTab :ExpenseType.sync="ExpenseType"></ButtonTab>
    <Labels :labelList="tagList" @update:Tags="getNewTag"></Labels>
    <DateAndRemark></DateAndRemark>
    <div class="BuyOrSell">
      BuyOrSell
    </div>
    <NumberPad></NumberPad>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
import Header from '@/components/money/Header.vue';
import ButtonTab from '@/components/money/ButtonTab.vue';
import Labels from '@/components/money/Labels.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import DateAndRemark from '@/components/money/DateAndRemark.vue';
import defaultTagList from '@/lib/defaultTagList';
@Component({
  components: {Icon,Header,ButtonTab,Labels,NumberPad,DateAndRemark}
})
export default class Money extends Vue {
  ExpenseType='income'
  tagList=defaultTagList
  getNewTag(value: TagList){
    this.tagList.push(value)
  }
}
</script>

<style scoped lang='scss'>
.accounts {
  .BuyOrSell {
    margin: 0 30px;
    background-color: #21B2C1;
    color: #fff;
    text-align: center;
    padding: 3px 0;
    border-radius: 6px;
  }
}
</style>
