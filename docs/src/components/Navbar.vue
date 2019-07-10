<template>
    <div>
  <b-navbar toggleable="lg" type="dark"  class = "transparent">
    <b-navbar-brand><router-link to="/" class = "navtext">Charles Chuankai Zhang (张传凯)</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/" class = "navtext"> Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/Research" class = "navtext"> Research</router-link></b-nav-item>
        <b-nav-item> <router-link to="/Construction" class = "navtext"> Personal</router-link></b-nav-item>
      </b-navbar-nav>
      <router-view></router-view>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style>
.transparent {
  background-color: transparent!important;
 }
 .navtext{
     color:maroon!important;
     text-align: center!important;
 }
</style>
