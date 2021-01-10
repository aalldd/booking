<template>
  <div class="activity">
    <div class="title">Activity</div>
    <ol class="items-Wrapper">
      <li>
        <h3 class="date">Today</h3>
        <ol>
          <li class="items">
            <div class="imgWrapper">
              <img src="../../assets/cat.jpg" alt="">
            </div>
            <div class="item-info">
              <span class="tags">tags</span>
              <span class="notes">notes</span>
            </div>
            <span class="item-amount">-$20.99</span>
          </li>
          <li class="items">
            <div class="imgWrapper">
              <img src="../../assets/cat.jpg" alt="">
            </div>
            <div class="item-info">
              <span class="tags">tags</span>
              <span class="notes">notes</span>
            </div>
            <span class="item-amount">-$20.99</span>
          </li>
        </ol>
      </li>
      <li>
        <h3 class="date">yesterday</h3>
        <ol>
          <li class="items">
            <div class="imgWrapper">
              <img src="../../assets/cat.jpg" alt="">
            </div>
            <div class="item-info">
              <span class="tags">tags</span>
              <span class="notes">notes</span>
            </div>
            <span class="item-amount">-$20.99</span>
          </li>
          <li class="items">
            <div class="imgWrapper">
              <img src="../../assets/cat.jpg" alt="">
            </div>
            <div class="item-info">
              <span class="tags">tags</span>
              <span class="notes">notes</span>
            </div>
            <span class="item-amount">-$20.99</span>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class Activity extends Vue{
}
</script>

<style scoped lang='scss'>
.activity{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index:1;
  background-color: #F2F7FA;
  border: 1px solid #ccc;
  padding: 30px 20px 90px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  height: 300px;
  .title{
    font-size: 18px;
    color: #000;margin-bottom: 16px;
  }
  .items-Wrapper{
    max-height: 140px;
    overflow: scroll;
  }
  .items{
    display: flex;
    justify-content: space-between;
    .imgWrapper{
      min-width: 50px;
      max-width: 50px;
      height: 50px;
    }
    .item-info{
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 15px;
      max-width: 70%;
      .tags{
        color: #666;
      }
      .notes{
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
