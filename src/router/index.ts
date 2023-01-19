import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{auth:false}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('../views/ref.vue')
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import('../views/reactive.vue')
  },
  {
    path: '/setup_params',
    name: 'setup-params',
    component: () => import('../views/setup-params.vue')
  },
  {
    path: '/torefs',
    name: 'torefs',
    component: () => import('../views/torefs.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('../views/computed.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('../views/watch.vue')
  },
  {
    path: '/life',
    name: 'life',
    component: () => import('../views/life.vue')
  },
  {
    path: '/dom',
    name: 'dom',
    component: () => import('../views/dom.vue')
  },
  {
    path: '/hook',
    name: 'hook',
    component: () => import('../views/hook.vue')
  },
  {
    path: '/shallow',
    name: 'shallow',
    component: () => import('../views/shallow.vue')
  },
  {
    path: '/readonly',
    name: 'readonly',
    component: () => import('../views/readonly.vue')
  },
  {
    path: '/raw',
    name: 'raw',
    component: () => import('../views/raw.vue')
  },
  {
    path: '/toref',
    name: 'toref',
    component: () => import('../views/toref.vue')
  },
  {
    path: '/customref',
    name: 'customref',
    component: () => import('../views/customref.vue')
  },
  {
    path: '/provide',
    name: 'provice',
    component: () => import('../views/provide.vue')
  },
  {
    path: '/isrespond',
    name: 'isrespond',
    component: () => import('../views/isrespond.vue')
  },
  {
    path: '/teleport',
    name: 'teleport',
    component: () => import('../views/teleport.vue')
  },
  {
    path: '/model',
    name: 'model',
    component: () => import('../views/model.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/store.vue')
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('../views/todolist.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), //createWebHistory:history模式无#号，createWebHashHistory:hash模式有#号
  routes
})

router.beforeEach((to,from,next)=>{
    // console.log(to);
    next();
})

export default router
