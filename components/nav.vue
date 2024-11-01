<template>
  <div class="nav_body" id="home">
    <div class="nav_ul div_flex_justify_space_between">
      <div>
        {{ $t('logoName') }}
      </div>
      <div class="div_flex_justify_space_between">
        <div class="i18n_body">
           <div class="dropdown">
            <div class="dropbtn"> <Icon name="gis:globe-o"  size="24px" /> </div>
            <div class="dropdown-content">
              <a href="#" :class="cookieLocale == 'en' ?'on_dropdown':''" @click="onI18n('en')">English</a>
              <a href="#" :class="cookieLocale == 'zh' ?'on_dropdown':''" @click="onI18n('zh')">中文</a>
            </div>
          </div>
        </div>
        <div>
          <div class="dropdown">
            <div class="dropbtn" @mouseover="onMenu(true)" @mouseout="onMenu(false)"> <Icon v-show="!menu" name="uiw:appstore-o" size="24px" /><Icon v-show="menu" name="uiw:appstore"  size="24px" /> </div>
            <div class="dropdown-content dropdown_content_big_width" @mouseover="onMenu(true)" @mouseout="onMenu(false)">
              <a :class="tagValue == 'home' ?'on_dropdown':''" @click="onTag('home')" href="#home" >{{ $t('home') }}</a>
              <a :class="tagValue == 'about' ?'on_dropdown':''" @click="onTag('about')" href="#about">{{ $t('about') }}</a>
              <a :class="tagValue == 'solutions' ?'on_dropdown':''" @click="onTag('solutions')" href="#solutions">{{ $t('solutions') }}</a>
              <a :class="tagValue == 'community' ?'on_dropdown':''" @click="onTag('community')" href="#community">{{ $t('community') }}</a>
              <a :class="tagValue == 'contactUS' ?'on_dropdown':''" @click="onTag('contactUS')" href="#contactUS">{{ $t('contactUS') }}</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
    
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
const menu = ref(false)
const { locale } = useI18n()
const cookieLocale = ref('zh');
const tagValue = ref('home')
const onI18n = (value) => {
  const cookieLang = useCookie('lang')
  locale.value = value
  cookieLang.value = value
  cookieLocale.value = value
}
const onTag = (value)=>{
  tagValue.value = value
}

const onMenu = (value)=>{
  menu.value = value
}
onMounted(() => {

})

onUnmounted(() => {
  // context.value.removeEventListener('scroll', doScroll)
}) 
</script>
<style lang="scss" scoped>
    .nav_body{
      color: var(--white);
      display: flex;
      width: 100%;
      
      .nav_ul{
        flex: 1; /* 每个项目平均分配空间 */
        margin: 20px 10%;
        // padding:20px 10%;
      }
    }

.i18n_body{
  padding: 0 20px;
}

.dropdown {
  position: relative;
  display: inline-block;
}
 
.dropdown-content {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 90px;
  overflow: hidden;
  transform: translateX(-35%);
  transition: max-height 0.5s ease-in-out;
  max-height: 0;
  margin-top: 10px;
  text-align: center;
  border-radius: 10px;
  opacity: 0.8;

}
.dropdown_content_big_width{
  min-width: 120px;
}
 
.dropdown:hover .dropdown-content {
  max-height: 200px; /* 设置为足够大，可以容纳所有下拉项 */
}
.dropbtn {
  border: none;
  cursor: pointer;
}
.dropdown-content a {
  color: black;
  padding: 5px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {background-color: #f1f1f1;color: black !important;}

.on_dropdown{
  background: #DA400F;
  color: #fff !important;
}
</style>
