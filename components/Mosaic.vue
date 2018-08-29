<template>
    <!-- <div id="mosaic">
        <ul class="list-mosaic">
            <li v-for="(bloc, i) in mosaic" :key="i">
                <div class="bloc-home type-2">
                    <a target="" :href="bloc.redirection">
                        <img :src="bloc.image">
                        <div class="bloc-text">
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            <span class="small-text ng-binding">{{bloc.title}}</span>
                            <h2 class="ng-binding">
                                <span v-html="bloc.content"></span>
                            </h2>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </div> -->
    <div id="mosaic">
    
        <ul class="list-mosaic">
            <li v-for="(bloc, i) in mosaic" :key="i">
                <div :class="'bloc-home ' + bloc.classBloc">
                    <a target="" :href="bloc.redirection">
                        <img :src="bloc.image">
                        <div class="bloc-text">
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            <span class="small-text ng-binding">{{bloc.title}}</span>
                            <h2 class="ng-binding">
                                <span v-html="bloc.content"></span>
                            </h2>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import api from '~/api'
export default {
    data() {
        return {
            slider: [],
        }
    },
    computed: {
        mosaic() {
            return this.$store.getters['mosaic/getBlocs']
        }
    },
}
</script>

<style lang="scss">
ul.list-mosaic {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  li {
    border: 10px solid white;
    display: inline-block;
    flex-grow: 1;
    height: auto;
    width: calc(100% * (1 / 3) - 10px - 1px);
    .bloc-home{
        display: inline-block;
    width: 30%;
    margin: 0 0.5%;
    position: relative;
    vertical-align: top;
    cursor: pointer;
    letter-spacing: 1pt;
        img{
                height: auto;
    margin: auto;
    width: 100%;
    display: block;
        }

    }
    .type-1 {
        .bloc-text{

        color:red;
        }
    }
    .type-2 {
            width: 49%;
        .bloc-text{
                position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.38);
    padding: 2% 3%;
    min-width: 150px;
    text-align: left;
    
        color:blue;
        }
    }
    .type-3 {
        .bloc-text{

        color:green;
        }
    }
    img {
      width: 100%;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
}
</style>
