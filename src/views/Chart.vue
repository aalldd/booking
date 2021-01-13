<template>
  <div>
    <Echarts :options="option"></Echarts>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Echarts from './Echarts.vue';

@Component({
  components: {Echarts}
})
export default class Chart extends Vue {
  option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['支出', '收入']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',
             '周一', '周二', '周三', '周四', '周五', '周六', '周日',
             '周一', '周二', '周三', '周四', '周五', '周六', '周日',
             '周一', '周二', '周三', '周四', '周五', '周六', '周日',
             '周一', '周二']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210,
          120, 132, 101, 134, 90, 230, 210,
          120, 132, 101, 134, 90, 230, 210,
          120, 132, 101, 134, 90, 230, 210,
          120, 132]
      }
    ]
  };


}
</script>

<style scoped lang='scss'>

</style>
