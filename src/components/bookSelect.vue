<template>
  <label for="Livres" class="inputSelectLabel">Livres </label>
  <select id="Livres" class="selectSort"  v-model="store.state.livreselected">
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

<style scoped>

</style>