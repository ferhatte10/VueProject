<template>
  <label for="Livres" class="inputSelectLabel">Livres </label>
  <select id="Livres" class="selectSort"  v-model="store.state.bookSelected">
    <option v-for="branche in this.data" :key="branche">{{branche}}</option>
  </select>
  <button @click.prevent="$emit('addBook')" class="btn-success buttonSearch" >Add book</button>
</template>

<script>
import { useStore } from 'vuex'


export default {
  name: "bookSelect",
  props : ['data'],
  emits: ['addBook'],
  methods : {

  },
  setup() {
    const store = useStore()
    return {
      store
    }
  }
}
</script>
