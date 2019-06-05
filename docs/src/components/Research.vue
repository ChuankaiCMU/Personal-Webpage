<template>
  <div id="app">
    <div class = "nav-container">
    <Navbar></Navbar>
    </div>
    <div class = "capstone-container">
    <Capstone></Capstone>
    </div>
    <div class = "capstone-container">
    <AbNet></AbNet>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Capstone from './Capstone.vue'
import AbNet from './AbstractNet.vue'
export default {
  components: {
    Navbar,
    Capstone,
    AbNet
  }
}
</script>

<style>
.nav-container{
    padding-bottom: 1%;

}
.capstone-container{
    padding-bottom: 2%;
    padding-left: 2%;
    padding-right: 2%;
}
</style>
