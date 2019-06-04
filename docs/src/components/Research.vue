<template>
  <div id="app">
    <div class = "nav-container">
    <Navbar></Navbar>
    </div>
    <div class = "capstone-container">
    <Capstone></Capstone>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Capstone from './Capstone.vue'
export default {
  components: {
    Navbar,
    Capstone
  }
}
</script>

<style>
.nav-container{
    padding-bottom: 1%;

}
.capstone-container{
    padding-left: 1%;
    padding-right: 1%;
}
</style>
