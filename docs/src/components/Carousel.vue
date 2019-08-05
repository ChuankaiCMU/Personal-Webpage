<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="80000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/Basketball.PNG?raw=true"
       text="">
      </b-carousel-slide>
      <b-carousel-slide
        text=""
        img-src="https://github.com/ChuankaiCMU/Personal-Webpage/blob/master/docs/src/assets/Band.JPG?raw=true"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        >
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>

    <p class="mt-5">
      Charles used to be the lead flute player in the Chinese Orchestra of Wuhan University. He loves traditional Chinese music and is good at playing flute, xun, bawu and other seven musical instruments.
      Charles also loves playing basketball. His dream is to become an NBA player but now it seem less likely to come true.
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
