<template>
    <li @click="changeServer">
        Server #{{server.id}}
    </li>
</template>
<script>
import { serverEventBus } from "../../main";

export default {
    props: {
        server: null
    },
    methods:{
        changeServer(){
            serverEventBus.$emit('serverWasChanged', this.server)
        }
    }
}
</script>