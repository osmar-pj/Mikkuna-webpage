import axios from 'axios'

// GET

export function getEmpresas() {
    return new Promise((res, rej) => {
        axios.get('/api/get_empresas')
        .then(response => {
            res(response.data.empresas)
        })
        .catch(err => {
            rej('No tenemos resultados', err)
        })
    })
}

// GET/:ID

export function getEmpresa(empresa) {
    return new Promise((res, rej) => {
        axios.get(`/api/get_empresa/${empresa}`)
        .then(response => {
            res(response.data.empresa)
        })
        .catch(err => {
            rej('No tenemos resultados', err)
        })
    })
}

export function getItem(id) {
    return new Promise((res, rej) => {
        axios.get(`/api/get_item/${id}`)
        .then(response => {
            res(response.data.item)
        })
        .catch(err => {
            rej('No tenemos resultados', err)
        })
    })
}

export function getEmpresasCategoria(categoria) {
    return new Promise((res, rej) => {
        axios.get(`/api/get_empresas_categoria/${categoria}`)
        .then(response => {
            res(response.data.categorias)
        })
        .catch(err => {
            rej('No tenemos resultados', err)
        })
    })
}


export function getInventarios() {
    return new Promise((res, rej) => {
        axios.get('/api/inventarios')
        .then(response => {
            res(response.data.inventarios)
        })
        .catch(err => {
            rej('No tenemos resultados', err)
        })
    })
}