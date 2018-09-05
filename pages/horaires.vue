<template>
    <div id="horaire-plan">
        
        <h1>{{page.title}}</h1>
        <article>{{page.content}}</article>
        <img :src="page.image">

            
        
    </div>
</template>

<script>
import api from '~/api'

export default {
async asyncData() {
        
        let page = await api.getPageAndImageBySlug('horaires')
       
        return {
            
            page:page,

            
        }
    },
}
</script>

<style lang='scss' scoped>
#horaire-plan{
    padding: 10px 15px;
    h1{
            text-align:center;
      }
    #container-horaire{
        margin-top:30px;
        #detail{
            margin-top:20px;
            font-style:italic;
        }
    }
    #horaire{
        background-color:#d84551;
        text-align:center;
        color:white;
        height:40px;
        border-radius:5px;
        margin-bottom:40px;
        p{
            padding-top:10px;
            font-weight:bold;
        }
        
    }
        #hor{
            width:fit-content;
            position:absolute;
            font-weight:bold;
            
        }
    
    
    
    #container-map{
        margin-top:20px;
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;
        height:0;
        iframe{
            left:0;
            top:0;
            height:100%;
            width:100%;
            position:absolute;
        }
        
    }

}
</style>

