<template>
  <div class="g-body lang-en" data-page-name="index" data-is-mobile="false">
    <div class="p-body">
        <div id="siteNav" class="m-site-nav">
            <div class="m-container u-wrapper--limit-width u-wrapper--limit-width--extra relative z-20">
                <div class="m-container--inner relative">
                    <div class="m-body flex items-center justify-between">
                        <div class="state-pos--left">
                            <a class="m-logo" href="">
                                <h1 class="u-hide">美国鹰投资</h1>
                                <img class="state--theme-color" src="/plugins/static/officialimg/LOGO.png" title="wellaging"
                                    alt="logo">
                                <img class="state--theme-white" src="/plugins/static/officialimg/logow.png" title="wellaging"
                                    alt="logo">
                            </a>
                        </div>
                        <div class="state-pos--right">
                            <div class="oper--wrapper flex">
                                <div class="btn--lang-switch flex items-center justify-center relative">
                                    <div class="btn--inner">
                                        <i class="ic ueicon-earth"></i>
                                    </div>
                                    <div class="m-site-nav--mini">
                                        <div class="site-nav grid grid-flow-row-dense items-center h-full">
                                            <a class="nav-item" :class="cookieLocale == 'en'?'on_nav-item':''" target="_self" data-active>
                                                <div class="nav-inner" @click="onI18n('en')">
                                                    <i class="ic ueicon-arrow-right"></i>
                                                    <span class="text">English</span>
                                                </div>
                                            </a>
                                            <a class="nav-item"  :class="cookieLocale == 'zh'?'on_nav-item':''" target="_self">
                                                <div class="nav-inner" @click="onI18n('zh')">
                                                    <i class="ic ueicon-arrow-right"></i>
                                                    <span class="text">简体中文</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn--open-fold-nav flex items-center justify-center relative">
                                    <div class="btn--inner grid">
                                        <div class="line flex items-center justify-center">
                                            <div class="line-inner"></div>
                                        </div>
                                        <div class="line flex items-center justify-center">
                                            <div class="line-inner"></div>
                                        </div>
                                    </div>
                                    <div class="m-site-nav--mini">
                                        <div class="site-nav grid grid-flow-row-dense items-center h-full">

                                            <a class="nav-item " :class="tagValue == 'home'?'on_nav-item':''" @click="onTag('home')" href="#homeBody" data-target="homeBody" target="_self"
                                                data-active>
                                                <div class="nav-inner">
                                                    <i class="ic ueicon-arrow-right"></i>
                                                    <span class="text"> {{ $t('home') }} </span>
                                                </div>
                                            </a>

                                            <a class="nav-item" :class="tagValue == 'about'?'on_nav-item':''" @click="onTag('about')" href="#about" data-target="about" target="_self">
                                                <div class="nav-inner">
                                                    <i class="ic ueicon-arrow-right"></i>
                                                    <span class="text"> {{ $t('about') }} </span>
                                                </div>
                                            </a>

                                            <a class="nav-item" :class="tagValue == 'solutions'?'on_nav-item':''" @click="onTag('solutions')" href="#solutions" data-target="solutions"
                                                target="_self">
                                                <div class="nav-inner">
                                                    <i class="ic ueicon-arrow-right"></i>
                                                    <span class="text"> {{ $t('solutions') }} </span>
                                                </div>
                                            </a>

                                            <a class="nav-item" :class="tagValue == 'community'?'on_nav-item':''" @click="onTag('community')" href="#community" data-target="community"
                                                target="_self">
                                                <div class="nav-inner">
                                                    <i class="ic ueicon-arrow-right"></i>
                                                    <span class="text"> {{ $t('community') }} </span>
                                                </div>
                                            </a>

                                            <a class="nav-item" :class="tagValue == 'contact'?'on_nav-item':''" @click="onTag('contact')" href="#contact" data-target="contact" target="_self">
                                                <div class="nav-inner">
                                                    <i class="ic ueicon-arrow-right"></i>
                                                    <span class="text"> {{ $t('contactUS') }} </span>
                                                </div>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
const { locale } = useI18n()
const cookieLang = useCookie('lang')
const cookieLocale = ref('zh'); //默认选中的是中文
const tagValue = ref('home'); // 默认的是首页
cookieLang.value = cookieLocale.value
const onI18n = (value) => {
    locale.value = value // 修改语言
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
  .on_nav-item{
    font-weight:700;
    color:#fff;
    background-color:#ff4d00;

   .nav-inner {
        padding-left: 23px !important;
        transform: translateX(0) !important;
    }
    .ic{
        transform:translateX(0) !important;
        opacity:1 !important;
    }
  }
  .on_nav-item:hover{
    color:#fff !important;
    background-color:#ff4d00 !important;
  }
</style>