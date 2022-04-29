<template>
    <div style="display: flex;">
      <label for="level" class="inputSelect">Search by niveau :</label>
      <div class="selectSort">
        <select id="level" ><option v-for="level in this.data" :key="level.value" :value="level.value">{{level.text}}</option></select>
        <input type="checkbox">
      </div>

    </div>
</template>

<script>

export default {
  name: "levelSelect",
  props:["data"]
}
</script>
