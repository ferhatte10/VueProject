<template>
  <div class="search">
    <input type="text">
    <p>Added : {{store.state.booksAdded}}</p>
    <p>Available : {{store.state.booksAvailable}}</p>
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

    return {
      store
    }
  },
}
</script>