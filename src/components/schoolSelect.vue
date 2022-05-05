<template>
  <div >
    <label for="ecoleSelect" class="inputSelectLabel">Ecoles </label>
    <div class="selectSort flex items-center py-2 ">
      <select id="ecoleSelect" v-model="ecoleselected" @change="sendval" class="block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
        <option value="" disabled selected>Sélectionnez une école</option>
        <option v-for="ecole in this.data" :key="ecole">{{ecole}}</option>
      </select>
      <input type="checkbox" class="ml-2" v-model="selected" @change="sendval" id="checkschool">
      <label for="checkschool" class="ml-1 ">Prendre en compte ?</label>
    </div>
  </div>
</template>

<script >


import {ref} from "vue";

export default {
  name: "schoolSelect",
  props : ['data'],
  emits: ['ecoleSelected'],

  setup(props, {emit}) {
    let selected = ref(false);
    let ecoleselected = ref('');
    return {
      sendval : function(){emit('ecoleSelected', {school : ecoleselected.value,used : selected.value});},
      selected,
      ecoleselected
    }
  }
}
</script>

