<template>
  <Layout>
    <div class="chartWrapper" ref="chartWrapper">
      <Echarts class="charts" :options="option"></Echarts>
    </div>
  </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Echarts from './Echarts.vue';
import Layout from '@/components/statistics/Layout.vue';
import _ from 'lodash';
import day from 'dayjs';

type Record = {
  ExpenseType: string;
  labelList: string[];
  createAt: string;
  remark: string;
  amount: number;
}
@Component({
  components: {Echarts, Layout},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit('fetchRecordList');
    });
  }
})
export default class Chart extends Vue {
  recordList: Record[] = [];

  get option() {
    const today = new Date();
    const array = [];
    for (let i = 0; i <= 29; i++) {
      const dateString = day(today).subtract(i, 'day').format('YYYY-MM-DD');
      const found = _.find(this.recordList, {createAt: dateString});
      array.push({date: dateString, value: found ? found.amount : 0});
    }
    array.reverse()
    const keys=array.map(item=>item.date)
    const values=array.map(item=>item.value)
    return {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['支出', '收入']
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
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [
        {
          type: 'line',
          stack: '总量',
          symbolSize: 7,
          symbol: 'circle',
          itemStyle: {
            borderWidth: 1,
            color: '#666',
            borderColor: '#666'
          },
          data: values
        }
      ]
    };
  }

  mounted() {
    this.recordList = this.$store.state.recordList;
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

</style>
