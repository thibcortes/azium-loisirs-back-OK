<template>
    <div>
        {{post.title.rendered}}
        <a href="/actualites">Retour aux actualités</a>
    </div>
</template>

<script>
import api from '~/api'
export default {
    async asyncData(context) {
        let res = await api.getPostBySlug(context.params.slug)
        return {
            post: res.data[0]
        }
    },
    computed: {
        slug() {
            return this.$route.params.slug
        }
    }
}
</script>

<style>
</style>
