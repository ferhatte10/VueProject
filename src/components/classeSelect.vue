<template>
  <label for="Domaines" class="inputSelectLabel">Classes & Domaines </label>
  <select id="Domaines" class="selectSort">
    <option value="" selected></option>
    <option v-for="dmn in this.data" :key="dmn">
      {{dmn}}
    </option>
  </select>
</template>

<script>
export default {
  name: "classeSelect",
  props:["data"]
}
</script>

<style scoped>

</style>