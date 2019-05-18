import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import ConsultaIpva from '@/components/ipva/ConsultaIpva'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'consultaIpva',
    path: '/consultaIpva',
    component: ConsultaIpva
}]

export default new VueRouter({
    mode: 'history', 
    routes
})

