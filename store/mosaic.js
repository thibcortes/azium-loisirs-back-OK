import api from '~/api'

export const state = () => ({
  blocs: []
})

export const actions = {
  async fetchBlocs({ commit }) {
    let data = await api.getCPT('mosaic')
    commit('SET_BLOCS', data)
  },

}
export const mutations = {
  SET_BLOCS(state, blocs) {
    state.blocs = blocs
  },
}

export const getters = {
  getBlocs(state) {

    return state.blocs
  },
}
