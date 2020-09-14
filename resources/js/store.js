import Vue from 'vue'
import Vuex from 'vuex'

import { getEmpresas, getEmpresasCategoria } from './helpers/crud'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        url: `https://empresa.mikkuna.com`,
        //url: 'http://empresa.mikkuna.test',
        empresas: [],
        categorias: {
            Restaurant: [],
            Pasteleria_Cafeteria: [],
            Rest_Campestre: [],
            Pizzas: [],
            Chifa: [],
            Fast_Food: [],
            Polleria: [],
            Bar: []
        }
    },
    getters: {
        empresas(state) {
            return state.empresas
        },
        categorias(state) {
            return state.categorias
        }
    },
    mutations: {
        getEmpresas(state, payload) {
            state.empresas = payload
        },
        getEmpresasCategoria(state, payload) {
            state.categorias = Object.assign(state.categorias, payload)
        }
    },
    actions: {
        getEmpresas(context) {
            getEmpresas()
            .then(res => {
                context.commit('getEmpresas', res)
            })
        },
        getEmpresasCategoria(context, categoria) {
            getEmpresasCategoria(categoria)
            .then(res => {
                context.commit('getEmpresasCategoria', res)
            })
        }
    }
})

export default store