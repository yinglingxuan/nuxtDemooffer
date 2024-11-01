<template>
       <div class="solutions_ul">
            <div class="solutions_ul_li hvr-glow hvr-grow-shadow hvr-bob" data-aos="fade-up" data-aos-delay="300"  data-aos-duration="2000">demo1</div>
            <div class="solutions_ul_li hvr-glow hvr-grow-shadow hvr-bob" data-aos="fade-down" data-aos-delay="300"  data-aos-duration="2000">demo2</div>
            <div class="solutions_ul_li hvr-glow hvr-grow-shadow hvr-bob" data-aos="fade-right"  data-aos-delay="300" data-aos-duration="2000">demo3</div>
       </div>
  </template>
<script setup>

// import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { ref, onMounted, onUnmounted } from 'vue'
const { $aos } = useNuxtApp()


onMounted(() => {
    $aos().init({
        easing: 'ease-out-back',
        duration: 1000
    })
 
})

onUnmounted(() => {
 
}) 
</script>
  <style scoped lang="scss">
    .solutions_ul{
        display: flex;
        justify-content: center;
    }
    .solutions_ul_li{
        margin: 0 20px;
        background: red;
        width: 300px;
        height: 500px;
    }
        
  </style>
  