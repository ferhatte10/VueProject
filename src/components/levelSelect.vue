<template>
    <div >
      <label for="level" class="inputSelect">Search by niveau :</label>
      <div class="selectSort flex items-center py-2 ">
        <select id="level" v-model="level" @change="sendval" class="block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" >
          <option value="" disabled selected>Sélectionnez un niveau</option>
          <option v-for="level in this.data" :key="level.value" :value="level.value">{{level.text}}</option>
        </select>
        <input type="checkbox" v-model="selected" @change="sendval" class="ml-2" id="checkschool">
        <label for="checkschool" class="ml-1 ">Prendre en compte ?</label>
      </div>

    </div>
</template>

<script>

import {ref} from "vue";

export default {
  name: "levelSelect",
  props:["data"],
  emits: ['selectedLevel'],
  setup(props, {emit}) {
    let level = ref("")
    let selected = ref(false)
    return {
      level,
      selected,
      sendval : ()=>{emit("selectedLevel",{level : level.value,used : selected.value})}
    }
  }
}
</script>
