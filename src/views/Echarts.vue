<template>
  <div class="wrapper" ref="wrapper"></div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

const echarts=require('echarts');
@Component
export default class Chart extends Vue {
  @Prop() readonly options?: any;
  myChart?: any;

  mounted() {
    console.log(echarts);
    this.myChart = echarts.init(this.$refs.wrapper as HTMLDivElement);
    if (this.options) {
      this.myChart.setOption(this.options);
    }
  }

  @Watch('options')
  onOptionChanged(options: any) {
    if (this.myChart) {
      this.myChart.setOption(options);
    }
  }
}
</script>

<style scoped lang='scss'>
.wrapper {
  height: 200px;
}
</style>
