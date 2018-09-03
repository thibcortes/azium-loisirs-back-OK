<template>
    <div id="avis">
        
        
        <div class="reviews"><ul>


    
        
            <li>
                <div class="item-review">
                    <h3>{{this.content.boxAvis['quote-avis']}}</h3>
                    <p>{{this.content.boxAvis['text-avis']}}</p>
                        <div class="starbox">
                           <!--  <stars 
                            v-bind:star-size="35"
                            v-bind:rating="rating"
                            v-bind:read-only="true"
                            v-bind:increment="0.5"
                            v-bind:show-rating="false"
                            v-bind:rounded-corners="true"
                            v-bind:active-color="'#222'"
                            v-bind:border-color="'#ffffff00'"
                            ></stars> -->

                        </div>
                    <div class="button-note">
                        <a class="btn btn-default" href="ok">En savoir plus</a>
                        
                    </div>
                </div>
            </li>


        
    
</ul>
    </div>
</div>
</template>

<script>


export default {
    data(){
        return {
            rating: Number(this.content.boxAvis['note-avis'])
        }
    },
    
    props: {
        content: {
            default: null,
            type: Object
        },
        full: false,
        half: false,
        empty: false,
        
        
    },
    
    
    
    
}
</script>


<style lang="scss" scoped>
li{
        flex-grow: 1;
    text-align: center;
    margin: 0 1.5em;
    background-color: #edefed;
    max-width: 400px;
    border-radius: 3px;
    min-width: 200px;
    position: relative;
    margin-bottom: 3em;
    padding: 10px;
    .starbox{
        padding-left: 20%;
        margin-bottom: 15px;
    }

    a{
            background-color: #d84551;
    padding: 7px 10px;
    color: #fff;
    font-size: 10pt;
    border-radius: 2px;
    display: inline-block;
    }

    h3{
        color: #d84551;
    font-size: 2.4rem;
    }

    p{
        color: #434343;
    font-size: 1.5rem;
    letter-spacing: 0.04rem;
    margin-bottom: 25px;
    margin-top: 15px;
    }
}
</style>
