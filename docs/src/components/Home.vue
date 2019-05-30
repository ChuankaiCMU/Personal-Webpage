<template>
  <div id="app">
    <Navbar></Navbar>
    <div class = "profile-container">
    <Profile></Profile>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Profile from './ProfileCard.vue'
export default {
  components: {
    Navbar,
    Profile
  }
}
</script>

<style>
.profile-container{
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 1%;
}
</style>
