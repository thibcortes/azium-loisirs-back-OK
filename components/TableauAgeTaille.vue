<template>
    <div id="tableau-age">
        <ul>
            <li class="ta-header">
                <h4>
                    <img src="http://azium.fr/wp-content/uploads/2018/07/mother-and-child-with-balloons.png" alt="activites azium lyon"> Activités
                </h4>
                <h4>
                    <img src="http://azium.fr/wp-content/uploads/2018/07/height.png" alt="taille age activites azium lyon"> Age &amp; Taille
                </h4>
                <h4>
                    <img src="http://azium.fr/wp-content/uploads/2018/07/file.png" alt="description activites confluence"> Description
                </h4>
                <h4>
                    <img src="http://azium.fr/wp-content/uploads/2018/07/icon.png" alt="infos">
                </h4>
            </li>
            <li v-for="(post, i) in posts" :key="i" v-if="post.id<375">

                <div class="big-size">
                    <strong>{{post.title}}</strong>
                </div>
                <div class="big-size">
                    {{post.age}}
                </div>
                <div>
                    {{post.content}}
                </div>
                <div>
                    <a :href="post.buttonLink">{{post.buttonLabel}}</a>
                </div>
            </li>
        </ul>
        <h2 class="delimiter">Uniquement pendant les vacances</h2>
        <ul>
            <li v-for="(post, i) in posts" :key="i" v-if="post.id>=375" class="no-border">
                <div class="big-size">
                    <strong>{{post.title}}</strong>
                </div>
                <div class="big-size">
                    {{post.age}}
                </div>
                <div>
                    {{post.content}}
                </div>
                <div>
                    <a :href="post.buttonLink">{{post.buttonLabel}}</a>
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
        }
    },
    computed: {
        posts() {
            return this.$store.getters['activites/getActivites']
        },
    },
}
</script>

<style lang="scss" scoped>
#tableau-age {
  display: block;
  width: 1100px;
  margin: auto;
  margin-bottom: 2em;
  max-width: 90%;
}
#tableau-age ul {
  padding: 0;
  margin: 0;
  width: 100%;
}
#tableau-age ul li.ta-header {
  text-align: center;
  background-color: #d94d58;
  color: #fff;
}

#tableau-age ul li {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: stretch;
}
#tableau-age h2.delimiter {
  background-color: #d94d58;
  margin: 0;
  padding: 0.8em 0;
  color: #fff;
  text-align:center;
}
#tableau-age ul li > *:first-child {
  text-transform: uppercase;
}

#tableau-age ul li > *.big-size {
  font-size: 1.8rem;
}
#tableau-age ul li > * {
  padding: 1em 0.5em;
  flex: 4;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 1.4rem;
}
#tableau-age ul li > *.big-size {
  font-size: 1.8rem;
}

#tableau-age ul li > * {
  padding: 1em 0.5em;
  flex: 4;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 1.4rem;
}
*,
*:after,
*:before {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
#tableau-age ul li:not(.ta-header) > *:nth-child(3) {
  text-align: left;
  justify-content: left;
}
#tableau-age ul li > *:nth-child(3) {
  flex: 10;
}
#tableau-age ul li > * {
  padding: 1em 0.5em;
  flex: 4;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 1.4rem;
}
#tableau-age ul li > * {
  padding: 1em 0.5em;
  flex: 4;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 1.4rem;
}
#tableau-age ul li:not(.ta-header) {
  border-bottom: 1px solid #a5a5a5;
}

#tableau-age ul li>*:last-child a {
    text-decoration: none;
    background-color: #d94d58;
    color: #fff;
    padding: 8px 14px;
    border-radius: 3px;
}
@media screen and (max-width: 1200px){

#tableau-age {
    display: block;
    width: 1100px;
    margin: auto;
    margin-bottom: 2em;
    max-width: 100%;
        zoom: 0.5;
}


#activites-age{
    h1{
        margin-left:25%;
    }
}

.ta-header {
    h4{
        img{

    height:auto;
    width:25px;
        }
    }
}
}


</style>
