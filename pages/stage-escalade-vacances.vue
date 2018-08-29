<template>
    <div id='stage-escalade-vacances'>
        {{page}}
    </div>
</template>

<script>
import api from '~/api'

export default {
    async asyncData() {
        let res = await api.getPageBySlug('stage-escalade-vacances')
        return {
            page: res,
        }
    },
}
</script>

<style lang="scss">
</style>
