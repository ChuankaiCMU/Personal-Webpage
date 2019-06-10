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
    <div class = "capstone-container">
    <b-card title="Publication" class = "transparent">
      <b-card-text class = "text">
          Zhang, C., Huang, Y., Wang, J., Fang, W., Lu, D., Stamper, J., Fancsali, S., Holstein, K., & Aleven, V. (2019).  Early detection of wheel spinning: Comparison across tutors, models, features, and operationalizations. In Proceedings of the Twelfth International Conference on Educational Data Mining (EDM’19). IEDMS.  [pre-print available upon request]

      </b-card-text>
    </b-card>
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
    padding-bottom: 1%;
    padding-left: 2%;
    padding-right: 2%;
}
</style>
