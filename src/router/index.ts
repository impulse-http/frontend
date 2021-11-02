import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Request from '../views/Request.vue';
import Collections from '../views/Collections.vue';
import Teams from '../views/Teams.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/request',
    name: 'Request',
    component: Request,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Collections,
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
