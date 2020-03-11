import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/tareas',
    name: 'Tareas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaTareas.vue')
  },
  {
    path: '/tareas/realizadas',
    name: 'TareasRealizadas',
    component: () => import(/* webpackChunkName: "about" */ '../views/TareasRealizadas.vue')
  },
  {
    path: '/tareas/sinHacer',
    name: 'TareasSinHacer',
    component: () => import(/* webpackChunkName: "about" */ '../views/TareasSinHacer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
