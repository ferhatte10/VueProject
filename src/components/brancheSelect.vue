<template>
  <div style="display: flex">
    <label for="brancheSelect" class="inputSelectLabel">Branches </label>
    <div class="selectSort">
      <select id="brancheSelect" :value="this.data"><option v-for="branche in this.data" :key="branche">{{branche}}</option></select>
      <input type="checkbox">
    </div>

  </div>
</template>
<script>
export default {
  name: "brancheSelect",
  props : ['data'],
  emits: ['selectedBranche'],
  setup(props, {emit}) {

    return {
      sendval : (e)=>{emit("selectedBranche",e.target.value)}
    }
  }
}
</script>
