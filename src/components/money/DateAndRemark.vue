<template>
  <div>
    <div class="dateAndRemark">
      <div class="date">
        <a-date-picker @change="onChange" placeholder="请选择日期"/>
      </div>
      <div class="remarks" @click="AddRemark">
        <button>在这里输入备注吧~</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
/* eslint-disable */
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
import dayjs from 'dayjs';

@Component({
  components: {Icon}
})
export default class DateAndRemark extends Vue {
  @Prop({required: true}) createAt: string | undefined;

  AddRemark() {
    const remark=window.prompt('有什么备注信息将要说明吗?')
    if(remark){
      this.$emit('giveRemark',remark)
    }else {
      window.alert('备注信息不要为空哦')
    }
  }
  onChange(value: Date) {
    const date = dayjs(value).format('YYYY-MM-DD');
    this.$emit('update-createAt', date);
  }
}
</script>

<style scoped lang='scss'>
.dateAndRemark {
  margin: 0 30px 30px;
  display: flex;
  justify-content: space-between;

  .date {
    flex: 1;
    position: relative;
    margin-right: 30px;

    input {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 10px 5px;
      border-radius: 4px;
    }

    > .calendarIconWrapper {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .remarks {
    flex: 1;

    button {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background-color: #fff;
      border: 1px solid #ccc;
      color: #21B2C1;
    }
  }
}

.van-picker {
  position: relative;
  bottom: -50px;
  left: 0;
  z-index: 100;
}
</style>
