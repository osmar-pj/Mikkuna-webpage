<template>
    <div>
        ESCANEANDO CODIGO QR...
        <p class="error">{{ error }}</p>
        <p> Quieres ver la lista de: {{ linkedin }} </p>
        <div class="qrscan">
            <qrcode-stream @decode="onDecode" @init="onInit"></qrcode-stream>
        </div>
    </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
    components: {
        QrcodeStream
    },
    data() {
        return {
            linkedin: '',
            error: ''
        }
    },
    methods: {
        async onInit (promise) {
            try {
                await promise
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                this.error = "ERROR: you need to grant camera access permisson"
                } else if (error.name === 'NotFoundError') {
                this.error = "ERROR: no camera on this device"
                } else if (error.name === 'NotSupportedError') {
                this.error = "ERROR: secure context required (HTTPS, localhost)"
                } else if (error.name === 'NotReadableError') {
                this.error = "ERROR: is the camera already in use?"
                } else if (error.name === 'OverconstrainedError') {
                this.error = "ERROR: installed cameras are not suitable"
                } else if (error.name === 'StreamApiNotSupportedError') {
                this.error = "ERROR: Stream API is not supported in this browser"
                }
            }
        },
        onDecode(link) {
            link = this.linkedin
            windows.location = `${link}`
            //this.$router.push(`/${link}`)
        },
    }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
.aqrscan {
    border-color: black;
    padding: 30px;
}
</style>