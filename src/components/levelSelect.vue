<template>
    <label for="level" class="inputSelect">Search by niveau :</label>
    <select id="level" class="selectSort">
      <option value="" selected></option>
      <option v-for="level in this.data" :key="level.value" :value="level.value">
        {{level.text}}
      </option>
    </select>
</template>

<script>



export default {
  name: "levelSelect",
  props:["data"]
}
</script>
