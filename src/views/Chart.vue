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

@Component({
  components: {Echarts, Layout}
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
      left: 0,
      right: '16px',
      bottom: '16px',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',
        '周一', '周二', '周三', '周四', '周五', '周六', '周日',
        '周一', '周二', '周三', '周四', '周五', '周六', '周日',
        '周一', '周二', '周三', '周四', '周五', '周六', '周日',
        '周一', '周二'],
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
        data: [120, 132, 101, 134, 90, 230, 210,
          120, 132, 101, 134, 90, 230, 210,
          120, 132, 101, 134, 90, 230, 210,
          120, 132, 101, 134, 90, 230, 210,
          120, 132]
      }
    ]
  };

  mounted() {
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
