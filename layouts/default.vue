<template>
  <div id="app">
    <site-header></site-header>
    <div id="main">
      <nuxt/>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>

export default {
  computed: {
  },
  data() {
    return {
      height: 0,
      toolbarClass: "top"
    }
  },
  methods: {
    checkViewport() {
      if (window.scrollY > this.height) {
        this.toolbarClass = 'bottom'
      }
      else {
        this.toolbarClass = 'top'
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.checkViewport)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkViewport);
  },
  mounted() {
    this.height = window.innerHeight
    window.onresize = () => {
      this.height = window.innerHeight
    }
  }
}
</script>

<style lang="scss">
</style>