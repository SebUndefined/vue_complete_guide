<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server == null">Please select a server</p>
        <p v-else>Server #{{ server.id }}: {{ server.status }}</p>
    </div>
</template>
<script>
import { serverEventBus } from "../../main";

export default {
    data: function() {
            return {
                server: null
            }
    },
    created(){
        serverEventBus.$on('serverWasChanged', (server)=> {
            this.server = server
        })
    }
}
</script>
<style scoped>
    div {
        border: 1px solid red;
    }
</style>