<template>
    <div class="container">
        <section class="section">
            <b-field>
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img class="is-rounded" :src="empresa.logo_empresa == null ? `https://api.adorable.io/avatars/200/${empresa.empresa}.png` : `${url}/storage/${empresa.logo_empresa}`" alt="Logo empresa">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4"> {{ empresa.empresa }} </p>
                        <p class="subtitle is-6"> {{ empresa.servicio }} </p>
                    </div>
                </div>
            </b-field>
            
            <b-field label="" type="is-secondary">
                <b-autocomplete
                    rounded
                    v-model="name"
                    size="is-medium"
                    :data="filterList"
                    placeholder="Que se te antoja?"
                    field="titulo"
                    icon-right="magnify"
                    :loading="isFetching"
                    @select="option">
                    <template slot-scope="props">
                        <div class="media">
                            <div class="media-left">
                                <img width="64" :src="`${url}/storage/${props.option.image}`">
                            </div>
                            <div class="media-content">
                                {{ props.option.titulo }}
                                <br>
                                <small>
                                    S/. {{ props.option.precio.toFixed(2) }}
                                </small>
                            </div>
                        </div>
                    </template>
                </b-autocomplete>
            </b-field>

            <section>
                <div class="columns is-mobile">
                    <div class="column is-6">
                        <div class="columns" v-for="item in empresa.inventario" :key="item.id">
                            <div class="column" v-show="!!(item.id%2)">
                                <div class="card is-light">
                                    <div class="card-image">
                                        <a href="" @click.prevent="goItem(item)">
                                            <figure class="image">
                                                <img :src="`${url}/storage/${item.image}`" alt="">
                                            </figure>
                                        </a>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <h1 class="title is-5 has-text-dark">S/. {{ item.precio.toFixed(2) }} </h1>
                                                <h2 class="subtitle is-7"> {{ item.titulo }} </h2>
                                            </div>
                                            <div class="media-right">
                                                <a href="">
                                                    <b-icon
                                                        icon="heart"
                                                        type="is-primary"
                                                        >
                                                    </b-icon>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="columns" v-for="item in empresa.inventario" :key="item.id">
                            <div class="column" v-show="!!((item.id+1)%2)">
                                <div class="card is-light">
                                    <div class="card-image">
                                        <a href="" @click.prevent="goItem(item)">
                                            <figure class="image">
                                                <img :src="`${url}/storage/${item.image}`" alt="">
                                            </figure>
                                        </a>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <h1 class="title is-5 has-text-dark">S/. {{ item.precio.toFixed(2) }} </h1>
                                                <h2 class="subtitle is-7"> {{ item.titulo }} </h2>
                                            </div>
                                            <div class="media-right">
                                                <a href="">
                                                    <b-icon
                                                        icon="heart-outline"
                                                        type="is-light"
                                                        >
                                                    </b-icon>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section" v-show="!empresa.inventario.length">
                <div class="content has-text-centered">
                    <p>
                        <b-icon
                            icon="emoticon-sad"
                            size="is-large"
                            type="is-grey">
                        </b-icon>
                    </p>
                    <p class="title has-text-grey"> {{ empresa.empresa }} aún no subió su carta... </p>
                </div>
            </section>
        </section>
    </div>
</template>

<script>
import { getEmpresa } from '../helpers/crud'

export default {
    mounted() {
        getEmpresa(this.$route.params.empresa)
        .then(res => {
            this.empresa = res
        })
    },
    data() {
        return {
            url: this.$store.state.url,
            isFetching: false,
            name: '',
            lista: {},
            empresa: {
                inventario: []
            }
        }
    },
    computed: {
        filterList() {
            return this.empresa.inventario.filter((option) => {
                return option.titulo
                    .toString()
                    .toLowerCase()
                    .indexOf(this.name.toLowerCase()) >= 0
            })
        }
    },
    methods: {
        goItem(item) {
            this.$router.push(`/item_lista/${item.id}`)
        },
        option(item) {
            this.$router.push(`/item_lista/${item.id}`)
        }
    }
}
</script>