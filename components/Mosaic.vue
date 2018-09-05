<template>
    <div id="mosaic">
        <ul class="list-mosaic">
            <li v-for="(bloc, i) in mosaic" :key="i">
                <a class="bloc-wrapper" :href="bloc.redirection">
                    <img :src="bloc.image" :alt="bloc.alt || bloc.title">
                    <div class="bloc-content">
                        <h3 v-html="bloc.title"></h3>
                    </div>
                </a>
                <!--<div :class="'bloc-home ' + bloc.classBloc">
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
                </div>-->
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
@import "~assets/css/variables.scss";
ul.list-mosaic {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  li {
    border: 10px solid white;
    display: inline-block;
    flex-grow: 1;
    height: auto;
    .bloc-wrapper {
      display: block;
      position: relative;
      &:hover {
        .bloc-content {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
      img {
        display: block;
        width: 100%;
        height: auto;
        margin: auto;
      }
    
      .bloc-content {
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0);
        transition: background-color 0.3s;
        h3 {
          background-color: rgba(0, 0, 0, 0.38);
          width: 100%;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
}

@media screen and (min-width: $tablet) {
  ul.list-mosaic {
    flex-direction: row;
    li {
      width: calc(100% * (1 / 3) - 10px - 1px);
    }
  }
}

@media screen and (min-width: $desktop) {
  ul.list-mosaic {
    li {
      width: calc(100% * (1 / 4) - 10px - 1px);
    }
  }
}
</style>
