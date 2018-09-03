<template>
    <div class="avis">
        <div class="reviews">
            <div class="item-review">
                <h3>{{this.content.boxAvis['quote-avis']}}</h3>
                <p>{{this.content.boxAvis['text-avis']}}</p>
                <div class="starbox">
                    <no-ssr>
                        <star-rating :item-size="30" inactive-color="#000" active-color="#cc1166" :increment="0.5" v-model="rating">
                        </star-rating>
                    </no-ssr>
                </div>
                <div class="button-note">
                    <a class="btn btn-default" href="ok">En savoir plus</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        content: {
            default: null,
            type: Object
        },
        full: false,
        half: false,
        empty: false,
    },
    computed: {
        rating() {
            return Number(this.content.boxAvis['note-avis']) || 0
        }
    }
}
</script>


<style lang="scss" scoped>
.avis {
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
  .starbox {
    padding-left: 20%;
    margin-bottom: 15px;
  }

  a {
    background-color: #d84551;
    padding: 7px 10px;
    color: #fff;
    font-size: 10pt;
    border-radius: 2px;
    display: inline-block;
  }

  h3 {
    color: #d84551;
    font-size: 2.4rem;
  }

  p {
    color: #434343;
    font-size: 1.5rem;
    letter-spacing: 0.04rem;
    margin-bottom: 25px;
    margin-top: 15px;
  }
}
</style>
