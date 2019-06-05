<template>
<div>
    <div v-if="$mq !== 'mobile'">
        <b-card class = "transparent_abnet" img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/ITS.png?raw=true" img-alt="Card image" img-left img-width = 36% img-height = 36%>
        <b-card-body>
      <b-card-text class = "textabnet">
          <h3> AbstractNet </h3>
        AbstractNet aims to provide training data for LSTM-CRF model that could segment research papers into different parts like backgrounds, mechanisms, methods, etc. 
        We combined multiple methods to improve the work of crowd workers and received high quality data in a relatively low cost.
      </b-card-text>
        </b-card-body>
    </b-card>
    </div>
    <div v-if="$mq === 'mobile'">
        <b-card class = "transparent_abnet" img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/ITS.png?raw=true" img-alt="Card image" img-top img-width = 100% >
        <b-card-body>
      <b-card-text class = "textabnet">
        <h3> AbstractNet </h3>
        AbstractNet aims to provide training data for LSTM-CRF model that could segment research papers into different parts like backgrounds, mechanisms, methods, etc. 
        We combined multiple methods to improve the work of crowd workers and received high quality data in a relatively low cost.
      </b-card-text>
        </b-card-body>
    </b-card>
    </div>
</div>
</template>

<style>
.transparent_abnet {
  background-color: transparent!important;
  margin-top: auto;
  margin-bottom: auto;
 }
 .textabnet{
     color:black;
     text-align: left!important;
 }
</style>
