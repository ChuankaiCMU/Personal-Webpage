<template>
  <div id="app">
    <div class = "nav-container">
    <Navbar></Navbar>
    </div>
    <div class = "profile-container">
    <Profile></Profile>
    </div>
    <div class = "other-container">
    <Other></Other>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Profile from './ProfileCard.vue'
import Other from './OtherCard.vue'
export default {
  components: {
    Navbar,
    Profile,
    Other,
  }
}
</script>

<style>
.nav-container{
    padding-bottom: 1%;
}
.profile-container{
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 4%;
}
.other-container{
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 1/2%;
}
</style>
