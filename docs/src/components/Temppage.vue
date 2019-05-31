<template>
<div>
    <div class = "nav-container">
    <Navbar></Navbar>
    </div>
    <div class = "tmp-container">
        <b-card img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/UNDER-CONSTRUCTION.jpg?raw=true" img-alt="Card image" img-top img-width = 50% >
        <b-card-body>
      <b-card-text>
        <h1> Website under construction, come back later!</h1><br>
      </b-card-text>
        </b-card-body>
    </b-card>
    </div>
</div>
</template>
<script>
import Navbar from './Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
.tmp-container{
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 10%;
}
</style>
