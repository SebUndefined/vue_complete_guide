<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <list-server></list-server>
            <server-detail></server-detail>
        </div>
        <hr>
        <div class="row">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
import AppHeader from './components/shared/Header.vue'
import ListServer from './components/server/ListServer.vue'
import ServerDetail from './components/server/ServerDetail.vue'
import AppFooter from './components/shared/Footer.vue'


export default {
    components: {
        'app-header': AppHeader,
        'list-server': ListServer,
        'server-detail': ServerDetail,
        'app-footer': AppFooter
    }
}
</script>

<style>

</style>
