import Vue from 'vue'
import SiteHeader from '~/components/SiteHeader'
import SiteFooter from '~/components/SiteFooter'
import Slider from '~/components/Slider'
import Mosaic from '~/components/Mosaic'
import TableauAgeTaille from '~/components/TableauAgeTaille'
import PageTitle from '~/components/PageTitle'
import Formulaire from '~/components/Formulaire'
import Avis from '~/components/Avis'
import Tarifs from '~/components/Tarifs'
import StarRating from 'vue-star-rating'

Vue.component('page-title', PageTitle)
Vue.component('site-header', SiteHeader)
Vue.component('site-footer', SiteFooter)
Vue.component('slider', Slider)
Vue.component('mosaic', Mosaic)
Vue.component('tableau-age-taille', TableauAgeTaille)
Vue.component('formulaire', Formulaire)
Vue.component('avis', Avis)
Vue.component('tarifs', Tarifs)
Vue.component('stars', StarRating)

