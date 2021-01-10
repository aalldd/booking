<template>
  <div class="statistics">
    <PersonInfo></PersonInfo>
    <Balance></Balance>
    <ButtonGroup></ButtonGroup>
    <Nav></Nav>
    <Activity></Activity>
    <Layout></Layout>
  </div>
</template>

<script lang='ts'>
/* eslint-disable */
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import PersonInfo from '@/components/statistics/PersonInfo.vue';
import Balance from '@/components/statistics/Balance.vue';
import ButtonGroup from '@/components/statistics/ButtonGroup.vue';
import Nav from '@/components/statistics/Nav.vue';
import Activity from '@/components/statistics/Activity.vue';
import Layout from '@/components/statistics/Layout.vue';

@Component({
  components: {PersonInfo, Balance, ButtonGroup, Nav, Activity, Layout}
})
export default class statistics extends Vue {
}
</script>

<style scoped lang='scss'>
.statistics {
  position: relative;
  min-height: 100vh;
  background-color: #F7FAFD;
}
</style>
