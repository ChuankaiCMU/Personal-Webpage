<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: rgb(168, 168, 165);
  /* background-image: url("./assets/background1.jpg"); */
  height: 100vh;
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
