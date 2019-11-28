<template>
<div>
  <h1>Server status: {{ status }} </h1>
  <app-servers></app-servers>
</div>
  
</template>

<script>
  export default {
    data: function (){
      return {
          status: "Critical"
      }
    }
  }
</script>

<style>

</style>
