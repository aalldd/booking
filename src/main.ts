import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import {DatePicker,Modal} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {Field, Cell} from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false;
Vue.use(Field);
Vue.use(Cell);
Vue.use(DatePicker)
Vue.use(Modal)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload=function (){
  setTimeout(function (){
    window.scrollTo(0,10000)
  },0)
}
