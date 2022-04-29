<template>
  <div style="display: flex;">
    <label for="Livres" class="inputSelectLabel">Livres </label>
    <div class="selectSort">
      <select id="Livres"  v-model="store.state.bookSelected"><option v-for="branche in this.data" :key="branche">{{branche}}</option></select>
      <button @click.prevent="$emit('addBook')" class="btn-success buttonSearch" >Add book</button>
    </div>
  </div>
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
