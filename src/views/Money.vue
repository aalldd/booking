<template>
  <div class="accounts">
    <Header></Header>
    <ButtonTab :ExpenseType="record.ExpenseType" @update:ExpenseType="getExpenseType"></ButtonTab>
    <Labels
        :labelList="tagList"
        @update:Tags="getNewTag"
        @update:value="setCurrentTag"
    ></Labels>
    <DateAndRemark
        :create-at="record.createAt"
        @update-createAt="setCreateAt"
        @giveRemark="getRemark"
    ></DateAndRemark>
    <div class="BuyOrSell" @click="submitRecords">
      BuyOrSell
    </div>
    <NumberPad @giveNumber="getAmount"></NumberPad>
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
import dayjs from 'dayjs';

type TagList = {
  tagName: string;
  IconName: string;
}
type Record = {
  ExpenseType: string,
  labelList: string[],
  createAt: string,
  remark: string,
  amount: number
}
@Component({
  components: {Icon, Header, ButtonTab, Labels, NumberPad, DateAndRemark}
})
export default class Money extends Vue {
  tagList: TagList[] = [];

  mounted() {
    this.$store.commit('fetchTagList');
    this.tagList = this.$store.state.tagList;
  }

  record = {
    ExpenseType: 'income',
    labelList: [],
    createAt: dayjs(new Date().toISOString()).format('YYYY-MM-DD'),
    remark: '',
    amount: 0
  } as Record;
  getExpenseType(value: string){
    if(value){
      this.record.ExpenseType=value
    }
  }

  getNewTag(value: TagList) {
    this.tagList.push(value);
    this.$store.commit('saveTagList');
  }

  //将选中的tag存到record里面
  setCurrentTag(value: string[]) {
    if (this.record.labelList) {
      this.record.labelList = [];
    }
    if (value.length) {
      this.record.labelList = value;
    }
  }

//  将日期保存到record里面
  setCreateAt(value: string){
    if(value){
      this.record.createAt=value
    }
  }
//  获取备注信息
  getRemark(value: string){
    if(value){
      this.record.remark=value
    }
  }
//  拿到金钱数据
  getAmount(value: number){
    if(value){
      this.record.amount=value
    }
  }
//  将record数据放到state中
  submitRecords(){
    if(this.record.ExpenseType&&this.record.createAt&&this.record.amount){
      this.$store.commit('createRecord',this.record)
    }else {
      window.alert('请输入开销类型,金额,日期')
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
