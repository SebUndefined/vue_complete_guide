<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'app-quote'">Quote</button>
                <button @click="selectedComponent = 'app-autor'">Author</button>
                <button @click="selectedComponent = 'app-new'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
               <!-- <app-quote>
                   <h2 slot="title">{{ quoteTitle }}</h2>
                   <p slot="content">An amazing slot</p>
               </app-quote> -->
               <!-- <component :is="selectedComponent"></component> -->
               <keep-alive>
                   <component :is="selectedComponent"></component>
               </keep-alive>
               
               <hr>
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue'
import AppAuthor from './components/Author.vue'
import AppNew from './components/New.vue'
    export default {
        data: function () {
            return {
                quoteTitle: "Quote title",
                selectedComponent: 'app-quote'
            }
        },
        components: {
            'app-quote': Quote,
            'app-autor': AppAuthor,
            'app-new': AppNew
        }
    }
</script>

<style scoped>


</style>
