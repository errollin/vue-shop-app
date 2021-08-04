import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/products',
  },
  {
    path: '/products',
    component: () => import('../views/ProductsList.vue'),
  },
  {
    path: '/cart',
    component: () => import('../views/UserCart.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/ShopAdmin.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
