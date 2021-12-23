import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Request from '@/views/Request.vue';
import CollectionsWrapper from '@/views/CollectionsWrapper.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/collections/:id/requests',
    name: 'Request',
    component: Request,
    props: (route) => ({ collectionId: +route.params.id }),
  },
  {
    path: '/requests',
    name: 'BareRequests',
    component: Request,
    props: { collectionId: null },
  },
  {
    path: '/collections',
    name: 'Collections',
    component: CollectionsWrapper,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
