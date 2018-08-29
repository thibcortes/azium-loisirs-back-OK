<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404">{{error.message}} {{error.type}}</h1>
        <h1 v-else>Une erreur s'est produite</h1>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'default',
    mounted() {
        console.log(this.error);
    }
}
</script>