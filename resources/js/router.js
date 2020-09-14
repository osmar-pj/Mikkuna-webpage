import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Empresas from './components/Empresas.vue'
import ListaEmpresa from './components/ListaEmpresa.vue'
import ItemLista from './components/ItemLista.vue'
import ScanQr from './components/ScanQr.vue'
import Dash from './components/Dash.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '',
                    component: Dash
                },
                {
                    path: '/:empresa',
                    component: ListaEmpresa
                },
                {
                    path: '/item_lista/:id',
                    component: ItemLista
                },
                {
                    path: '/scan/qr',
                    component: ScanQr
                }
            ]
        }
    ]
})

export default router