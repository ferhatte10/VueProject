<template>
  <div style="display: flex;">
    <label for="Domaines" class="inputSelectLabel">Classes & Domaines </label>
    <div class="selectSort">
      <select id="Domaines" @change="sendval">
        <option v-for="dmn in this.data" :key="dmn">{{dmn}}</option>
      </select>
      <input type="checkbox">
    </div>
  </div>

</template>

<script>
//import {ref} from "vue";

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
