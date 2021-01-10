/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import defaultTagList from '@/lib/defaultTagList';

Vue.use(Vuex);
type RootState = {
  tagList: TagList[]
}
type TagList = {
  tagName: string;
  IconName: string;
}

const store = new Vuex.Store({
  state: {
    tagList: defaultTagList
  } as RootState,
  mutations: {
    fetchTagList(state) {
      state.tagList= JSON.parse(window.localStorage.getItem('tagList')||'[]') as TagList[]
    },
    saveTagList(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    }
  },
});

export default store;
