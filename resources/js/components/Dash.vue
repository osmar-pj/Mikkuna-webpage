<template>
    <div>
        <section class="hero is-primary is-large">
            <div class="hero-body" >
                <div class="container has-text-centered">
                    <section class="section">
                        <h1 class="title has-text-yellow">
                            Carta Online
                        </h1>
                        <h2 class="subtitle is-6">
                            Encuentra la lista que ofrece el lugar donde siempre disfrutas comer
                        </h2>
                        <b-button type="is-dark" icon-left="qrcode-scan" outlined rounded @click="scan">
                            Escanear
                        </b-button>
                    </section>
                </div>
            </div>
        </section>
        <section class="hero is-light2">
            <div class="hero-body">
                <section>
                    <h1 class="title is-4">Eres empresa?</h1>
                    <h2 class="subtitle is-7">Asi se vera tu carta</h2>
                    <div class="columns is-mobile">
                        <div class="column is-6">
                            <div class="columns" v-for="item in inventarios" :key="item.id">
                                <div class="column" v-show="!!(item.id%2)">
                                    <div class="card is-light">
                                        <div class="card-image">
                                            <figure class="image">
                                                <img :src="`${url}/storage/${item.image}`" alt="">
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            <div class="media">
                                                <div class="media-content">
                                                    <h1 class="title is-7 has-text-dark">S/. {{ item.precio.toFixed(2) }} </h1>
                                                    <h2 class="subtitle is-7"> {{ item.titulo }} </h2>
                                                </div>
                                                <div class="media-right">
                                                    <b-icon
                                                        icon="heart"
                                                        type="is-primary"
                                                        >
                                                    </b-icon>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="columns" v-for="item in inventarios" :key="item.id">
                                <div class="column" v-show="!!((item.id+1)%2)">
                                    <div class="card is-light">
                                        <div class="card-image">
                                            <figure class="image">
                                                <img :src="`${url}/storage/${item.image}`" alt="">
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            <div class="media">
                                                <div class="media-content">
                                                    <h1 class="title is-7 has-text-dark">S/. {{ item.precio.toFixed(2) }} </h1>
                                                    <h2 class="subtitle is-7"> {{ item.titulo }} </h2>
                                                </div>
                                                <div class="media-right">
                                                    <b-icon
                                                        icon="heart-outline"
                                                        type="is-light"
                                                        >
                                                    </b-icon>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <section class="hero is-light">
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-half">
                        <figure class="image">
                            <img src="../../assets/qr-logo.jpeg" alt="">
                        </figure>
                    </div>
                    <div class="column is-half">
                        <div class="container has-text-right">
                            <section class="section">
                                <h1 class="title is-5 has-text-green">
                                    Quieres ofrecer tus productos desde nuestra plataforma?
                                </h1>
                                <h2 class="subtitle is-7">
                                    Comunicate con nosotros
                                </h2>
                                <b-button type="is-yellow" icon-left="whatsapp" outlined @click.prevent="whatsapp">
                                    +51 920 439629
                                </b-button>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero is-dark2">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <section class="section">
                        <h1 class="title is-5 has-text-light">
                            MIKKUNA
                        </h1>
                        <h2 class="subtitle is-7">
                            La carta a la palma de tu mano.
                        </h2>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { getInventarios } from '../helpers/crud'

export default {
    mounted() {
        getInventarios()
        .then(res => {
            this.inventarios = res
        })
    },
    data() {
        return {
            url: this.$store.state.url,
            inventarios: []
        }
    },
    methods: {
        whatsapp() {
            window.location = 'https://wa.me/51920430629'
        },
        scan() {
            this.$router.push('/scan/qr')
        }
    }
}
</script>