<template>
  <div class="search">
    <input type="text">
    <p>Added : {{added}}</p>
    <p>Available : {{booksAvailable}}</p>
  </div>
</template>
<script>


import {ref} from "vue";

export default {
  name: 'Search',
  components: {

  },
  setup() {

    return {
      booksAvailable: ref(JSON.parse(localStorage.getItem("livresDispo"))),
      added: ref(JSON.parse(localStorage.getItem("livresAdded"))),
    }
  },
}
</script>