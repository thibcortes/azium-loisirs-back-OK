import api from '~/api'

export const state = () => ({
  activites: []
})

export const actions = {
  async fetchActivities({ commit }) {
    let data = await api.getCPT('activites-loisirs')
    commit('SET_ACTIVITES', data)
  },

}

export const mutations = {
  SET_ACTIVITES(state, activites) {
    state.activites = activites
  },
}

export const getters = {
  getActivites(state) {
    return state.activites
  },
}
