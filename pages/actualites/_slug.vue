<template>
    <div>
        {{post.title}}
        {{post.content}}
        <a href="/actualites">Retour aux actualités</a>
    </div>
</template>

<script>
import api from '~/api'
export default {
    async asyncData(context) {
        let res = await api.getOneCPT('posts', context.params.slug)
        return {
            post: res
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
