<template>
    <div>
        {{note}}
    </div>
</template>

<script>
export default {
    props:{
        content: Object,
        note: Number
    },
    data(){
        return {
            full: false,
            half: false,
            empty: false,
            fullStr: "<i class='fa fa-star'></i>",
            halfStr: "<i class='fa fa-star-half-o'></i>",
            emptyStr: "<i class='fa fa-star-o'></i>"
        }
    },
    created: function() {
        
    }
}
</script>

<style>

</style>
