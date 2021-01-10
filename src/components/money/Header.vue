<template>
  <header>
    <div class="iconWrapper" @click="goBack">
      <Icon name="left"></Icon>
    </div>
    <span>Accounts</span>
    <Icon name=""></Icon>
  </header>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
@Component({
  components:{Icon}
})
export default class Header extends Vue{
  $router: any;
  goBack(){
    this.$router.back()
  }
}
</script>

<style scoped lang='scss'>
header {
  display: flex;
  align-items: center;
  padding: 26px 29px;

  > span {
    flex: 1;
    text-align: center;
    color: #6C718F;
  }
}
</style>
