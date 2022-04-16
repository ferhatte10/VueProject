<template>
  <div class="searchbox">
    <h1>Les Sorts :</h1>
      <form class="form">
        <SchoolSelect :data="data.module.getData(this.datalist,'ecoles')"/>
        <brancheSelect :data="data.module.getData(this.datalist,'branches')"/>
        <levelSelect :data="this.levels"/>
        <classe-select :data="data.module.getData(this.datalist,'cls&domn')"/>
        <bookSelect :data="this.store.state.booksAvailable"/>

        <button @click.prevent="addbook" class="btn-success buttonSearch" >Add book</button>
      </form>
  </div>
</template>

<script>
import {ref} from "vue";
import sortList from "../js/data.min.js"
import LevelSelect from "@/components/levelSelect";
import SchoolSelect from "@/components/schoolSelect";
import BrancheSelect from "@/components/brancheSelect";
import BookSelect from "@/components/bookSelect";
import ClasseSelect from "@/components/classeSelect";
import {useStore} from "vuex";

export default {
  name: 'HomeView',
  components: {
    ClasseSelect,
    BookSelect,
    BrancheSelect,
    SchoolSelect,
    LevelSelect

  },
  methods : {
    addbook(){
      if (!this.store.state.booksAdded.includes(this.store.state.bookSelected) && !!this.store.state.bookSelected){
        this.store.state.booksAdded.push(this.store.state.bookSelected)
      }
    }

  },
  setup (){
    const store = useStore() // import the store to get the global variables
    const data  = require("@/data/data.js") // a supprimer
    let levels = ref([{value : "0",text : "Niveau 0"},{value : "1",text : "Niveau 1"},{value : "2",text : "Niveau 2"},{value : "3",text : "Niveau 3"},{value : "4",text : "Niveau 4"},{value : "5",text : "Niveau 5"},{value : "6",text : "Niveau 6"},{value : "7",text : "Niveau 7"},{value : "8",text : "Niveau 8"},{value : "9",text : "Niveau 9"}])

    let datalist = ref(sortList) // a supprimer

    return {
      datalist,
      data,
      levels,
      store

    }
  }
}
</script>

<style >

.form {
  display: grid;
  grid-template-columns: 50% 1fr;
  grid-gap: 16px;
  justify-items: center;

}

.inputSelectLabel {
  grid-column: 1 / 2;
}

.selectSort, .buttonSearch {
  grid-column: 2 / 3;
  width: 50%;
  align-items: center;
}


</style>