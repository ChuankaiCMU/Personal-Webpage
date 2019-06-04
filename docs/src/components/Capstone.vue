<template>
<div>
    <div v-if="$mq !== 'mobile'">
        <b-card class = "transparent_capstone" img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/me.jpg?raw=true" img-alt="Card image" img-left img-width = 36% img-height = 36%>
        <b-card-body>
      <b-card-text class = "textintro">
        Hi! I'm Charles. <br>
         I'm a researcher, a designer, and a<br>
        nonprofessional basketball player.<br>
        Nice to meet you!
      </b-card-text>
        </b-card-body>
    </b-card>
    </div>
    <div v-if="$mq === 'mobile'">
        <b-card class = "transparent_capstone" img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/me.jpg?raw=true" img-alt="Card image" img-top img-width = 36% img-height = 36%>
        <b-card-body>
      <b-card-text class = "textintro">
        Hi! I'm Charles. <br>
         I'm a researcher, a designer, and a<br>
        nonprofessional basketball player.<br>
        Nice to meet you!
      </b-card-text>
        </b-card-body>
    </b-card>
    </div>
</div>
</template>

<style>
.transparent_capstone {
  background-color: transparent!important;
  margin-top: auto;
  margin-bottom: auto;
 }
 .textintro{
     color:white;
     text-align: center!important;
     font-size: 150% !important;
 }
</style>
