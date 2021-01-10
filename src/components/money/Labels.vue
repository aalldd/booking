<template>
  <div class="Labels">
    <div class="iconWrapper" v-for="(label,index) in labelList" :key="index">
      <Icon :name="label.IconName"></Icon>
      <div>{{label.tagName}}</div>
    </div>
    <div class="iconWrapper" @click="addTag">
      <Icon name="add"></Icon>
      <div>加标签</div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: {Icon}
})
export default class Labels extends Vue {
  @Prop({required: true, type: Array}) readonly labelList!: TagList[];
  addTag(){
    const tag=window.prompt('加个标签吧~')
    const newTag={
      tagName:tag,
      IconName:'money'
    }
    if(tag){
      this.$emit('update:Tags',newTag)
    }else {
      window.alert('请输入标签名哦')
    }
  }
}
</script>

<style scoped lang='scss'>
.Labels {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  max-height: 130px;
  overflow: scroll;
  margin-top: 40px;

  .iconWrapper {
    width: 20%;
    margin-bottom: 40px;
    text-align: center;

    .icon {
      width: 1.3em;
      height: 1.3em;

      &.active {
        background-color: pink;
        border-radius: 50%;
      }
    }
  }
}
</style>
