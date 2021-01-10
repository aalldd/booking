<template>
  <div class="layout">
    <router-link to="/statistics"><Icon name="home"></Icon></router-link>
    <router-link to="/money"><Icon name="money"></Icon></router-link>
    <router-link to="/charts"><Icon name="charts"></Icon></router-link>
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
.layout{
  min-width: 90%;
  height: 50px;
  position: absolute;
  left: 0px;
  bottom: 20px;
  z-index: 2;
  background-color: #fff;
  border-radius: 10px;
  margin:0 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
