<template>
    <div>
        <div class="section">
            <div class="card-image">
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content has-text-centered">
                        <p class="title is-4 has-text-orange">MIKKUNA</p>
                        <p class="subtitle is-6">
                            Siempre es una buena ocasion para degustar los sabores originales de nuestra tierra. <br>
                            Aquí!
                        </p>
                        <b-icon
                            icon="chevron-down"
                            size="is-medium"
                            type="is-primary">
                        </b-icon>
                    </div>
                </div>
            </div>
        </div>
        <a href="" v-for="empresa in empresas" :key="empresa.id" @click.prevent="getEmpresa(empresa.empresa)">
            <div :class="empresa.premium == false ? 'section': '' ">
                <section :class="empresa.premium == false ? 'hero bg is-secondary': 'hero is-light2' ">
                <div class="hero-head " v-show="!!empresa.premium">
                    <figure class="image">
                        <img :src="empresa.imagen_empresa == null ? `${url}/images/chef.svg` : `${url}/storage/${empresa.imagen_empresa}`" alt="Imagen empresa">
                    </figure>
                </div>
                <div class="hero-body">
                    <div class="columns is-mobile">
                        <div class="column">
                            <div :class="empresa.premium == false ? 'container': 'container has-text-centered' ">
                                <h1 :class="empresa.premium == false ? 'title is-3 has-text-primary is-uppercase': 'title is-1 has-text-primary is-uppercase' ">
                                    {{ empresa.empresa }}
                                </h1>
                                <h2 :class="empresa.premium == false ? 'subtitle is-6 ': 'subtitle is-4 ' ">
                                    {{ empresa.slogan }}
                                </h2>
                                <p class="is-size-7 has-text-green" v-show="!!empresa.premium">
                                    {{ empresa.descripcion }}
                                </p>
                                <h3 class="is-size-3 has-text-weight-bold has-text-grey" v-show="!!empresa.premium">
                                    <!-- Mobile -->
                                    <b-icon
                                        icon="whatsapp">
                                    </b-icon>
                                    {{ empresa.mobile }}
                                </h3>
                                <b-tag rounded v-show="!!empresa.delivery && empresa.premium" type="is-success" >Hacemos delivery!</b-tag>
                                <p class="is-size-7 has-text-dark" v-show="empresa.address && !!empresa.premium">
                                    <b-icon
                                        icon="map-marker"
                                        size="is-small">
                                    </b-icon>
                                    <span> {{ empresa.address }} </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            <hr>
        </a>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('getEmpresasCategoria', 'Rest_Campestre')
    },
    data() {
        return {
            url: this.$store.state.url,
        }
    },
    computed: {
        empresas() {
            return this.$store.getters.categorias.Rest_Campestre
        }
    },
    methods: {
        getEmpresa(empresa) {
            this.$router.push(`/${empresa}`)
        }
    }
}
</script>