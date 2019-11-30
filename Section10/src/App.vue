<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :quoteMax="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-lg-12">
                <div class="alert alert-info">Info: click on a quote for delete it</div>
            </div>
        </div>
    </div>
</template>

<script>
import AppQuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue'
import AppHeader from './components/Header.vue'
    export default {
        data: function(){
            return {
                quotes:[
                    'Just a simple quotes'
                ],
                maxQuotes: 10
            }
        },
        components: {
            'app-quote-grid': AppQuoteGrid,
            'app-new-quote': NewQuote,
            'app-header': AppHeader,
        },
        methods: {
            newQuote(quote){
                if(this.quotes.length >= this.maxQuotes){
                    alert("stop!!!!")
                }
                else {
                    this.quotes.push(quote)
                }
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
