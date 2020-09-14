<template>
    <div>
        <div class="">
            <section class="hero is-light has-text-centered ">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title is-3 has-text-orange">
                            ESCANEA AQUI
                        </h1>
                        <a href="" @click.prevent="scango">
                            <figure class="image is-128x128 scanqr">
                                <img class="" src="../../../assets/scanqr.png" alt="Imagen empresa">
                            </figure>
                        </a>
                    </div>
                </div>
            </section>
            <div class="card-content">
                <div class="media">
                    <div class="media-content has-text-centered">
                        <p class="title is-4 has-text-green">Bienvenido a MIKKUNA</p>
                        <p class="subtitle is-6">
                            Disfruta la mejor comida de nuestra tierra, <br> Aquí!
                        </p>
                        <b-icon
                            icon="chevron-down"
                            size="is-small">
                        </b-icon>
                    </div>
                </div>
            </div>
        </div>
        <!-- <a href="" v-for="empresa in empresas" :key="empresa.id" @click.prevent="getEmpresa(empresa.empresa)">
            <div class="card is-light">
                <div class="card-image">
                    <figure class="image">
                        <img :src="empresa.imagen_empresa == null ? `${url}/images/chef.svg` : `${url}/storage/${empresa.imagen_empresa}`" alt="Imagen_empresa">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img class="is-rounded" :src="empresa.logo_empresa == null ? `https://api.adorable.io/avatars/200/${empresa.empresa}.png` : `${url}/storage/${empresa.logo_empresa}`" alt="Logo empresa">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4 has-text-primary"> {{ empresa.empresa }} </p>
                            <p class="subtitle is-6 has-text-danger-dark"> {{ empresa.slogan }} </p>
                        </div>
                    </div>

                    <div class="content has-text-centered">
                        <p class="is-size-7 has-text-grey-light">
                            {{ empresa.descripcion }}
                        </p>
                        <b-tag rounded v-show="!!empresa.delivery && empresa.premium" type="is-success" >Hacemos delivery!</b-tag>
                        <p class="is-size-7 has-text-dark" v-show="empresa.address">
                            <b-icon
                                icon="map-marker"
                                size="is-small">
                            </b-icon>
                            <span> {{ empresa.address }} </span>
                        </p>
                        <h3 class="is-size-3 has-text-weight-bold has-text-grey">
                            <b-icon
                                icon="whatsapp">
                            </b-icon>
                            {{ empresa.mobile }}
                        </h3>
                        <h5 class="is-size-6">Abrimos los:</h5>
                        <b-field class="btn">
                            <b-checkbox-button
                                class="btn"
                                expanded
                                v-model="empresa.week"
                                native-value="L"
                                type="is-twitter"
                                size="is-small"
                                disabled>
                                <span>L</span>
                            </b-checkbox-button>

                            <b-checkbox-button
                                expanded 
                                v-model="empresa.week"
                                native-value="Ma"
                                type="is-twitter"
                                size="is-small"
                                disabled>
                                <span>M</span>
                            </b-checkbox-button>

                            <b-checkbox-button
                                expanded
                                v-model="empresa.week"
                                native-value="Mi"
                                type="is-twitter"
                                size="is-small"
                                disabled>
                                <span>M</span>
                            </b-checkbox-button>

                            <b-checkbox-button 
                                expanded
                                v-model="empresa.week"
                                native-value="J"
                                type="is-twitter"
                                size="is-small"
                                disabled>
                                <span>J</span>
                            </b-checkbox-button>

                            <b-checkbox-button
                                expanded
                                v-model="empresa.week"
                                native-value="V"
                                type="is-twitter"
                                size="is-small"
                                disabled>
                                <span>V</span>
                            </b-checkbox-button>

                            <b-checkbox-button
                                expanded
                                v-model="empresa.week"
                                native-value="S"
                                type="is-twitter"
                                size="is-small"
                                disabled>
                                <span>S</span>
                            </b-checkbox-button>

                            <b-checkbox-button 
                                expanded
                                v-model="empresa.week"
                                native-value="D"
                                type="is-twitter"
                                size="is-small"
                                disabled>
                                <span>D</span>
                            </b-checkbox-button>
                        </b-field>
                    </div>
                </div>
            </div>
            <hr>
        </a> -->
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('getEmpresas')
    },
    data() {
        return {
            url: this.$store.state.url
        }
    },
    computed: {
        empresas() {
            return this.$store.getters.empresas
        }
    },
    methods: {
        getEmpresa(empresa) {
            this.$router.push(`/${empresa}`)
        },
        scango() {
            this.$router.push('/scan/qr')
        }
    }
}
</script>

<style lang="scss">
hr {
    background-color: #eeeeee;
    margin: 0;
}

.bg {
    background-image: url('../../../assets/food.svg');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    border-radius: 10px;
}
.scanqr {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.b-checkbox.checkbox[disabled] {
    opacity: 1;
}

[disabled].radio, [disabled].checkbox, fieldset[disabled] .radio, fieldset[disabled] .checkbox {
    color: #dbdbdb;
}
.button.is-twitter {
    color: #fff;
}
</style>