<template id="navbar">
    <b-navbar type="is-dark" fixed-bottom :mobile-burger="false">
        <template slot="brand">
            <b-navbar-item tag="a" href="https://www.facebook.com/Mikkuna-108901947578970" target="_blank">
                <b-icon
                    icon="facebook">
                </b-icon>
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <b-icon
                    icon="youtube">
                </b-icon>
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <b-icon
                    icon="instagram">
                </b-icon>
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <b-icon
                    icon="linkedin">
                </b-icon>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
}
</script>