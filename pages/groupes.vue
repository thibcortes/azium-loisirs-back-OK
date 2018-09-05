<template>


    <div id="groupes">
        <div id="groupes-content">
            <h2>Groupes (Centres de loisirs, associations...)</h2>
            <article>{{page.content}}</article>

        </div>
            
        
        <div id='tarifs'>
            <ul>
                <li v-for="(item, i) in items" :key='i'>
                    
                    
                        <div id='box-tarif'>

                        <h3>{{item.boxTarifsGrp.titre}}</h3>
                        <img :src="item.boxTarifsGrp['image-1']">
                        <div id='texte-tarif'>

                        <p>{{item.boxTarifsGrp.age}}</p>
                        <p style='font-size:2.5rem'>{{item.boxTarifsGrp.prix}} €</p>
                        <p>{{item.boxTarifsGrp['univers-1']}}</p>
                        <p>{{item.boxTarifsGrp['univers-2']}}</p>
                        <p>{{item.boxTarifsGrp['univers-3']}}</p>
                        <p>{{item.boxTarifsGrp['univers-4']}}</p>

                        </div>
                        <a :href="item.boxTarifsGrp.image">Réserver!</a>
                        </div>

                    
                </li>
            </ul>
        </div>
        </div>
    

</template>

<script>
import api from '~/api'
export default {
     async asyncData() {
        let groupes = await api.getCPT('tarifs-groupes')
        let page = await api.getPageBySlug('groupes')
       
        return {
            items: groupes,
            page:page,

            
        }
    },
}
</script>

<style lang="scss" scoped>
#groupes{
    #groupes-content{
        
        h2{
            text-align:center;
            margin:20px 0px;
        }
        article{
            text-align:center;
            padding:0 10px;
        }
    }
    #tarifs{
        ul{
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content: space-around;
            li{
                margin:25px 0;
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
                
                position: relative;
                color: white;
                text-align: center;
                width: 250px;
                padding-top: 70px;
                height: 415px;
                background-color:rgba(0, 0, 0, 0.5);
                border-radius: 5px;
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
    }
}
</style>
