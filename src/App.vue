<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/search">Research</router-link>
  </nav>
  <router-view/>
  <ul class="background">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
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
}

@keyframes animate {
  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

.background {
  z-index: -1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: #bababa;
  overflow: hidden;
}
.background li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 26s linear infinite;
}




.background li:nth-child(0) {
  left: 1%;
  width: 69px;
  height: 69px;
  bottom: -69px;
  animation-delay: 1s;
}
.background li:nth-child(1) {
  left: 64%;
  width: 29px;
  height: 29px;
  bottom: -29px;
  animation-delay: 1s;
}
.background li:nth-child(2) {
  left: 82%;
  width: 90px;
  height: 90px;
  bottom: -90px;
  animation-delay: 3s;
}
.background li:nth-child(3) {
  left: 53%;
  width: 68px;
  height: 68px;
  bottom: -68px;
  animation-delay: 12s;
}
.background li:nth-child(4) {
  left: 62%;
  width: 87px;
  height: 87px;
  bottom: -87px;
  animation-delay: 3s;
}
.background li:nth-child(5) {
  left: 53%;
  width: 48px;
  height: 48px;
  bottom: -48px;
  animation-delay: 1s;
}
.background li:nth-child(6) {
  left: 16%;
  width: 50px;
  height: 50px;
  bottom: -50px;
  animation-delay: 13s;
}
.background li:nth-child(7) {
  left: 21%;
  width: 93px;
  height: 93px;
  bottom: -93px;
  animation-delay: 3s;
}
.background li:nth-child(8) {
  left: 60%;
  width: 32px;
  height: 32px;
  bottom: -32px;
  animation-delay: 25s;
}
.background li:nth-child(9) {
  left: 89%;
  width: 97px;
  height: 97px;
  bottom: -97px;
  animation-delay: 41s;
}
.background li:nth-child(10) {
  left: 74%;
  width: 57px;
  height: 57px;
  bottom: -57px;
  animation-delay: 26s;
}
.background li:nth-child(11) {
  left: 2%;
  width: 77px;
  height: 77px;
  bottom: -77px;
  animation-delay: 30s;
}
</style>
