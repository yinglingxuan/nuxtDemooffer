<template>
  <div class="solutions_ul">
    <div class="solutions_ul_li hvr-glow hvr-grow-shadow hvr-bob" data-aos="fade-up" data-aos-delay="1500"
      data-aos-duration="3000">demo1</div>
    <div class="solutions_ul_li hvr-glow hvr-grow-shadow hvr-bob" data-aos="fade-down" data-aos-delay="1500"
      data-aos-duration="3000">demo2</div>
    <div class="solutions_ul_li hvr-glow hvr-grow-shadow hvr-bob" data-aos="fade-right" data-aos-delay="1500"
      data-aos-duration="3000">demo3</div>
  </div>

  <div>
    <!-- space-between分屏后的间距 -->
    <!-- loop开启循环 -->
    <!-- <div class="swiper-container">
      
      <swiper :loop="true"  :modules="modules">
        <swiper-slide v-for="(item, index) in bannerList" :key="index">
          <div style="border: solid 1px red; height: 500px;width: 500px;">
            <img :src="item" alt="" style="width: 100%;">
          </div>
        </swiper-slide>
      </swiper>
    </div> -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in bannerList" :key="index" >
              <div style="border: solid 1px red; height: 500px;width: 500px;">
                <img :src="item" alt="" style="width: 100%;">
              </div>
            </div>
      
        </div>
       
        <div class="swiper-pagination"></div>
    </div>

  </div>
</template>
<script setup>

// import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { ref, onMounted, onUnmounted } from 'vue'

 


const { $aos } = useNuxtApp()
import 'swiper/swiper.css'
import Swipers from 'swiper'


const demo = ref('scenery4.jpg')
const bannerList = ref([])


const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
onMounted(() => {
  $aos().init({
    easing: 'ease-out-back',
    duration: 1000
  })

  bannerList.value = [
    new URL(`/images/canvas/scenery4.jpg`, import.meta.url).href,
    new URL(`/images/canvas/bridge.png`, import.meta.url).href,
    new URL(`/images/canvas/water.png`, import.meta.url).href,
    new URL(`/images/canvas/scenery4.jpg`, import.meta.url).href,
  ]

  new Swipers('.swiper-container', {
    pagination: '.swiper-pagination',
    initialSlide:1,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50, 
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 1000,
          modifier: 1,
          slideShadows : true
      }

  })
  // new Swipers('.swiper-container', {
  //       pagination: '.swiper-pagination',
  //       effect: 'coverflow',
  //       grabCursor: true,
  //       centeredSlides: true,
  //       slidesPerView: 'auto',
  //       coverflow: {
  //           rotate: 50,
  //           stretch: 0,
  //           depth: 100,
  //           modifier: 1,
  //           slideShadows : true
  //       }
  //   });

})

onUnmounted(() => {

}) 
</script>
<style scoped lang="scss">
.solutions_ul {
  display: flex;
  justify-content: center;
}

.solutions_ul_li {
  margin: 0 20px;
  background: red;
  width: 300px;
  height: 500px;
}

.swiper-container {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
  }
  .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 300px;
  }




.swiper-container {


  margin-left: 1.34rem;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 100%;
  height: 100%;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
}
img {
  width: 4.84rem;
  height: 7.52rem;
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}
</style>