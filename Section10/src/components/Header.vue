<template>
    <div class="progress">
	    <div class="progress-bar" 
        role="progressbar" 
        aria-valuenow="60" 
        aria-valuemin="0" 
        aria-valuemax="100"
        :style="{width:(quoteCount/quoteMax)*100 +'%'}">
            {{quoteCount}}/{{quoteMax}}
	    </div>
    </div>
</template>
<script>
export default {
    props:['quoteCount', 'quoteMax']
}
</script>