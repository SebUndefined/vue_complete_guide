<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-my-on:click="customClick">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div class="div-event" v-my-on:mouseover="mouseEnter" v-my-on:mouseout="mouseLeft"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'my-on': {
                bind(el, binding) {
                    const event = binding.arg;
                    const func = binding.value;
                    console.log(event);
                    console.log(func);

                    el.addEventListener(event,func)
                }
            }
        },
        methods:{
            customClick(){
                alert("Pouet")
            },
            mouseEnter(){
                console.log("Mouse enter");
            },
            mouseLeft(){
                console.log("Mouse left");
            },
        }
    }
</script>

<style scoped>
.div-event{
    height: 200px;
    width: 150px;
    background-color: blueviolet 
}
</style>
