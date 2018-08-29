<template>
    <div id='mentions-légaless'>
        <div id='contenu'>
            <h1>MENTIONS LEGALES</h1>
            <p>{{page}}</p>
        </div>

    </div>
</template>

<script>
import api from '~/api'

export default {
    async asyncData() {
        let res = await api.getPageBySlug('mentions-legales')
        return {
            page: res,
        }
    },
}
</script>

<style lang="scss">
</style>
