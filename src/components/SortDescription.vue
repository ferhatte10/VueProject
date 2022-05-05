<template>
  <div id="modalOne" class="modal" @click="closeModal">
    <div class="modal-content" @click.stop="">
      <div class="contact-form">
        <div class="sort">
          <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white"> {{sort[1]}}</h3>
            <button type="button" @click="closeModal" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-left dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <ul class="text-left">
            <li v-for="(value, key) in this.sort" :key="key">
              <strong>{{this.labels[key]}} : </strong> {{`${value}`}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortDescription",
  props: {
    sort: {
      type: Array,
      required: true
    }
  },
  emits: ['close'],
  methods: {
    closeModal() {
      this.$emit('close');
    }
  },
  setup() {
    let labels = {
      0: 'Livre',
      1: 'Sort',
      2: 'Ecole',
      3: 'Branches',
      4: 'Classes',
      5: 'Composantes',
      6: 'Temps d\'incantation',
      7: 'Portée',
      8: 'Cible',
      9: 'Durée',
      10: 'Jet de sauvegarde',
      11: 'Résistance à la magie',
      12: 'Description',
      13: 'Nécessaire',
    }
    return {
      labels,
    }
  }
}
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 8;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  margin: 50px auto;
  width: 60%;
}


.sort {
  padding: 25px;
  margin: 25px;
  box-shadow: 0 2px 5px #f5f5f5;
  background: #eee;
}
</style>