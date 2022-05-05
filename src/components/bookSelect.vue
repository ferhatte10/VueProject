<template>
  <div>
    <label for="Livres" >Livres Disponible </label>
    <div class=" flex items-center py-2 ">
      <select id="Livres" v-model="bookselected" class="block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
        <option v-for="livre in this.data.dispo" :key="livre">{{livre}}</option>
      </select>
      <button type="button" @click="$emit('selectedB',bookselected)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2 ">Add</button>
    </div>
    <label for="LivresAdded" >Livres Ajoutés </label>
    <div class=" flex items-center py-2 ">
      <select id="LivresAdded" v-model="bookadedselected" class="block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
        <option v-for="livre in this.data.added" :key="livre">{{livre}}</option>
      </select>
      <button type="button" @click="$emit('selectedB_added',bookadedselected)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2 ">Remove</button>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";


export default {
  name: "bookSelect",
  props : ['data'],
  emits: ['selectedB',"selectedB_added"],
  methods : {

  },

  setup() {

    return {
      bookselected : ref(""),
      bookadedselected : ref(""),


    }
  }
}
</script>
