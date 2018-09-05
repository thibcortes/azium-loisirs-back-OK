<template>
  <div id="home">
    
    <no-ssr>
     <carousel
      :per-page="1"
      :mouse-drag='true' 
      :navigationEnabled='true'
      :speed=1000
      :loop='true'
      :autoplay="true"
      :autoplayTimeout="6000"
      >
    <slide v-for="(item, i) in items" :key="i">
      <a :href="item.boxSlide.redirection"><img :src="item.image" :alt="item.boxSlide['titre-slide']">
      <h1 class="titre-slide">{{item.boxSlide['titre-slide']}}</h1>
      <h4 class="sous-titre">{{item.boxSlide['sous-titre']}}</h4>
      </a>
    </slide>
    
  </carousel>

    </no-ssr>
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
  async asyncData() {
        let slides = await api.getCPT('slides')
       
        return {
            items: slides,

            
        }
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
.titre-slide{
    padding-left:40px;
    position: absolute;
    top: 250px;
    width: 100%;
    background-color: rgba(0,0,0,0.3);
    color: white;
    
}

.sous-titre{
position: absolute;
    top: 304px;
    background-color: rgba(00,0,0,0.3);
    width: 100%;
    color: white;
    text-align: center;
}
</style>
