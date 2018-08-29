<template>
    <div id="activite-enfants">
        <div id="offre">
            <h1>{{page.boxLoisirs.titre}}</h1>
            <div class="slider">
                <img :src="image">
            </div>
            <article>{{page.boxLoisirs.description}}</article>
            <h3>Infos pratiques</h3>
            
            <article>{{page.boxLoisirs.infos}}</article>
            <a href="#tarifs-box" class="btn-loisirs">Accéder aux tarifs</a>
        </div>
        <div id="tarifs-box">

        <div class="tarifs-1">
            
            <tarifs :tarifs='fc'></tarifs>
            
            <a class="btn-loisirs" @click="showTarifs=!showTarifs">Duo Délires</a>
             
        </div>
        
        <div v-if="showTarifs">
            <hr>
            <tarifs :tarifs='ue'></tarifs>
            <hr>
            <tarifs :tarifs='dd'></tarifs>
    </div>
    
        

        </div>
    </div>
</template>

<script>
import api from '~/api'

export default {
    data(){
        return{
            showTarifs:false
        }
    },
    async asyncData() {
        let page = await api.getPageBySlug('activites-enfant')
        let ue = await api.getOneCPT('tarifs-enfants', 'fc')
        let fc = await api.getOneCPT('tarifs-enfants', 'ue')
        let dd = await api.getOneCPT('tarifs-enfants', 'dd')
        return {
            page: page,
            fc: fc.box_tarif,
            ue: ue.box_tarif,
            dd: dd.box_tarif,
            image:page.boxLoisirs.image
        }
    },
    
}
</script>

<style lang="scss">
#offre{
    margin-top:15px;
    text-align:center;
    article{
            padding: 10px 20px;
    text-align: justify;
    
    }
}
.tarifs-1{
    

    text-align:center;
    
}
    .btn-loisirs{
    display: inline-block;
    margin: 10px 1em;
    margin-bottom: 1em;
    color:white;
    padding: 7px 14px;
    border-radius: 3x;
    font-weight: bold;
    font-size: 18px;
    background-color: #D84551;
    border-radius: 6px;
    }
</style>
