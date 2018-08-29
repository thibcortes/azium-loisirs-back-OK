import api from '~/api'
import Vue from 'vue'

export const state = () => ({
  settings: null,
  menus: {},
  posts: null,
  tarifs: {},
  avis: {},

})

export const mutations = {
  SET_MENUS(state, menus) {
    state.menus = menus
  },
  PUSH_MENU(state, menu) {
    Vue.set(state.menus, menu.slug, menu)
    //state.menus.push(menu)
  },
  SET_SETTINGS(state, settings) {
    state.settings = settings
  },
  SET_IMAGE(state, image) {
    state.images.push(image)
  },
  SET_POST(state, post) {
    state.posts = post
  },
  SET_TARIFS(state, tarif) {
    state.tarifs = tarif
  },
  SET_AVIS(state, avis){
    state.avis = avis
  }

}

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req, app }) {
    let promises = [dispatch('fetchMenus')]
    await Promise.all(promises)
  },
  async fetchMenus({ commit }) {
    let menus = await api.getAllMenus()
    commit('SET_MENUS', menus)
  },
  async fetchSettings({ commit }) {
    /*let { data } = await api.getAll()
    commit('SET_SETTINGS', data)*/
  },
  async fetchImageById({ commit, id }) {
    let image = await api.getImageById(id)
    commit('SET_IMAGE', image)
  },
  async fetchPostById({ commit, id }) {
    let post = await api.getPostById(id)
    commit('SET_POST', post)
  },
  async fetchTarifs({ commit, slug }) {
    let tarif = await api.getCPT(slug)
    commit('SET_TARIFS', tarif)
  },
  async fetchAvis({ commit, slug }) {
    
    let avis = await api.getCPT(slug)
    commit('SET_AVIS', avis)
  }

}

export const getters = {
  settings(state) {
    return state.settings
  },
  menus(state) {
    return state.menus
  },
  menuBySlug(state, slug) {
    return (slug) => {
      return state.menus[slug].map(e => {
        if (e.children) {
          e.children.map(f => {
            let path = f.url.split('/').splice(3).join('/')
            f.path = '/' + path
          })
        }
        let path = e.url.split('/').splice(3).join('/')
        e.path = '/' + path
        return e
      })
    }
  },
  postById(state) {
    return state.posts
  },
  tarifs(state) {
    return state.tarifs
  },
  avis(state){
    return state.avis
  }




}
