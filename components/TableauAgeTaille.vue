<template>
    <div id="tableau-age">
        <ul>
            
            <li v-for="(post, i) in posts" :key="i" v-if="post.id<375">
                <div id="tarif">
                    <div id="box-tarif">
                        <h3>{{post.title}}</h3>
                    <div id="texte-tarif">
                        <p>{{post.age}}</p>
                        
                        <article>{{post.content}}</article>
                    </div>
                    <a :href="post.buttonnLink" style="background-color:#5bc0de;">En savoir plus</a>
                    </div>
                    <img src=""></div>
            </li>
        </ul>
        <h2 class="delimiter">Uniquement pendant les vacances</h2>
        <ul>
            <li v-for="(post, i) in posts" :key="i" v-if="post.id>=375" class="no-border">
                <div id="tarif">
                    <div id="box-tarif">
                        <h3>{{post.title}}</h3>
                    <div id="texte-tarif">
                        <p>{{post.age}}</p>
                        
                        <article>{{post.content}}</article>
                    </div>
                    <a :href="post.buttonnLink" style="background-color:#5bc0de;">En savoir plus</a>
                    </div>
                    <img src=""></div>
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
#tableau-age{
    position:relative;
    ul{
        display:flex;
        flex-wrap:wrap;
        position:relative;
        justify-content:space-around;
        li{
                position:relative;
                margin: 20px 0;
                color: white;
                text-align: center;
                width: 250px;
                padding-top: 70px;
                height: 415px;
                background-color:rgba(0, 0, 0, 0.5);
                border-radius: 5px;
                a{
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    left: 0;
                    border-radius: 5px;
                }
                #texte-tarif{
                    margin: 10px 0;
                }
        }
    }
}



</style>
