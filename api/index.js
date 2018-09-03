import axios from 'axios'
import config from './config'
import functions from './functions.js'

axios.defaults.baseURL = config[process.env.NODE_ENV]

const v2 = '/wp-json/wp/v2/'
const menuNp = '/wp-json/wp-api-menus/v2/'
const basic = '/wp-json/'

export default {
  getPosts() {
    return axios.get(`${v2}posts`)
  },
  getPostById(id) {

    return axios.get(`${v2}posts/${id}`)
  },
  getPostBySlug(slug) {
    return axios.get(`${v2}posts?slug=${slug}`).then(res => {
      return functions.formatPost(res.data[0])
    })
  },
  getPages() {
    return axios.get(`${v2}pages`)
  },
  getPageById(id) {
    return axios.get(`${v2}pages/${id}`)
  },
  getPageBySlug(slug) {
    return axios.get(`${v2}pages?slug=${slug}`).then(res => {
      
      return functions.formatPage(res.data[0])
    })
  },
  getMenus() {
    return axios.get(`${basic}menus/v1/menus`)
  },
  getMenu(slug) {
    return axios.get(`${basic}menus/v1/menus/${slug}`)
  },
  getSettings() {
    return axios.get(`${basic}settings`)
  },
  getAllMenus() {
    return axios
      .get(`${menuNp}menu-locations`)
      .then(res => {
        let menus = res.data
        let promises = []
        for (let m in menus) {
          promises.push(axios.get(`${menuNp}menu-locations/${m}`))
        }
        return Promise.all(promises).then(results => {
          let finalResult = {}
          results.forEach((r, i) => {
            let slug = Object.keys(menus)[i]
            finalResult[slug] = r.data
          })
          return finalResult
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  getCPT(type) {
    
    return axios.get(`${v2}${type}?_embed`).then(res => {
      
      return functions.formatPosts(res.data)
    })
  },
  
  getOneCPT(type, slug) {
    return axios.get(`${v2}${type}?_embed&slug=${slug}`).then(res => {
      return functions.formatPost(res.data[0])
    })
  },
  
}
