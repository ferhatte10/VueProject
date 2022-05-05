<template>
  <h1 class="text-5xl font-normal leading-normal mt-0 mb-2 text-black-800 ">Configuration :</h1>
  <div class="md:flex md:justify-center mb-6">
    <form class="form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <SchoolSelect :data="getSchools(this.datalist)" @ecoleSelected="setSchool"/>
      <brancheSelect :data="getBranches(this.datalist)" @selectedB="setBranche"/>
      <levelSelect :data="this.levels" @selectedLevel="setLevel"/>
      <classe-select :data="getClasses(datalist)" @selectedD="setClasse"/>
      <bookSelect :data="{dispo : this.booksDispo,added : this.booksAdded}" @selectedB="addbook" @selectedB_added="removebook"/>
      <button @click.prevent="SetConfigData" class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">Set Configuration</button>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import sortList from "../data/data.min.js"
import LevelSelect from "@/components/levelSelect";
import SchoolSelect from "@/components/schoolSelect";
import BrancheSelect from "@/components/brancheSelect";
import BookSelect from "@/components/bookSelect";
import ClasseSelect from "@/components/classeSelect";

export default {
  name: 'Configuration',
  components: {
    ClasseSelect,
    BookSelect,
    BrancheSelect,
    SchoolSelect,
    LevelSelect

  },
  methods : {
    initbooks(){
      let books = JSON.parse(localStorage.getItem("livresDispo"));
      if (!books) {
        books = this.getBooks(sortList);
        localStorage.setItem("livresDispo", JSON.stringify(books));
      }
      return books;
    },
    removebook(book) {
      if (!!book) { // si on a selectionné un livre
        let booksavailable = JSON.parse(localStorage.getItem("livresDispo")) // on recupere la liste des livres disponibles

        if (!booksavailable.includes(book)){ //si le livre n'est pas déjà dans la liste des livres disponibles
          let booksadded = JSON.parse(localStorage.getItem("livresAdded")) // on recupere la liste des livres ajoutés
          booksadded.splice(booksadded.indexOf(book),1) // on supprime le livre de la liste des livres ajoutés
          localStorage.setItem("livresAdded",JSON.stringify(booksadded)) // on sauvegarde la liste des livres ajoutés
          this.booksAdded.splice(this.booksAdded.indexOf(book),1); // on supprime le livre de la liste des livres ajoutés dans le composant

          booksavailable.push(book); // on ajoute le livre à la liste des livres disponibles
          localStorage.setItem("livresDispo",JSON.stringify(booksavailable)); // on sauvegarde la liste des livres disponibles
          this.booksDispo.push(book);// on ajoute le livre à la liste des livres disponibles dans le composant
        }
      }
    },
    addbook(data){

      let bookselected = data
      let booksadded = !JSON.parse(localStorage.getItem("livresAdded"))?[]:JSON.parse(localStorage.getItem("livresAdded")) // on recupere la liste des livres ajoutés
      let booksavailable = JSON.parse(localStorage.getItem("livresDispo")) // on recupere la liste des livres disponibles

      if (!!bookselected){ // si on a selectionné un livre

        if (!booksadded.includes(bookselected)){ //si le livre n'est pas déjà dans la liste des livres ajoutés
          booksadded.push(bookselected) // on ajoute le livre à la liste des livres ajoutés
          booksavailable.splice(booksavailable.indexOf(bookselected),1) // on supprime le livre de la liste des livres disponibles
          localStorage.setItem("livresDispo", JSON.stringify(booksavailable)) // on sauvegarde la liste des livres disponibles
          localStorage.setItem("livresAdded",JSON.stringify(booksadded))
          this.booksDispo.splice(this.booksDispo.indexOf(bookselected),1)
          this.booksAdded.push(bookselected)
        }
      }
    },
    setSchool(data){
      this.schooldatapicked = data
    },
    setBranche(data){
      this.branchedatapicked = data
    },
    setLevel(data){
      this.leveldatapicked = data
    },
    setClasse(data){
      this.classedatapicked = data
    },

    getBranches(data){
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
    getClasses(data){
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

    /*
    * fonction qui filtre les sort selon les filtres selectionnés
    *
    * */
    SetConfigData(){
      let data = sortList;
      let schools = this.schooldatapicked;
      let branches = this.branchedatapicked;
      let levels = this.leveldatapicked;
      let classes = this.classedatapicked;
      let books = this.booksAdded;

      if (books.length>0){
        if (books.length > 0) {
          data = data.filter(elm => {
            return books.includes(elm[0])
          })
        }

        if (schools.used) {
          data = data.filter(elm => {
            return schools.school.includes(elm[2])
          })
        }
        if (branches.used) {
          data = data.filter(elm => {
            let branchesL = Array()
            elm[3].forEach(branche => {
              if(!branchesL.includes(branche)) branchesL.push(branche)
            })
            return branchesL.includes(branches.branche)

          })
        }
        if (levels.used && levels.level !== "") {
          data = data.filter(elm => {
            let levelL = Array()
            elm[4].forEach(level => {
              if(!levelL.includes(level[1])) levelL.push(level[1])
            })
            return levelL.includes(parseInt(levels.level))
          })
        }
        if (classes.used) {
          data = data.filter(elm => {
            let ClassesL = Array()
            elm[4].forEach(classe => {
              if(!ClassesL.includes(classe[0])) ClassesL.push(classe[0])
            })
            return ClassesL.includes(classes.classe)
          })
        }
        localStorage.setItem("dataFiltered", JSON.stringify(data ))
      }else {
        localStorage.setItem("dataFiltered", JSON.stringify([] ))
      }



    }
  },
  data(){
    return {
      booksDispo : this.initbooks(),
      booksAdded : !JSON.parse(localStorage.getItem("livresAdded"))?[]:JSON.parse(localStorage.getItem("livresAdded"))

    }
  },

  setup (){
    let schooldatapicked = ref({})
    let branchedatapicked = ref({})
    let leveldatapicked = ref({})
    let classedatapicked = ref({})
    let levels = ref([{value : "0",text : "Niveau 0"},{value : "1",text : "Niveau 1"},{value : "2",text : "Niveau 2"},{value : "3",text : "Niveau 3"},{value : "4",text : "Niveau 4"},{value : "5",text : "Niveau 5"},{value : "6",text : "Niveau 6"},{value : "7",text : "Niveau 7"},{value : "8",text : "Niveau 8"},{value : "9",text : "Niveau 9"}])
    let classe = ref('')
    let datalist = ref(sortList)



    return {
      branchedatapicked,
      leveldatapicked,
      classedatapicked,
      schooldatapicked,
      levels,
      datalist,
      classe,



    }
  }
}
</script>

<style >


</style>