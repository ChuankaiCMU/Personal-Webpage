<template>
<div>
    <div v-if="$mq !== 'mobile'">
        <b-card class = "transparent_profile" img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/Selfie.jpg?raw=true" img-alt="Card image" img-left img-width = 18% img-height = 18%>
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
        <b-card class = "transparent_profile" img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/Selfie.jpg?raw=true" img-alt="Card image" img-top img-width = 100%>
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
.transparent_profile {
  background-color: transparent!important;
  margin-top: auto;
  margin-bottom: auto;
  border-color: transparent;
 }
 .textintro{
     color:black;
     text-align: center!important;
     font-size: 150% !important;
 }
</style>
