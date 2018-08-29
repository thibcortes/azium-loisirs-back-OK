<template>
    <div id="horaire-plan">
        
        <h1>Horaires</h1>
            <div id="container-horaire">
                <div id="horaire">
                    <p>AZIUM<sup>1</sup></p>
                </div>
                <p id="hor" style=" position:absolute; top:95px;">10h</p>
                <p id="hor" style=" position:absolute; top:95px; right:15px">23h</p>
                <div id="horaire" style="background-color:#3eabd3">
                    <p>UNIVERS ENFANT<sup>1</sup></p>
                </div>
                <p id="hor" style=" position:absolute; top:175px;">10h</p>
                <p id="hor" style=" position:absolute; top:175px; right:15px">23h</p>
                <div id="horaire" style="background-color:#662483">
                    <p>FUN CLIMBING<sup>1</sup></p>
                </div>
                <p id="hor" style=" position:absolute; top:256px;">10h</p>
                <p id="hor" style=" position:absolute; top:256px; right:15px">23h</p>
                <div id="horaire" style="background-color:#dd9d13; margin:0 80px;">
                    <p>PARCOURS AVENTURE<sup>2</sup></p>
                </div>
                <p id="hor" style=" position:absolute; top:335px; left:90px">13h30</p>
                <p id="hor" style=" position:absolute; top:335px; right:95px">18h30</p>
                <div id="horaire" style="background-color:#949f17; margin:0 80px; margin-top:40px;">
                    <p>POWER JUMP<sup>2</sup></p>
                </div>
                <p id="hor" style=" position:absolute; top:415px; left:90px">13h30</p>
                <p id="hor" style=" position:absolute; top:415px; right:95px">18h30</p>

                <div id="detail">
                <p>(1) NOCTURNE jusqu’à minuit le mardi soir. Fermeture à 22h le dimanche soir. </p>
                <p>(2) Hors vacances : Mercredi/Samedi/Dimanche. Pendant les vacances : Tous les jours</p>
                </div>
                
        </div>

            <h1 style="margin-top:20px;">Plan d'accès</h1>
        <div id="container-map">
            <div id="plan">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.5128028270765!2d4.815709951387323!3d45.74086452285791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebcecabb8f4d%3A0xae27ebf2ec77dbdb!2sAZIUM+Confluence!5e0!3m2!1sfr!2sfr!4v1535039357860"  frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
        
    </div>
</template>

<script>


export default {

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

