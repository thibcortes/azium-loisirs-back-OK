<template>
  <div id="home">
    <slider></slider>
    <mosaic id="mosaic"></mosaic>
  </div>
</template>

<script>

import api from '~/api'
export default {
  data() {
    return {
    }
  },
  async fetch({ store }) {
    await store.dispatch('mosaic/fetchBlocs')
  },
  head() {
    return {
      title: "Page d'accueil",
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "~assets/css/variables.scss";
</style>
