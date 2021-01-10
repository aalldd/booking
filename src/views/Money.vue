<template>
  <div class="accounts">
    <Header></Header>
    <ButtonTab :ExpenseType.sync="ExpenseType"></ButtonTab>
    <Labels
        :labelList="tagList"
        @update:Tags="getNewTag"
        @update:value="setCurrentTag"
    ></Labels>
    <DateAndRemark></DateAndRemark>
    <div class="BuyOrSell">
      BuyOrSell
    </div>
    <NumberPad></NumberPad>
  </div>
</template>

<script lang='ts'>
/* eslint-disable */
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
import Header from '@/components/money/Header.vue';
import ButtonTab from '@/components/money/ButtonTab.vue';
import Labels from '@/components/money/Labels.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import DateAndRemark from '@/components/money/DateAndRemark.vue';
type TagList = {
  tagName: string;
  IconName: string;
}
type Record = {
  ExpenseType: string,
  labelList: string[]
}
@Component({
  components: {Icon, Header, ButtonTab, Labels, NumberPad, DateAndRemark}
})
export default class Money extends Vue {
  ExpenseType = 'income';
  tagList = this.$store.state.tagList;

  created(){
    this.$store.commit('fetchTagList')
  }

  record = {
    ExpenseType: this.ExpenseType,
    labelList: []
  } as Record;

  getNewTag(value: TagList) {
    this.tagList.push(value);
    this.$store.commit('saveTagList')
  }

  //将选中的tag存到record里面
  setCurrentTag(value: string[]) {
    if(this.record.labelList){
      this.record.labelList=[]
    }
    if (value.length) {
      this.record.labelList = value;
    }
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
