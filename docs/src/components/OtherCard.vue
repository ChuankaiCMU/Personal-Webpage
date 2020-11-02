<template>
    <div>
    <b-card-group >
    <b-card title="AboutMe" class = "transparent">
      <b-card-text class = "text">
        Charles Chuankai Zhang is a first year Ph.D student in <b-link href="https://grouplens.org/">Grouplens</b-link>, University of Minnesota. Charles's advisor is Prof. <b-link href="https://www-users.cs.umn.edu/~terveen/">Loren Terveen</b-link>. His research interest lies in social computing, data visualization,
        crowdsourcing and educational data mining. His recent research focus is combining qualitative and quantatitive research methods to understand the mechanism of peer production platforms like wikipedia and help members of the community meet their goals.
      </b-card-text>
    </b-card>

    <b-card title="Contact" class = "transparent">
      <b-card-text>
        Email: zhan6914 at umn dot edu <br><br>
        <a href = 'https://www.linkedin.com/in/chuankaz/'><img src = '../assets/linkedin.png' class="imageformat" ></a>
        <a href = 'https://www.facebook.com/zhang.chuankai.5'><img src = '../assets/facebook.png' class="imageformat"></a>
        <a href = 'https://twitter.com/Charleszck'><img src = '../assets/twitter.png' class="imageformat"></a>
      </b-card-text>
    </b-card>
  </b-card-group>
    <b-card title="Education" class = "transparent">
      <b-card-text >
        2019.8 - <span class = 'umn'>University of Minnesota Twin Cities </span>, Ph.D in Computer Science <br>
        2017.8 - 2019.5 <span class = 'cmu'>Carnegie Mellon University</span>, Master of Computational Data Science <br>
        2013.9 - 2017.6 <span class = 'whu'>Wuhan University</span>, Bachleor of Engineering <br>
      </b-card-text>
    </b-card>
        <b-card title="Teaching Assistant" class = "transparent">
      <b-card-text >
        2020 Fall  : CSCI 5115--User Interface Design, Implementation and Evaluation <br>
        2020 Spring: CSCI 5115--User Interface Design, Implementation and Evaluation
      </b-card-text>
    </b-card>
</div>
</template>

<style>
.text{
    text-align: left!important;
    color: black!important;
}
.umn{
    color: maroon;
}
.cmu{
    color: #C41E3A;
}
.whu{
    color: #14522c;
}
.transparent {
  background-color: transparent!important;
 }
 .imageformat{
     width: 5%;
     margin-right: 2%
 }
</style>
