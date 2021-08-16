<template>
<div>
    <div v-if="$mq !== 'mobile'">
        <b-card class = "transparent_capstone" img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/gender.png?raw=true" img-alt="Card image" img-left img-width = 36% img-height = 36%>
        <b-card-body>
      <b-card-text class = "textcapstone">
        <h4> Wikidata Gender Gap Case Study </h4>
        A gender gap has been identified in Wikidata: Less than 22% of the human items are about women. We ask: What is the source of this gender gap? Is it a result from action of Wikidata editors or is it only reflecting the existing real world gender
         bias? Through a case study, we compared data from Wikidata along with other two data sources. We found that: (i) The most popular categories of people in Wikidata are male-dominant professions such as American football. (ii) Within a certain set of
        academic professions, Wikidata is no more biased than the real world notable assessments. Furthermore, the quantity and quality of men and women Wikidata items are similar.
      <a href = "https://nbviewer.jupyter.org/github/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/publication/opensym2021-6.pdf" class = "paper">
          [Paper (preprint) : In 17th International Symposium on Open Collaboration (OpenSym 2021)]
        </a>
      </b-card-text>
        </b-card-body>
    </b-card>
    </div>
    <div v-if="$mq === 'mobile'">
        <b-card class = "transparent_capstone" img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/gender.png?raw=true" img-alt="Card image" img-top img-width = 100% >
        <b-card-body>
      <b-card-text class = "textcapstone">
          <h4> Wikidata Gender Gap Case Study </h4>
        A gender gap has been identified in Wikidata: Less than 22% of the human items are about women. We ask: What is the source of this gender gap? Is it a result from action of Wikidata editors or is it only reflecting the existing real world gender
         bias? Through a case study, we compared data from Wikidata along with other two data sources. We found that: (i) The most popular categories of people in Wikidata are male-dominant professions such as American football. (ii) Within a certain set of
        academic professions, Wikidata is no more biased than the real world notable assessments. Furthermore, the quantity and quality of men and women Wikidata items are similar.
      <a href = "https://nbviewer.jupyter.org/github/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/publication/opensym2021-6.pdf" class = "paper">
          [Paper (preprint) : In 17th International Symposium on Open Collaboration (OpenSym 2021)]
        </a>
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
