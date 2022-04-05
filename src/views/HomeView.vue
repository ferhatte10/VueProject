<template>
  <div class="searchbox">

    <h1>Les Sorts :</h1>

    <form class="form">


        <label for="ecoleSelect">Ecoles </label>
        <select id="ecoleSelect" class="selectSort">
          <option value="" selected></option>
          <option v-for="ecole in data.module.getData(this.datalist,'ecoles')" :key="ecole">
            {{ecole}}
          </option>
        </select>



        <label for="brancheSelect">Branches </label>
        <select id="brancheSelect" class="selectSort">
          <option value="" selected></option>
          <option v-for="branche in data.module.getData(this.datalist,'branches')" :key="branche">
            {{branche}}
          </option>
        </select>



      <level-select/>


        <label for="Domaines">Classes & Domaines </label>
        <select id="Domaines" class="selectSort">
          <option value="" selected></option>
          <option v-for="branche in data.module.getData(this.datalist,'cls&domn')" :key="branche">
            {{branche}}
          </option>
        </select>




        <label for="Livres">Livres </label>
        <select id="Livres" class="selectSort"  v-model="livreselected">
          <option v-for="branche in data.module.getData(this.datalist,'livre')" :key="branche">
            {{branche}}
          </option>
        </select>




      <button @click.prevent="submit" class="btn-success buttonSearch" >Search</button>

    </form>

  </div>


</template>

<script>
// @ is an alias to /src
import {ref} from "vue";
import sortList from "../js/data.min.js"
import LevelSelect from "@/components/levelSelect";

export default {
  name: 'HomeView',
  components: {
    LevelSelect

  },
  methods : {

    submit(){
      console.log(this.livreselected)
    }

  },
  setup (){
    const data  = require("@/data/data.js")

    let datalist = ref(sortList)
    let livreselected = ref([])




    return {
      datalist,
      livreselected,
      data

    }
  }
}
</script>

<style >

.form {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 16px;
}

.label {
  grid-column: 1 / 2;
}

.selectSort, .buttonSearch {
  grid-column: 2 / 3;
  width: 10%;
}


</style>