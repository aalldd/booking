import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import {DatePicker, Modal} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {Field, Cell} from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false;
Vue.use(Field);
Vue.use(Cell);
Vue.use(DatePicker);
Vue.use(Modal);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 200);
  }, 0);
};

if (document.documentElement.clientWidth > 500) {
  window.alert('请使用手机打开本页面，保证浏览效果');
  const image = document.createElement('img');
  image.src = '/qrcode.png';
  image.style.position = 'fixed';
  image.style.left = '50%';
  image.style.top = '50%';
  image.style.transform = 'translate(-50%,-50%)';
  image.style.boxShadow = '0 0 10px rgba(0,0,0,.3)';
  document.body.appendChild(image);
}
