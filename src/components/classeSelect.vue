<template>
  <div >
    <label for="Domaines" class="inputSelectLabel">Classes & Domaines </label>
    <div class="selectSort flex  items-center py-2 ">
      <select id="Domaines" v-model="selectedD" @change="sendval"  class="block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" >
        <option value="" disabled selected>Sélectionnez une classe</option>
        <option v-for="dmn in this.data" :value="dmn" :key="dmn">{{dmn}}</option>
      </select>
      <input type="checkbox" v-model="selected" @change="sendval" class="ml-2" id="checkschool">
      <label for="checkschool" class="ml-1 ">Prendre en compte ?</label>
    </div>
  </div>

</template>

<script>

import {ref} from "vue";

export default {
  name: "classeSelect",
  props:["data"],
  emits:["selectedD"],
  setup(props, {emit}) {
    let selected = ref(false);
    let selectedD = ref("");
    return {
      selected,
      selectedD,
      sendval : ()=>{emit("selectedD",{classe : selectedD.value,used : selected.value})}
    }
  }
}
</script>
