<template>
    <label for="level" class="">Search by niveau :</label>
    <select id="level" class="selectSort">
      <option value="" selected></option>
      <option v-for="level in this.options" :key="level.value" :value="level.value">
        {{level.text}}
      </option>
    </select>
</template>

<script>


import {ref} from "vue";

export default {
  name: "levelSelect",

  setup (){

    let options = ref([{value : "0",text : "Niveau 0"},{value : "1",text : "Niveau 1"},{value : "2",text : "Niveau 2"},{value : "3",text : "Niveau 3"},{value : "4",text : "Niveau 4"},{value : "5",text : "Niveau 5"},{value : "6",text : "Niveau 6"},{value : "7",text : "Niveau 7"},{value : "8",text : "Niveau 8"},{value : "9",text : "Niveau 9"}])

    return{
      options
    }

  }





}
</script>

<style scoped>

</style>