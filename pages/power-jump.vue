<template>
    <div id="parcours-aventure">
        <div id="offre">
            <h1>{{page.boxLoisirs.titre}}</h1>
            <div class="slider">{{page.image}}</div>
            <article>{{page.boxLoisirs.description}}</article>
            <h3>INFOS PRATIQUES</h3>
            <span id="resa">Réservation en ligne fortement conseillée</span>
            <article>{{page.boxLoisirs.infos}}</article>
            <a href="#tarifs-box" class="btn-loisirs">Accéder aux tarifs</a>
        </div>
        <div id="tarifs-box">

        <div class="tarifs-1">
            
            <tarifs :tarifs='pw'></tarifs>
            
            <a class="btn-loisirs" @click="showTarifs=!showTarifs">Duo Délires</a>
             
        </div>
        <transition name="fade">
    
        <div v-if="showTarifs">
            <div style='text-align:center;width:100%;margin-bottom:20px;'><i class="fas fa-plus-circle" style="font-size:30px"></i></div>
            <tarifs :tarifs='pa'></tarifs>
            <hr>
            <tarifs :tarifs='ds'></tarifs>
        </div>
  </transition>
    
        

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
        let page = await api.getPageBySlug('power-jump')
        let pa = await api.getOneCPT('tarifs-enfants', 'pa')
        let pw = await api.getOneCPT('tarifs-enfants', 'pw')
        let ds = await api.getOneCPT('tarifs-enfants', 'ds')
        return {
            page: page,
            pa: pa.box_tarif,
            pw: pw.box_tarif,
            ds: ds.box_tarif
        }
    },
}
</script>

<style lang="scss">
#offre{
    
    #resa{
        width:100%;
        background-color:#662483;
        color:white;
        font-size:15px;
        border-radius:6px;
        padding:0 20px;
    }
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
