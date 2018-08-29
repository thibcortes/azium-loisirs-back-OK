<template>
    <div id="activites-loisirs-lyon">
        <div id="offres">
            <ul>
                <li v-for="(offre, i) in offres" :key="i" v-if="i<375">
                    
                    <div id="image-activite">
                        <a :href="offre.boxEnfant['enfant_badge_lien']">
                        <h2>{{offre.title}}</h2>
                        <img id="image" :src="offre.image">
                        </a>
                        </div>
                    <div id="texte-activite">{{offre.boxEnfant['enfant_badge_text']}}</div>
                    <div id="bouton"><a class="btn-loisirs" :href="offre.buttonLink">Découvrir<i class="fa fa-chevron-right" aria-hidden="true"></i></a></div>
                </li>
            </ul>
        </div>
       
        <ul id="avis">
            <li v-for="(a, i) in avis" :key="i">
                <avis :content="a" ></avis>
                
               
            </li>
            
        </ul>
        
    </div>
</template>

<script>
import api from '~/api'

export default {
    
    async asyncData(){
        let res = await api.getCPT('avis')
        let offre = await api.getCPT('activites-loisirs')
        return {
            avis:res,
            offres:offre
        }
    }
    
}
</script>

<style lang="scss" scoped>
#offres{
    margin-top:30px;

li{
        flex-grow: 1;
    text-align: center;
    margin: 0 1.5em;
    background-color: #edefed;
    padding: 0;
    max-width: 400px;
    border-radius: 3px;
    min-width: 200px;
    position: relative;
    margin-bottom: 3em;

    .btn-loisirs{
        display: inline-block;
    margin: 0 1em;
    margin-bottom: 1em;
    color:white;
    padding: 7px 14px;
    border-radius: 3x;
    font-weight: bold;
    font-size: 18px;
        background-color: #D84551;
            border-radius: 6px;
    i{
        margin-left: 5px;
    }

    }
    #texte-activite{
        padding:2rem;
    }
}


#image-activite{
    img{
        display:block;
        width:100%;
        filter: brightness(60%);
        
        
    }
    
    h2{
    color:white;
    z-index:1;
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    }
}
}
</style>
