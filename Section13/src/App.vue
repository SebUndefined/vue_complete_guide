<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | to-uppercase | to-lowercase }}</p>
                <hr>
                <button @click="fruits.push('berries')">Add new button</button>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">
                        {{fruit}}
                    </li>
                </ul>
            </div>
        </div>
        <hr>
        <app-list></app-list>
    </div>
</template>

<script>
import AppList from './List.vue'
import { fruitMixin } from './FruitMixin.js'
    export default {
        data() {
            return {
                text: 'Hello there',
            }
        },
        filters: {
            'to-uppercase'(value){
                return value.toUpperCase();
            }
        },
        components: {
            'app-list': AppList
        },
        mixins: [fruitMixin]
    }
</script>

<style>

</style>
