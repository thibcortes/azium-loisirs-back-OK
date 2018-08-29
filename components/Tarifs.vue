<template>
    <div id="tarifs">
       <!-- <img :src="tarifs.image"> -->
        
        <ul 
        :style="'background-color:'+tarifs.couleur"

        >
            <li id="image"></li>
            <li id="intitulés" v-if="tarifs.titre_tarifs!=='Duo Délires'&& tarifs.titre_tarifs!=='Duo Sensations'" >
                <h2 >{{tarifs.titre_tarifs}}</h2>
                <p>{{tarifs.billet1}}</p>
                <p>{{tarifs.billet2}}</p>
                <p id="detail">{{tarifs.details}}</p>
            </li>
            <li id="prix">
                <h2 v-if="tarifs.titre_tarifs=='Duo Délires'|| tarifs.titre_tarifs=='Duo Sensations'" >{{tarifs.titre_tarifs}}</h2>
                <p>{{tarifs.prix1}}€</p>
                <p v-if="tarifs.titre_tarifs=='Duo Délires'|| tarifs.titre_tarifs=='Duo Sensations'">+</p>
                <p v-if="tarifs.prix2 !== ''">{{tarifs.prix2}}€</p>
                <p v-if="tarifs.titre_tarifs=='Duo Délires' || tarifs.titre_tarifs=='Duo Sensations'">=</p>
                <p style="text-decoration:line-through" v-if="tarifs.titre_tarifs=='Duo Délires' || tarifs.titre_tarifs=='Duo Sensations'">{{Number(tarifs.prix1) + Number(tarifs.prix2)}}€</p>
                <p style="font-size:22pt" v-if="tarifs.titre_tarifs=='Duo Délires'  || tarifs.titre_tarifs=='Duo Sensations'">16.90€</p>
                <a class="btn-tarifs" v-if="tarifs.titre_tarifs=='Duo Délires' || tarifs.titre_tarifs=='Duo Sensations'"><i id="cart" class="fas fa-shopping-cart"></i>Réserver ! </a>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        tarifs:{
            default:null,
            type:Object
        }

    },
    
}
</script>

<style lang="scss" scoped>
#tarifs{
    text-align:left;
    ul{
        margin-bottom:30px;
        justify-content:center;
    p{
        margin-top: 1rem;
    margin-bottom: 1rem;
    font-size:18px;
    }
    margin: 0 20px;
    padding: 10px;
    border-radius: 10px;
    color: white;
    display: flex;
    #prix{
        text-align:center;
        padding-top: 10%;
        margin-left:10px;
        margin-bottom: 20px;
            
    }
    #detail{
            margin-top:0;
            margin-bottom:0;
            font-size:13px;

    }
    h2{
        font-weight:bold;
    }
    }
    .btn-tarifs{
        font-size: 10pt;
        color: #d84551;
        background-color: #fff;
        padding: 7px 10px;
        border-radius: 6px;
        
        i{
            margin-right:10px;
        }
    }
}
</style>
