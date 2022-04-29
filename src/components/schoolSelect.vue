<template>
  <div style="display: flex;">
    <label for="ecoleSelect" class="inputSelectLabel">Ecoles </label>
    <div class="selectSort">
      <select id="ecoleSelect">
        <option v-for="ecole in this.data" :key="ecole">{{ecole}}</option>
      </select>
      <input type="checkbox">
    </div>
  </div>

</template>

<script>


export default {
  name: "schoolSelect",
  props : ['data']
}
</script>

