<template>
  <Layout>
    <div class="statistics">
      <PersonInfo></PersonInfo>
      <Balance :budget="budget"></Balance>
      <ButtonGroup
          @withdraw="withdrawBudget"
          :balance="budget"
          @balanceAmount="addBudget"
      ></ButtonGroup>
      <Nav :balance="flow"></Nav>
      <Activity></Activity>
    </div>
  </Layout>

</template>

<script lang='ts'>
/* eslint-disable */
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import PersonInfo from '@/components/statistics/PersonInfo.vue';
import Balance from '@/components/statistics/Balance.vue';
import ButtonGroup from '@/components/statistics/ButtonGroup.vue';
import Nav from '@/components/statistics/Nav.vue';
import Activity from '@/components/statistics/Activity.vue';
import Layout from '@/components/statistics/Layout.vue';

@Component({
  components: {PersonInfo, Balance, ButtonGroup, Nav, Activity, Layout},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit('fetchRecordList');
      vm.$store.commit('fetchFlow');
      vm.$store.commit('fetchBudget');
    });
  }
})
export default class statistics extends Vue {
  recordList = [];
  budget = 0;
  flow = 0;

  mounted() {
    this.recordList = this.$store.state.recordList;
    this.flow = this.$store.state.flow;
    this.budget = this.$store.state.budget;
  }

  withdrawBudget(value: number) {
    this.$store.commit('withdrawBudget', value);
    this.budget = this.$store.state.budget;
  }

  addBudget(value: number) {
    this.$store.commit('addBudget', value);
    this.budget = this.$store.state.budget;
  }


}
</script>

<style scoped lang='scss'>
.statistics {
  position: relative;
  min-height: 100vh;
  background-color: #F7FAFD;
}
</style>
