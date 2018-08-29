<template>
    <div id='activites-vacances'>
        <page-title :title="'Activités vacances'"></page-title>
        
            
        <div id='matin'>
            <div id="imageContain">
                <img :src="matin.boxLoisirs.image">

            </div>
            <page-title :title="matin.boxLoisirs.titre"></page-title>
            
            <div id="content">
            <p>{{matin.boxLoisirs.description}}</p>

            </div>
            <article>{{matin.boxLoisirs.infos}}</article>
            <div id="button">
                <a target="_blank" href="https://azium.tickeasy.com/fr-FR/produits?famille=1817961597290400000">Réservation</a>
            </div>
        </div>
        <hr>
        <div id='decouverte'>
            <div id="imageContain">
                <img :src="decouverte.boxLoisirs.image">

            </div>
            <page-title :title="decouverte.title"></page-title>
            
            <div id="content">
            <p>{{decouverte.boxLoisirs.description}}</p>

            </div>
            <article>{{decouverte.boxLoisirs.infos}}</article>
            <div id="button">
                <a target="_blank" href="#">Bientôt disponible</a>
            </div>
        </div>
    </div>
</template>

<script>
import api from '~/api'

export default {
    async asyncData() {
        let res1 = await api.getPageBySlug('activite-vacances-matinees-aventures')
        let res2 = await api.getPageBySlug('activite-vacances-atelier-decouverte-escalade-6-14-ans')
        return {
            matin: res1,
            decouverte: res2
        }
    },
}
</script>

<style lang="scss" scoped>
#activites-vacances{
    #imageContain{
        text-align:center;
        margin:15px;
    }
    h2{
        margin:0 10px;
        text-align:center;
    }
    #content{
        padding: 0 20px;
        
        p{
            margin: 10px 0;
            font-size:1rem;
            text-align:justify;
        }
    }
    article{
            padding: 0 20px;
            font-style:italic; 
    }
    #button{
        text-align:center;
        margin-top:20px;
        a{
            display: inline-block;
    margin: 0 1em;
    margin-bottom: 1em;
    color: white;
    padding: 7px 14px;
    border-radius: 3x;
    font-weight: bold;
    font-size: 18px;
    background-color: #D84551;
    border-radius: 6px;
        }
    }
}
</style>
