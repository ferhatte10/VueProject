<template>
  <div class="searchbox">

    <h1>Les Sorts :</h1>

    <div>
      <label for="ecoleSelect">Ecoles </label>
      <select id="ecoleSelect" class="select">
        <option value="" selected></option>
        <option v-for="ecole in data.module.getData(this.datalist,'ecoles')" :key="ecole">
          {{ecole}}
        </option>
      </select>
    </div>

    <div>
      <label for="brancheSelect">Branches </label>
      <select id="brancheSelect" class="select">
        <option value="" selected></option>
        <option v-for="branche in data.module.getData(this.datalist,'branches')" :key="branche">
          {{branche}}
        </option>
      </select>
    </div>


    <div>
      <label for="level">Search by niveau :</label>
      <select id="level" class="select">
        <option value="" selected></option>
        <option value='0' >Niveau 0</option>
        <option value='1'>Niveau 1</option>
        <option value='2'>Niveau 2</option>
        <option value='3'>Niveau 3</option>
        <option value='4'>Niveau 4</option>
        <option value='5'>Niveau 5</option>
        <option value='6'>Niveau 6</option>
        <option value='7'>Niveau 7</option>
        <option value='8'>Niveau 8</option>
        <option value='9'>Niveau 9</option>
      </select>
    </div>


    <div>
      <label for="Domaines">Classes & Domaines </label>
      <select id="Domaines" class="select">
        <option value="" selected></option>
        <option v-for="branche in data.module.getData(this.datalist,'cls&domn')" :key="branche">
          {{branche}}
        </option>
      </select>
    </div>


    <div class="books">
      <label for="Livres">Livres </label>
      <select id="Livres" class="selectpicker" data-live-search="true"  v-model="livreselected">
        <option v-for="branche in data.module.getData(this.datalist,'livre')" :key="branche">
          {{branche}}
        </option>
      </select>
    </div>



    <button @click.prevent="submit" class="btn-success submit" >Search</button>

  </div>

</template>

<script>
// @ is an alias to /src
import {ref} from "vue";
import sortList from "../js/data.min.js"

export default {
  name: 'HomeView',
  components: {

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

<style scoped>

.searchbox{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  align-items: flex-start;
}


</style>