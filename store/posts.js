import api from '~/api'

export const state = () => ({
  list: [],
})

export const actions = {
  async fetchPosts({ commit }) {
    let res = await api.getPosts()
    commit('SET_POSTS', res.data)
  },
}
export const mutations = {
  SET_POSTS(state, posts) {
    state.list = posts
  },
}

export const getters = {
  get(state) {
    return state.list
  },
}
