import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartProducts: [],
    products: [],
    categories: []
  },
  getters: {
    productById: (state) => (id) => {
      return state.products.find(product =>
        product.id === parseInt(id)
      )
    }
  }
})
