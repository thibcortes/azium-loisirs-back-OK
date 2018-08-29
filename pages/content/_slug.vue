<template>
    <div>
        {{page}}
    </div>
</template>

<script>
import api from '~/api'

export default {
    async asyncData({ params, error }) {
        let { data } = await api.getPageBySlug(params.slug)
        if (data.length === 0) {
            error({ statusCode: 404, message: 'Page non trouvée', type: 'page' })
        }
        else {
            return {
                page: data
            }
        }
    },
    data() {
    }
}
</script>

<style>
</style>
