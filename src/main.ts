import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Field,NumberKeyboard,DatetimePicker   } from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
Vue.use(Field);
Vue.use(NumberKeyboard);
Vue.use(DatetimePicker);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')