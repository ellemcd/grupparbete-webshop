import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    productList: [
      {
        category: "Shoes",
        brand: "Nike Sportswear",
        model: "AIR MAX PLUS III UNISEX - Sneakers",
        price: 1795,
        images: []
      },
      { 
        category: "Shoes",
        brand: "Nike Sportswear",
        model: "SHOX TL - Sneakers",
        price: 1799,
        images: []
      },
      {
        category: "Shirt",
        brand: "Lacoste",
        model: "Piké",
        price: 999,
        images: []
      },
      { 
        category: "Shirt",
        brand: "Tommy Jeans",
        model: "Long Sleeve",
        price: 339,
        images: []
      },
      { 
        category: "Pants",
        brand: "Jack & Jones",
        model: "JJIMARCO JJCONNOR - Chinos",
        price: 579,
        images: []
      },
      { 
        category: "Pants",
        brand: "adidas Originals",
        model: "Mono",
        price: 629,
        images: []
      },
      { 
        category: "Shirt",
        brand: "Tommy Jeans",
        model: "Long Sleeve",
        price: 339,
        images: []
      },
      { 
        category: "Pants",
        brand: "Jack & Jones",
        model: "JJIMARCO JJCONNOR - Chinos",
        price: 579,
        images: []
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
