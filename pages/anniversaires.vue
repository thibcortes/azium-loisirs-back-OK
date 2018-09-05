<template>
    <div id='anniversaires'>
        <page-title icon="fas fa-birthday-cake" :title="page.title"></page-title>
        <div id="content">
            {{page.content}}
        <div id='tarifs'>
            <ul>
                <li v-for="(tarif, i) in tarifs" :key='i'>
                    
                    <div id='tarif'>
                        <div id='box-tarif'>

                        <h3>{{tarif.box_tarifs_anniv.nom}}</h3>
                        <div id='texte-tarif'>

                        <p>{{tarif.box_tarifs_anniv.age}}</p>
                        <p style='font-size:2.5rem'>{{tarif.box_tarifs_anniv.prix}} €</p>
                        <p>{{tarif.box_tarifs_anniv.detail1}}</p>
                        <p>{{tarif.box_tarifs_anniv.detail2}}</p>
                        <p>{{tarif.box_tarifs_anniv.detail3}}</p>
                        <p>{{tarif.box_tarifs_anniv.detail4}}</p>

                        </div>
                        <a :href="tarif.box_tarifs_anniv.reserver" :style="'background-color:'+tarif.box_tarifs_anniv.couleur"><i class="fas fa-birthday-cake"></i>Réserver!</a>
                        </div>
                        <img :src="tarif.image">

                    </div>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
import api from '~/api'

export default {
    async asyncData() {
        let res = await api.getPageBySlug('anniversaires')
        let tarifs = await api.getCPT('tarifs-anniv')
        return {
            page: res,
            tarifs: tarifs
        }
    },
}
</script>

<style lang="scss" scoped>
#tarifs{
    ul{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
        li{
            
            margin-top:25px;
            img{
                    border-radius: 5px;
                }
            #box-tarif{
                #texte-tarif{
                    p{
                        margin-top:10px;
                        font-size:1em;
                    }
                }
                h3{
                    position: absolute;
                    top: 5px;
                    left: 25%;
                    right: 25%;
                    text-transform:uppercase;
                    font-weight:bold;
                }
                
                position: absolute;
                color: white;
                text-align: center;
                width: 250px;
                padding-top: 70px;
                height: 415px;
                background-color:rgba(0, 0, 0, 0.5);
                border-radius: 5px;
            }
            a{
                width: 250px;
                background-color: blue;
                position: absolute;
                left: 0;
                bottom: 0;
                text-align: center;
    /* margin-top: 380px; */
                height: 35px;
                padding-top: 5px;
                color: white;
                i{
                    margin-right:10px;
                }
            }
        }
    }
    
}
#content{
    text-align:justify;
    margin:25px;
}
</style>
