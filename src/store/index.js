import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ProductList: [
      {
        category: "Shoes",
        brand: "Nike Sportswear",
        model: "AIR MAX PLUS III UNISEX - Sneakers",
        price: 1795
        
      },
      { 
        category: "Shoes",
        brand: "Nike Sportswear",
        model: "AIR MAX PLUS III UNISEX - Sneakers",
        price: 1795
      },
      {
        category: "Shirt",
        brand: "Nike Sportswear",
        model: "AIR MAX PLUS III UNISEX - Sneakers",
        price: 1795
      },
      { 
        category: "Shirt",
        brand: "Nike Sportswear",
        model: "AIR MAX PLUS III UNISEX - Sneakers",
        price: 1795
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
