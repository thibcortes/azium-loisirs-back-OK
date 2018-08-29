<template>
    <div id="activites-age">
        <h1>Du fun pour tous les âges!</h1>
        <tableau-age-taille></tableau-age-taille>
    </div>
</template>

<script>
export default {
    async fetch({ store }) {
        let res = await store.dispatch('activites/fetchActivities')
    },
}
</script>

<style lang="scss">
h1{
    text-align:center;
    margin: 1.5em 0;
}
</style>
