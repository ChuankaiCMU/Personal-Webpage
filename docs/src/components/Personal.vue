<template>
<div>
    <div class = "nav-container">
    <Navbar></Navbar>
    </div>
    <div class = "tmp-container">
        <Carousel></Carousel>
    </div>
</div>
</template>
<script>
import Navbar from './Navbar.vue'
import Carousel from './Carousel.vue'
export default {
  components: {
    Navbar,
    Carousel
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
