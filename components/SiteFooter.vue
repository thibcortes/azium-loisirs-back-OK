<template>
    <div id="footer">
        <ul>
            <li v-for="(item, i) in menu" :key="i">
                <a :href="item.path">{{item.title}}</a>
                <ul v-if="item.children">
                    <li v-for="(child, ic) in item.children" :key="'child' + ic">
                        <a :href="child.path">{{child.title}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        menu() {
            return this.$store.getters.menuBySlug('secondary-footer-menu')
        }
    }
}
</script>

<style lang="scss">
#footer {
  background-color: grey;
  bottom: 0;
  margin-top:10px;
  text-decoration: none;
  color: white;
  width: 100%;
    background-color: #2f2f2f;
    padding: 5px 20px;
   
    border-bottom: 1px solid #C7C7C7;
    padding-bottom: 25px;

    ul{
        text-align:center;
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        li{
            margin: 1rem;
            font-size:13pt;
            a{
                color:#c7c7c7;
            }
        }
    }
    
}
</style>
