<template>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" class="px-6 py-3">Nombre de sorts</th>
      <th scope="col" class="px-6 py-3">Nombre de livres</th>
      <th scope="col" class="px-6 py-3">Nombre de classes&domaines</th>
      <th scope="col" class="px-6 py-3">Nombre de branches</th>
      <th scope="col" class="px-6 py-3">Nombre d'écoles</th>
    </tr>
    </thead>
    <tbody>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td class="px-6 py-4">{{this.stats.nbSort }}</td>
      <td class="px-6 py-4">{{this.stats.nbBooks }}</td>
      <td class="px-6 py-4">{{this.stats.nbClasses}}</td>
      <td class="px-6 py-4">{{this.stats.nbBranches}}</td>
      <td class="px-6 py-4">{{this.stats.nbschools}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "stats",
  props: {
    stats: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>