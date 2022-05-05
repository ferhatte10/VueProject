import { createRouter, createWebHistory } from 'vue-router'
import Configuration from "@/views/Configuration";

const routes = [
  {
    path: '/',
    name: 'Configuration',
    component: Configuration,
    meta: {
      title: 'Speel - Configuration',
    }
  },
  {
    path: '/search',
    name: 'search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].data) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
    meta: {
      title: 'Speel - Research',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';
  next();
})

export default router
