<template>
  <div>
    <label for="brancheSelect" class="inputSelectLabel">Branches </label>
    <div class="flex items-center py-2 ">
      <select id="brancheSelect" v-model="brancheSelected" @change="sendval" class="block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" :value="this.data">
        <option value="" disabled selected>Sélectionnez une branche</option>
        <option v-for="branche in this.data" :key="branche">{{branche}}</option>
      </select>
      <input type="checkbox" v-model="selected" @change="sendval" class="ml-2" id="checkschool">
      <label for="checkschool" class="ml-1 ">Prendre en compte ?</label>
    </div>
  </div>
</template>
<script>
import {ref} from "vue";

export default {
  name: "brancheSelect",
  props : ['data'],
  emits: ['selectedB'],
  setup(props, {emit}) {
    let selected = ref(false)
    let brancheSelected = ref("")
    return {
      selected,
      brancheSelected,
      sendval : ()=>{emit("selectedB",{branche : brancheSelected.value,used : selected.value})}
    }
  }
}
</script>
