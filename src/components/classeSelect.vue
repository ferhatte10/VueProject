<template>
  <label for="Domaines" class="inputSelectLabel">Classes & Domaines </label>
  <select id="Domaines" class="selectSort" @change="sendval">
    <option v-for="dmn in this.data" :key="dmn">
      {{dmn}}
    </option>
  </select>
</template>

<script>
import {ref} from "vue";

export default {
  name: "classeSelect",
  props:["data"],
  emits:["selectedD"],
  setup(props, {emit}) {

    return {
      sendval : (e)=>{emit("selectedD",e.target.value)}
    }
  }
}
</script>
