import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../views/Principal.vue'
import Contato from '../views/Contato.vue'
import QuemSomos from '../views/QuemSomos.vue'
import Servicos from '../views/Servicos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },
  {
    path: '/quem-somos',
    name: 'QuemSomos',
    component: QuemSomos
  },
  {
    path: '/servicos',
    name: 'Servicos',
    component: Servicos
  }
  
]

const router = new VueRouter({
  routes
})

export default router
