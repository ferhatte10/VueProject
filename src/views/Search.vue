<template>
  <div class="flex justify-center flex-col">
    <div class="mb-3">
    <input type="search" v-model="searchSort" class="text-center form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id="searchSort" placeholder="Search for a sort"/>
    </div>
    <stats :stats="this.getStatistic()"/>
    <SortDescription v-if="showpopup" :sort="sortdata" @close="showpopup = !showpopup"/>
    <div class="w-full bg-white rounded-lg shadow-lg ">
      <ul class="divide-y-2  divide-gray-100 overflow-auto	max-h-[400px]	">
        <li class="p-3 hover:bg-blue-600 hover:text-blue-200 cursor-pointer	" v-for="sort in getDataFilter(searchSort)" @click="showP(sort)">{{sort[1]}}</li>
      </ul>
    </div>
  </div>
</template>
<script>


import {ref} from "vue";
import SortDescription from "@/components/SortDescription";
import Stats from "@/components/Stats";


export default {
  name: 'Search',
  components: {
    Stats,
    SortDescription

  },
  methods: {
    showP(sort) {
      this.sortdata = sort;
      this.showpopup = true
    },

    /*
    * Afin de respecter le cahier des charges j'ai recréé ces fonctions en double ici pour faire les stats.
    * J'aurais pu stocker les fonction dans un fichier JS mais ce n'était autorisé par le cahier des charges.
    *
    * */
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
    getStatistic(){
      return {nbSort : this.getDataFilter(this.searchSort).length, nbBooks : this.getBooks(this.getDataFilter(this.searchSort)).length, nbClasses : this.getClasses(this.getDataFilter(this.searchSort)).length,nbBranches:this.getBranches(this.getDataFilter(this.searchSort)).length,nbschools:this.getSchools(this.getDataFilter(this.searchSort)).length}
    },


  },
  setup() {

    let searchSort = ref('');
    let data = ref(JSON.parse(localStorage.getItem("dataFiltered"))?JSON.parse(localStorage.getItem("dataFiltered")):[]);
    const getDataFilter = (value) => {return data.value.filter(sort => {return sort[1].toLowerCase().includes(value.toLowerCase())})}
    let showpopup = ref(false)
    let sortdata = ref([])

    return {
      getDataFilter,
      searchSort,
      showpopup,
      sortdata
    }
  },
}
</script>