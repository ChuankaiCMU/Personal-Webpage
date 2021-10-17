<template>
<div>
    <div v-if="$mq !== 'mobile'">
        <b-card class = "transparent_capstone" img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/WikidataCSCW.png?raw=true" img-alt="Card image" img-left img-width = 36% img-height = 36%>
        <b-card-body>
      <b-card-text class = "textcapstone">
        <h4> An Exploration of WikidataContributors’ Motivations </h4>
        In this project, we conducted an interview study with 15 Wikidata editors. Through inductive coding, we discovered that editors take on
        different kind of tasks based on their personal characteristics. We further discovered that the structured nature of Wikidata brings
         unique motivation to Wikidata editors. Lastly, we shared the community's perspective about contribution reuse.
        [Paper (preprint) soon available : Accepted by The 25th ACM Conference On Computer-Supported Cooperative Work And Social Computing (CSCW 2022)]
      </b-card-text>
        </b-card-body>
    </b-card>
    </div>
    <div v-if="$mq === 'mobile'">
        <b-card class = "transparent_capstone" img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/WikidataCSCW.png?raw=true" img-alt="Card image" img-top img-width = 100% >
        <b-card-body>
      <b-card-text class = "textcapstone">
          <h4> An Exploration of WikidataContributors’ Motivations </h4>
        In this project, we conducted an interview study with 15 Wikidata editors. Through inductive coding, we discovered that editors take on
        different kind of tasks based on their personal characteristics. We further discovered that the structured nature of Wikidata brings
         unique motivation to Wikidata editors. Lastly, we shared the community's perspective about contribution reuse.
      [Paper (preprint) soon available : Accepted by The 25th ACM Conference On Computer-Supported Cooperative Work And Social Computing (CSCW 2022)]
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
