/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import defaultTagList from '@/lib/defaultTagList';
import clone from '@/lib/clone';

Vue.use(Vuex);
type RootState = {
  tagList: TagList[],
  recordList: Record[],
  deposit:number
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
    recordList:[],
    deposit:0
  } as RootState,
  mutations: {
    fetchTagList(state) {
      state.tagList= JSON.parse(window.localStorage.getItem('tagList')||'[]') as TagList[]
    },
    saveTagList(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    fetchRecordList(state){
      state.recordList=JSON.parse(window.localStorage.getItem('recordList')||'[]') as Record[]
    },
    saveRecordList(state){
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList))
    },
    createRecord(state,record){
      const record2: Record=clone(record)
      state.recordList.push(record2)
      store.commit('saveRecordList')
    },
    saveDeposit(state){
      window.localStorage.setItem('deposit',JSON.stringify(state.deposit))
      console.log(window.localStorage.getItem('deposit'));
    },
    fetchDeposit(state){
      state.deposit=parseFloat(window.localStorage.getItem('deposit'|| '0') as string)
    },
    withdrawDeposit(state,value){
      state.deposit-=value
      store.commit('saveDeposit')
      store.commit('fetchDeposit')
    },
    depositAmount(state,value){
      state.deposit+=value
      store.commit('saveDeposit')
      store.commit('fetchDeposit')
    }
  },
});

export default store;
