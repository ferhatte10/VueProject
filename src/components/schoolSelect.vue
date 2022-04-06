<template>
  <label for="ecoleSelect" class="inputSelectLabel">Ecoles </label>
  <select id="ecoleSelect" class="selectSort">
    <option value="" selected></option>
    <option v-for="ecole in this.data" :key="ecole">
      {{ecole}}
    </option>
  </select>
</template>

<script>


export default {
  name: "schoolSelect",
  props : ['data']
}
</script>

