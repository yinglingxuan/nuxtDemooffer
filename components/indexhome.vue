<template>
  <div class="g-body lang-en" data-page-name="index" data-is-mobile="false">
    <div class="p-body">
        <div id="homeBody"></div>
        <NavAssem></NavAssem>
        <HomeAssem></HomeAssem>
        <AboutAssem></AboutAssem>
        <SolutionsAssem></SolutionsAssem>
        <IntroAssem></IntroAssem>
        <CommuityAssem></CommuityAssem>
        <FooterAssem></FooterAssem>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
   
onMounted(() => {
  useHead({
      script: [ 
        {
         	type: "text/javascript",
            src: '/static/js/chunk-vendors.js'
        },
        {
         	type: "text/javascript",
            src: '/static/js/index.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          type: "text/css",
          href: '/static/css/index.css',
          crossorigin: ''
        }
      ]
    })

  
})

onUnmounted(() => {

}) 
</script>
<style scoped lang="scss">

</style>