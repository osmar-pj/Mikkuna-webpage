<template id="navbar">
    <b-navbar type="is-primary" fixed-top transparent>
        <template slot="brand" >
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="../../assets/logo3.png" alt="mikkuna">
                <h1>MIKKUNA</h1>
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <b-icon
                    icon="home">
                </b-icon>
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/scan/qr' }">
                <b-icon
                    icon="qrcode-scan">
                </b-icon>
            </b-navbar-item>
        </template>
        <template slot="start">
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Registrar</strong>
                    </a>
                    <a class="button is-light">
                        Ingresar
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    props: ['appear'],
    data() {
        return {
        }
    },
    methods: {
        activar() {
            this.$emit('appear', false)
            this.$router.go(-1)
        }
    }
}
</script>