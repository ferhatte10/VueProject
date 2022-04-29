<template>
  <label for="brancheSelect" class="inputSelectLabel">Branches </label>
  <select id="brancheSelect" class="selectSort" :value="this.data"><option v-for="branche in this.data" :key="branche">{{branche}}</option>
  </select>
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
