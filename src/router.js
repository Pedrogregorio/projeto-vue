import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Inicio from './views/Inicio.vue'
import Menu from './views/Menu.vue'
import Cartao from './views/Cartao.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/cartao',
      name: 'Cartao',
      component: Cartao
    }
  ]
})
