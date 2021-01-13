<template>
  <div class="nav-wrapper">
    <div class="contentWrapper"><slot></slot></div>
    <div class="layout">
      <div class="itemWrapper">
        <router-link to="/statistics" class="item" active-class="selected">
          <Icon name="home"></Icon>
          <span>明细</span>
        </router-link>
      </div>
      <div class="itemWrapper">
        <router-link to="/money" class="item" active-class="selected">
          <Icon name="money"></Icon>
          <span>记账</span>
        </router-link>
      </div>
      <div class="itemWrapper">
        <router-link to="/charts" class="item" active-class="selected">
          <Icon name="charts"></Icon>
          <span>报告</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
@Component({
  components:{Icon}
})
export default class Layout extends Vue{
}
</script>

<style scoped lang='scss'>
.nav-wrapper{
  display: flex;
  background-color: #F7FAFD;
  flex-direction: column;
  height: 100vh;
  .layout{
    display: flex;
    align-items: center;
    min-height: 50px;
    max-width: 90%;
    margin-left: 5%;
    margin-bottom: 5%;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    >.itemWrapper{
      flex: 1;
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      >.item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 25%;
        height: 100%;
        span{
          display: block;
          width: 150%;
        }
      }
      >.selected{
        border-bottom: 2px solid #D191B5;
      }
    }
  }
  .contentWrapper{
    overflow: auto;
    flex-grow: 1;
  }
}

</style>
