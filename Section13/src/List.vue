<template>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Mixins</h1>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">
                        {{fruit}}
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
import { fruitMixin } from './FruitMixin.js'

    export default {
        mixins: [fruitMixin],
        created() { 
            console.log("Created List")
        }   
    }
</script>

<style>

</style>
