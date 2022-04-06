<template>
  <label for="Livres" class="inputSelectLabel">Livres </label>
  <select id="Livres" class="selectSort"  v-model="store.state.bookSelected">
    <option value="" selected></option>
    <option v-for="branche in this.data" :key="branche">
      {{branche}}
    </option>
  </select>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: "bookSelect",
  props : ['data'],
  setup() {
    const store = useStore()

    return {
      store
    }
  }
}
</script>
