import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Inicio from './views/Inicio.vue'
import Menu from './views/Menu.vue'
import Cartao from './views/Cartao.vue'
import CadastroC from './views/CadastroC.vue'
import atividade from './views/AT_marcelo.vue'
import Perfil from './views/Perfil.vue'
import Cadastro from './views/Cadastro.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil
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
    },
    {
      path: '/Cadastrar',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/CadastrarImovel',
      name: 'CadastroC',
      component: CadastroC
    },
    {
      path: '/at',
      name: 'atividade',
      component: atividade
    }
  ]
})
