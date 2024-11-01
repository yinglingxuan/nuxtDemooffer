<template>
    <div class="moon">
      <div class="moon-pit">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
      </div>
    </div>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div>
       <img src="/images/canvas/bridge.png" style="margin-top: 30px;margin-left: 30px;" alt="">
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';


onMounted(() => {
 
})

onUnmounted(() => {

})
</script>
<style scoped>
    @import url("@/plugins/hover.css");
    @import url("@/plugins/font.css");
    .container {
  width: 704px;
  height: 460px;
  /* position: absolute;
  top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
}

.cover {
  display: inline-block;
  height: 200px;
  width: 320px;
  margin: 15px;
  border-radius: 8px;
}

@media screen and (max-width: 700px) {
  .container {
    width: 100%;
    position: relative;
    transform: translate(0%, 0%);
    top: 0;
    left: 0;
  }

  .cover {
    display: block;
    height: 200px;
    width: 320px;
    margin: 15px auto;
  }
}

.atvImg {
  border-radius: 8px;
  transform-style: preserve-3d;
  -webkit-tap-highlight-color: rgba(#000, 0);
}

.atvImg img {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(14, 21, 47, 0.25);
}

.atvImg-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.2s ease-out;
}

.atvImg-container.over .atvImg-shadow {
  box-shadow: 0 45px 100px rgba(14, 21, 47, 0.4),
    0 16px 40px rgba(14, 21, 47, 0.4);
}

.atvImg-layers {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  transform-style: preserve-3d;
}

.atvImg-rendered-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  background-size: cover;
  transition: all 0.1s ease-out;
  overflow: hidden;
  border-radius: 8px;
}

.atvImg-shadow {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  transition: all 0.2s ease-out;
  box-shadow: 0 8px 30px rgba(14, 21, 47, 0.6);
}

.atvImg-shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0) 60%);
}
</style>
