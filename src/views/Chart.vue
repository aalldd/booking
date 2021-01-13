<template>
  <Layout>
    <Header name="图表展示"></Header>
    <div class="banner">
      <div class="title">最近30天的收支状况</div>
      <div class="payment">支出:¥{{getAmount('payment')}}</div>
      <div class="income">收入:¥{{getAmount('income')}}</div>
      <div class="budget">预算剩余:¥{{ RestBudget }}</div>
    </div>
    <div class="tips">
      <div class="chartTitle">收支概况</div>
      友情提示:因为图表很长，请滑动来查看所有数据</div>
    <div class="chartWrapper" ref="chartWrapper">
      <Echarts class="charts" :options="option"></Echarts>
    </div>
    <Activity></Activity>
  </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Echarts from './Echarts.vue';
import Layout from '@/components/statistics/Layout.vue';
import _ from 'lodash';
import day from 'dayjs';
import Header from '@/components/money/Header.vue';
import Activity from '@/components/statistics/Activity.vue';

type Record = {
  ExpenseType: string;
  labelList: string[];
  createAt: string;
  remark: string;
  amount: number;
}
@Component({
  components: {Echarts, Layout,Header,Activity},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit('fetchRecordList');
    });
  }
})
export default class Chart extends Vue {
  recordList: Record[] = [];
  budget=0;
  flow=0;
  formatRecord(expenseType: string){
    const today = new Date();
    const array = [];
    const RenderRecord=this.recordList.filter(item=>item.ExpenseType===expenseType)
    for (let i = 0; i <= 29; i++) {
      const dateString = day(today).subtract(i, 'day').format('YYYY-MM-DD');
      const found = _.find(RenderRecord, {createAt: dateString});
      array.push({date: dateString, value: found ? found.amount : 0});
    }
    array.reverse()
    return array
  }
  getAmount(expenseType: string){
    let sum=0
    this.recordList.filter(item=>item.ExpenseType===expenseType).forEach(item=>{
      sum+=item.amount
    })
    return sum
  }
  get RestBudget(){
    return this.budget+this.flow
  }
  get option() {
    const keys=this.formatRecord('income').map(item=>item.date)
    const valuesIncome=this.formatRecord('income').map(item=>item.value)
    const valuesPayment=this.formatRecord('payment').map(item=>item.value)
    return {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['收入', '支出']
      },
      grid: {
        left: 0,
        right: '16px',
        bottom: '16px',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: keys,
        axisLine: {
          lineStyle: {
            color: 'red'  //x轴坐标的颜色
          }
        },
        axisLabel:{
          formatter:function (value: string,index: number){
            return value.substring(5)
          }
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [
        {
          name:'收入',
          type: 'line',
          stack: '收入',
          symbol: 'circle',
          data: valuesIncome
        },
        {
          name:'支出',
          type: 'line',
          stack: '支出',
          symbol: 'circle',
          data: valuesPayment
        }
      ]
    };
  }

  mounted() {
    this.recordList = this.$store.state.recordList;
    this.budget=this.$store.state.budget
    this.flow=this.$store.state.flow
    const div = (this.$refs.chartWrapper as HTMLDivElement);
    div.scrollLeft = div.scrollWidth;
  }

}
</script>

<style scoped lang='scss'>
.chartWrapper {
  overflow: auto;

  .charts {
    width: 420%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
.banner{
  background: rgb(33,178,193);
  background: linear-gradient(132deg, rgba(33,178,193,1) 0%, rgba(112,224,242,1) 100%);  width: 80%;
  border-radius: 10px;
  height: 140px;
  margin: auto;
  color: #fff;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .title{
    font-size: 16px;
  }
  .payment,.income{
    font-size: 14px;
  }
}
.tips{
  margin-top: 30px;
  padding: 0 20px;
  .chartTitle{
    font-size: 18px;
    margin-bottom: 10px;
  }
}
</style>
