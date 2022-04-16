<template>
  <label for="Livres" class="inputSelectLabel">Livres </label>
  <select id="Livres" class="selectSort"  v-model="store.state.bookSelected">
    <option v-for="branche in this.data" :key="branche">
      {{branche}}
    </option>
  </select>
</template>

<script>
import { useStore } from 'vuex'
import sortList from "../js/data.min.js"


export default {
  name: "bookSelect",
  props : ['data'],
  methods : {

  },
  setup() {
    const store = useStore()
    function getBooks(data){
      let livres = []
      data.filter(elm => {
        if (!livres.includes(elm[0])) {
          livres.push(elm[0])
        }
      })
      return livres.sort()
    }
    store.state.booksAvailable = getBooks(sortList)
    return {
      store
    }
  }
}
</script>
