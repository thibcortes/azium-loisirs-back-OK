<template>
  <div id="slider">
    <img src='http://via.placeholder.com/1000x250'>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss">
#slider {
  img {
    width: 100%;
    margin: auto;
    display: block;
    height: auto;
  }
}
</style>
