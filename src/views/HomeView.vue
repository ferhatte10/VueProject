<template>
  <div class="searchbox">
    <h1 class="">Les Sorts :</h1>
      <form class="form">
        <SchoolSelect :data="getSchools(this.datalist)" />
        <brancheSelect :data="getBranches(this.datalist)"/>
        <levelSelect :data="this.levels"/>
        <classe-select :data="getClasses(datalist)" @selectedD="initclasse"/>
        <bookSelect :data="this.store.state.booksAvailable" @addBook="addbook"/>
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
        this.store.state.booksAvailable.splice(this.store.state.booksAvailable.indexOf(this.store.state.bookSelected),1)
      }
    },
    getClasses(data){
      let Classes_Domaines = []
      data.filter(elm => {
        elm[3].forEach(Classe => {
          if (!Classes_Domaines.includes(Classe)) {
            Classes_Domaines.push(Classe)
          }
        })
      })
      return Classes_Domaines.sort()
    },
    getBooks(data){
      let livres = []
      data.filter(elm => {
        if (!livres.includes(elm[0])) {
          livres.push(elm[0])
        }
      })
      return livres.sort()
    },
    getSchools(data){
      let ecoles = []
      data.filter(elm => {

        if (!ecoles.includes(elm[2])) {
          ecoles.push(elm[2])
        }
      })
      return ecoles.sort()
    },
    getBranches(data){
      let branches = []
      data.filter(elm => {
        elm[4].forEach(branche => {
          if (!branches.includes(branche[0])) {
            branches.push(branche[0])
          }
        })
      })
      return branches.sort()
    },
    initclasse(val){
      this.class = val
    }

  },
  created() {
    if (!!this.store.state.booksAvailable && !!this.store.state.booksAdded){
      this.store.state.booksAvailable = this.getBooks(sortList)
    }
  },

  setup (){
    const store = useStore() // import the store to get the global variables
    let levels = ref([{value : "0",text : "Niveau 0"},{value : "1",text : "Niveau 1"},{value : "2",text : "Niveau 2"},{value : "3",text : "Niveau 3"},{value : "4",text : "Niveau 4"},{value : "5",text : "Niveau 5"},{value : "6",text : "Niveau 6"},{value : "7",text : "Niveau 7"},{value : "8",text : "Niveau 8"},{value : "9",text : "Niveau 9"}])

    let datalist = ref(sortList) // a supprimer
    let classe = ref("")

    return {
      datalist,
      levels,
      store,
      classe

    }
  }
}
</script>

<style >


</style>