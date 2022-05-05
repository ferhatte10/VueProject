<template>
  <nav class="flex justify-center space-x-2">
    <router-link to="/" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Configuration</router-link>
    <router-link to="/search" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Research</router-link>
  </nav>
  <router-view/>
  <p class="credit mb-2 mt-5">&copy; Copyright - Ferhat Sn © {{new Date().getFullYear()}}</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
  background-color: rgb(241 245 249 / 0.5);
}
.credit {
  font-size: 0.8rem;
  color: #adb5bd;
}


</style>
