import { createStore } from 'vuex'
import {ref} from "vue";

export default createStore({
  state: {
    bookSelected : ref(""),
    booksAdded : ref([]),
    schoolselected : ref(""),
    booksAvailable : ref([])


  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
