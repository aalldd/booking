<template>
  <div class="activity">
    <div class="title">消费记录</div>
    <ol class="items-Wrapper">
      <li v-for="(group,index) in groupList" :key="index">
        <h3 class="date">{{ beautify( group.title ) }}
          <span>¥{{group.total}}</span>
        </h3>
        <ol>
          <li class="items" v-for="(item,index) in group.items" :key="index">
            <div class="imgWrapper">
              <img src="../../assets/cat.jpg" alt="">
            </div>
            <div class="item-info">
              <span class="tags">{{ tagString(item.labelList) }}</span>
              <span class="notes">{{ item.remark }}</span>
            </div>
            <span class="item-amount" v-if="item.ExpenseType==='income'">¥+{{ item.amount }}</span>
            <span class="item-amount" v-if="item.ExpenseType==='payment'">¥-{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script lang='ts'>
/* eslint-disable */
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import clone from '@/lib/clone';
import dayjs from 'dayjs';

type Record = {
  ExpenseType: string,
  labelList: string[],
  createAt: string,
  remark: string,
  amount: number
}
@Component
export default class Activity extends Vue {

  get recordList() {
    return this.$store.state.recordList as Record[];
  }

  get groupList() {
    const {recordList} = this;
    if (recordList.length === 0) {return [];}
    //数据按照日期从近到远排序
    const groupList = clone(recordList).sort((a, b) =>
        dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf()
    );
    type Result = { title: string, total?: number, items: Record[] }[]
    const result: Result = [{title: dayjs(groupList[0].createAt).format('YYYY-MM-DD'), items: [groupList[0]]}];
    for (let i = 1; i < groupList.length; i++) {
      const current = groupList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.map(group => {
      const total = group.items.reduce((sum, item) => {
        if(item.ExpenseType==='income'){
          sum+=Number(item.amount)
        }else {
          sum=sum-=item.amount
        }
        return sum;
      },0);
      group.total=total
    });
    let sum=0
    result.forEach(item=>{
      if(item.total){
        sum+=item.total
      }
    })
    this.$store.commit('saveFlow',sum)
    return result;
  }

  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(new Date(), 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('MM月DD日');
    } else if (day.isSame(now, 'month') && day.isSame(now, 'year')) {
      return day.format('DD日');
    } else {
      return day.format('YYYY年MM月DD日');
    }
  }

  tagString(labels: string[]){
    return labels.length===0?'无':labels.join(',')
  }
}
</script>

<style scoped lang='scss'>
.activity {
  margin-top: 30px;
  border-bottom:0;
  padding: 30px 20px 90px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  box-shadow: rgba(0,0,0,.25);
  .title {
    font-size: 18px;
    color: #000;
    margin-bottom: 16px;
  }

  .items-Wrapper {
    .date{
      display: flex;
      justify-content: space-between;
    }
  }

  .items {
    display: flex;
    justify-content: space-between;

    .imgWrapper {
      min-width: 50px;
      max-width: 50px;
      height: 50px;
    }

    .item-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 15px;
      max-width: 70%;

      .tags {
        color: #666;
      }

      .notes {
        color: #CECECE;
        margin-top: 4px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 80%;
      }
    }
  }
}
</style>
