import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Request from '../views/Request.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/request',
    name: 'Request',
    component: Request,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
