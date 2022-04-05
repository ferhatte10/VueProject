<template>
  <div class="search">
    <input type="text">
  </div>
</template>
<script>
// @ is an alias to /src

import {ref} from "vue";

export default {
  name: 'HomeView',
  components: {

  },
  setup() {
    const count = ref("")

    // expose to template and other options API hooks
    return {
      count
    }
  },
}
</script>