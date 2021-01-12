/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import defaultTagList from '@/lib/defaultTagList';
import clone from '@/lib/clone';

Vue.use(Vuex);
type RootState = {
  tagList: TagList[],
  recordList: Record[],
  flow: number,
  budget:number
}
type Record = {
  ExpenseType: string,
  labelList: string[],
  createAt: string,
  remark: string,
  amount: number
}
type TagList = {
  tagName: string;
  IconName: string;
}

const store = new Vuex.Store({
  state: {
    tagList: defaultTagList,
    recordList: [],
    flow: 0,
    budget:0
  } as RootState,
  mutations: {
    fetchTagList(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]') as TagList[];
      if(state.tagList.length===0){
        state.tagList=defaultTagList
      }
    },
    saveTagList(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    fetchRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as Record[];
    },
    saveRecordList(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    createRecord(state, record) {
      const record2: Record = clone(record);
      state.recordList.push(record2);
      store.commit('saveRecordList');
    },
    fetchFlow(state) {
      state.flow = Number(window.localStorage.getItem('flow'));
    },
    saveFlow(state, value: number) {
      state.flow = value;
      window.localStorage.setItem('flow', JSON.stringify(state.flow));
    },
    withdrawBudget(state,value: number){
      state.budget-=value
      store.commit('saveBudget')
      store.commit('fetchBudget')
    },
    addBudget(state,value: number){
      state.budget+=value
      store.commit('saveBudget')
      store.commit('fetchBudget')
    },
    saveBudget(state){
      window.localStorage.setItem('budget',JSON.stringify(state.budget))
    },
    fetchBudget(state){
      state.budget=Number(window.localStorage.getItem('budget'))
    }
  },
});

export default store;
