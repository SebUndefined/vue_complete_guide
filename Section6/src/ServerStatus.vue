<template>
    <div>
        <p>Server status {{ status }}</p>
        <button @click="changeStatus">Change</button>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            status: "critical"
        }
    },
    methods: {
        changeStatus(){
            this.status = "normal"
        }
    },
}
</script>

<style scoped>

</style>