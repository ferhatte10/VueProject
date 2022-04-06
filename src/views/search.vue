<template>
  <div class="search">
    <input type="text">
    <p>{{val}}</p>
  </div>
</template>
<script>


import {ref} from "vue";
import { useStore } from 'vuex'

export default {
  name: 'HomeView',
  components: {

  },
  setup() {
    const store = useStore()

    const val = ref(store.state.booksAdded)

    return {
      val
    }
  },
}
</script>