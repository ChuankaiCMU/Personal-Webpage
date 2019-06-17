<template>
<div>
    <div v-if="$mq !== 'mobile'">
        <b-card class = "transparent_capstone" img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/ITS.png?raw=true" img-alt="Card image" img-left img-width = 36% img-height = 36%>
        <b-card-body>
      <b-card-text class = "textcapstone">
        <h4> Wheel-Spinning Early Detector </h4>
        When building Intelligent Tutoring System(ITS), one of the major goals is to detect students' unproductive persistance(wheel spinning)
        in an early stage. In our project, we constructed six wheel spinning detectors and compared their performance under two different wheel spinning criteria with three datasets. The results show that two prominent
criteria for wheel spinning diverge substantially, and that a Random Forest model has the most consistent performance in early detection of wheel spinning across datasets and wheel spinning criteria. This work brings us closer to unifying strands of prior work on wheel spinning (e.g., understanding how different criteria compare) and to early detection of wheel spinning in educational practice.
      </b-card-text>
        </b-card-body>
    </b-card>
    </div>
    <div v-if="$mq === 'mobile'">
        <b-card class = "transparent_capstone" img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/ITS.png?raw=true" img-alt="Card image" img-top img-width = 100% >
        <b-card-body>
      <b-card-text class = "textcapstone">
          <h4> Wheel-Spinning Early Detector </h4>
        When building Intelligent Tutoring System(ITS), one of the major goals is to detect students' unproductive persistance(wheel spinning)
        in an early stage. In our project, we constructed six wheel spinning detectors and compared their performance under two different wheel spinning criteria with three datasets. The results show that two prominent
criteria for wheel spinning diverge substantially, and that a Random Forest model has the most consistent performance in early detection of wheel spinning across datasets and wheel spinning criteria. This work brings us closer to unifying strands of prior work on wheel spinning (e.g., understanding how different criteria compare) and to early detection of wheel spinning in educational practice.
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
 .textcapstone{
     color:black;
     text-align: left!important;
 }
</style>
