<template>
    <div class="">
        <div class="card itemList">
            <div class="card-image">
                <figure class="image">
                    <img :src="`${url}/storage/${item.image}`" alt="">
                </figure>
            </div>
            <div class="card-content section">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img class="is-rounded" :src="item.empresa.logo_empresa == null ? `https://api.adorable.io/avatars/200/${item.empresa.empresa}.png` : `${url}/storage/${item.empresa.logo_empresa}`" alt="Logo empresa">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4"> {{ item.empresa.empresa }} </p>
                        <p class="subtitle is-6"> {{ item.empresa.servicio }} </p>
                    </div>
                    <div class="media-right">
                        <a href="">
                            <b-icon
                                icon="heart-outline"
                                type="is-light"
                                size="is-medium"
                                >
                            </b-icon>
                        </a>
                    </div>
                </div>
            </div>
            <div class="content has-text-centered section">
                <h1 class="title is-2 has-text-primary">S/. {{ item.precio.toFixed(2) }} </h1>
                <h2 class="subtitle is-3 has-text-secondary"> {{ item.titulo }} </h2>
                <p> {{ item.descripcion }} </p>
                <b-rate custom-text="rate" disabled value="4.3"></b-rate>
            </div>
        </div>
        <section class="section">
            <div class="media">
                <div class="media-left"></div>
                <div class="media-content"></div>
                <div class="media-right">
                    <b-button outlined type="is-secondary" @click="atras">Atras</b-button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { getItem } from '../helpers/crud'

export default {
    mounted() {
        getItem(this.$route.params.id)
        .then(res => {
            this.item = res
        })
    },
    data() {
        return {
            item: {
                precio: 0,
            },
            url: this.$store.state.url,
        }
    },
    methods: {
        atras() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">

</style>