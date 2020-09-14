<template>
    <div>
        <nav-bar></nav-bar>
        <br><br>
        <router-view/>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
import NavBar from '../layout/NavBar.vue'
import BottomBar from '../layout/BottomBar.vue'
import { getInventarios } from '../helpers/crud'

export default {
    components: {
        NavBar,
        BottomBar
    },
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