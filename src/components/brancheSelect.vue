<template>
  <label for="brancheSelect" class="inputSelectLabel">Branches </label>
  <select id="brancheSelect" class="selectSort">
    <option v-for="branche in this.data" :key="branche">
      {{branche}}
    </option>
  </select>
</template>

<script>
export default {
  name: "brancheSelect",
  props : ['data']
}
</script>
