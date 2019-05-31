<template>
    <div>
    <b-card-group >
    <b-card title="AboutMe" class = "transparent">
      <b-card-text class = "text">
        I am an HCI researcher at University of Minnesota. My research interest is social computing, data visualization,
        crowdsourcing and educational data mining. My advisor is Loren Terveen and Haiyi Zhu. I'm very interested in
        interpreting people's learning process and generating insights or solutions from data produced by intelligent tutoring system or crowd workers.
      </b-card-text>
    </b-card>

    <b-card title="Contact" class = "transparent">
      <b-card-text>
        Email: zhan6914@umn.edu <br>
        Phone: 412-708-7908 <br><br>
        <a href = 'https://www.linkedin.com/in/chuankaz/'><img src = '../assets/linkedin.png' class="imageformat" ></a>
        <a href = 'https://www.facebook.com/zhang.chuankai.5'><img src = '../assets/facebook.png' class="imageformat"></a>
        <a href = 'https://github.com/ChuankaiCMU/'><img src = '../assets/github.svg' class="imageformat"></a>
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
    <b-card title="Publication" class = "transparent">
      <b-card-text class = "text">
          Zhang, C., Huang, Y., Wang, J., Fang, W., Lu, D., Stamper, J., Fancsali, S., Holstein, K., & Aleven, V. (2019).  Early detection of wheel spinning: Comparison across tutors, models, features, and operationalizations. In Proceedings of the Twelfth International Conference on Educational Data Mining (EDM’19). IEDMS.  [pre-print available upon request]

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
    color: #6b670e;
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
