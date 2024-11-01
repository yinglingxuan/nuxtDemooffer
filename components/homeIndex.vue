<template>
  <div class="nav_bo">
    <Nav></Nav>
  </div>
  <div class="context" id="context" ref="context" @scroll="doScroll">
    <!-- 隐藏的滚动条 -->
    <div class="scroll" ref="scroll"></div>
  </div>
  <!-- 中间缩放和显示模块 -->
  <div class="cont_body bor_img wow animate__animated animate__zoomIn"  @mouseenter="onFocust">
    <div class="text_boder" :style="{ 'opacity': textOpacity }">
      <div class="txtwav flip">
        绽放生命精彩，让年华如酒越久越香
      </div>
    </div>
    <div class="mar_border" :style="{ 'transform': count, 'opacity': opacityCount }">
      {{ $t('home') }}
    </div>
  </div>
  <!-- 背景 -->
  <div style="height: 500px;">
    <Background></Background>
  </div>

  <div id="jump1">
      
  </div>

</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from "#imports"

const t = useI18n()
// import WOW from 'wowjs'
// import { mojs } from 'mojs';
// import mojs from '@mojs/core'

const context = ref(null);
const count = ref(1); //缩放
const baseScale = ref(1); // 基础缩放比例
const maxScale = ref(2); // 最大缩放比例
const opacityCount = ref(0) //透明度
const textOpacity = ref(1) // 文本透明度
console.info(context)

const doScroll = (event) => {
  let scrollTop = event.target.scrollTop;
  //缩放的等比例
  const scale = baseScale.value + (maxScale.value - baseScale.value) * (event.target.scrollTop / 3000);
  //  透明度的等比例
  const opacity = 3 * (event.target.scrollTop / 3000)
  count.value = 'scale(' + scale + ')';
  opacityCount.value = opacity
  textOpacity.value = 1 - opacity
  console.info(scale, '------', opacity, '------', textOpacity.value)
}




const i = (n, e) => {
  for (var t in e) {
    var a = document.createElement("span");
    a.innerHTML = e[t] === " " ? "&nbsp;" : e[t];
    n.appendChild(a)
  }
}






onMounted(() => {
  context.value.addEventListener('scroll', doScroll)
  context.value.focus();


  var n = document.getElementsByClassName("txtwav");
  for (var e = 0, t = n.length; e < t; e++) {
    var a = n[e],
      r = a.textContent.trim();
    a.innerHTML = null;
    i(a, r)
  }
})

onUnmounted(() => {
  context.value.removeEventListener('scroll', doScroll)
}) 
</script>
<style scoped>
@import url("@/plugins/hover.css");
@import url("@/plugins/font.css");
.nav_bo{
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9999;
}
.context {
  width: 100vw;
  height: 100vh;
  /* border: solid 1px red; */
  overflow: scroll;


}

.cont_body {
  position: absolute;
  width: 800px;
  height: 400px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid 1px red; */
}

.scroll {
  height: 3000px;
  /* background: blue; */
  width: 100%;
  position: relative;
  z-index: 88;
}

.mar_border {
  width: 500px;
  height: 250px;
  position: fixed;
  /* border: solid 1px #fff; */
  background: #fff;
  transition: transform 0.3s;
}

.text_boder {
  position: fixed;
  /* border: solid 1px #fff; */
  font-size: 40px;
  color: #fff;
  /* background: #fff; */
  transition: transform 0.3s;
}







</style>
