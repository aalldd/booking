<template>
  <div class="noData">
    <div class="iconWrapper">
      <Icon :name="name"></Icon>
    </div>
    <span>暂无数据</span>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
@Component({
  components:{Icon}
})
export default class NoData extends Vue{
  @Prop() name?: string
}
</script>

<style scoped lang='scss'>
  .noData{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .iconWrapper{
      width: 60px;
      height: 80px;
      .icon{
        width: 100%;
        height: 100%;
      }
    }
    span{
      font-size: 14px;
      color: #B1A9A9;
    }
  }
</style>
