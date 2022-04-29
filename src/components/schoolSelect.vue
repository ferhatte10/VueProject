<template>
  <label for="ecoleSelect" class="inputSelectLabel">Ecoles </label>
  <select id="ecoleSelect" class="selectSort">
    <option v-for="ecole in this.data" :key="ecole">{{ecole}}</option>
  </select>
  <span><input type="checkbox"></span>
</template>

<script>


export default {
  name: "schoolSelect",
  props : ['data']
}
</script>

