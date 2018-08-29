<template>
    <div>
        <ul>
            <li v-for="(post, i) in posts" :key="i">
                <a :href="'/actualites/' + post.slug">
                    {{post.title.rendered}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    async fetch({ store, params }) {
        await store.dispatch('posts/fetchPosts')
    },
    computed: {
        posts() {
            return this.$store.getters['posts/get']
        }
    }
}
</script>

<style>
</style>
