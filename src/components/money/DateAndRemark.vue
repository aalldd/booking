<template>
  <div>
    <div class="dateAndRemark">
      <div class="date">
        <input type="text" placeholder="2021-01-09" v-model="setDate">
        <div class="calendarIconWrapper" @click="datePickerVisible=true">
          <Icon name="calendar"></Icon>
        </div>
      </div>
      <div class="remarks">
        <button>remarks</button>
      </div>
    </div>
    <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        v-if="datePickerVisible"
        @confirm="confirmDate"
        @cancel="closeDate"
    />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
@Component({
  components:{Icon}
})
export default class DateAndRemark extends Vue{
  minDate = new Date(2020, 0, 1);
  maxDate = new Date(2025, 10, 1);
  currentDate = new Date();
  datePickerVisible = false;
  setDate = new Date().toISOString().split('T')[0];

  confirmDate(value: Date) {
    //组件这里存在bug，选择出来的日期少一天，蛋疼
    const date=value.toISOString().split('T')[0].split('-')
    const day=value.toISOString().split('T')[0].split('-')[2]
    const realDay=(parseInt(day)+1).toString()
    const realDate=`${date[0]}-${date[1]}-${realDay}`
    this.setDate = realDate;
    this.datePickerVisible=false;
  }

  closeDate() {
    this.setDate = new Date().toISOString().split('T')[0];
    this.datePickerVisible = false;
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
.van-picker{
  position: relative;
  bottom: -50px;
  left: 0;
  z-index: 100;
}
</style>
