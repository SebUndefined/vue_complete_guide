<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn">Reset Name</button>
        
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props: {
        name: {
            type: String, // [String, Array]
            required: true,
            default: "Max"
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        switchName(){
            return this.name.split("").reverse().join("")
        },
        resetName() {
            this.name = "Seb";
            this.$emit('nameWasReset', this.name);
        }
    },
    created() {
        eventBus.$on('ageWasEdited', (data) => {
            this.userAge = data
        })
    },
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
