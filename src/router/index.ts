import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Statistics from '@/views/Statistics.vue';
import Money from '@/views/Money.vue';
import Chart from '@/views/Chart.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:"/statistics",
    component: Statistics
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/charts',
    component: Chart
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
