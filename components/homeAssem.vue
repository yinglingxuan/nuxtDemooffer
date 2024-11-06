<template>
  <div class="g-body lang-en" data-page-name="index" data-is-mobile="false">
    <div class="p-body">
  

        <div id="home" class="m-page-banner o-watch-theme" data-theme="normal">
            <div class="layer-bg flex justify-center items-center">
                <div class="canvas-box flex-shrink-0">
                    <canvas id="image-sequence" class="video-canvas" width="1158" height="770"></canvas>
                </div>
                <div class="layer-cover"></div>
            </div>
            <div class="m-container u-wrapper--limit-width relative z-20">
                <div class="relative m-container--inner flex items-center justify-center">
                    <div class="layer--banner-img">
                        <div class="img-wrapper relative">
                            <div class="layer--glare">
                                <!-- <div class="js-tilt-glare">
                                    <div class="js-tilt-glare-inner">
                                        <img width="1000" height="750" class="w-full" src="/plugins/static/picture/glare.png">
                                    </div>
                                </div> -->
                            </div>
                            <div class="img-box">
                                <img src="/plugins/static/officialimg/banner.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="layer--banner-info">
                        <div class="inner flex flex-col items-center">
                            <div class="banner-desc">
                                <span class="text">
                                    我们致力于推动科技革新，专注于投资创新科技并
                                    <br/>致力于打造全球领先裸眼3D技术与生态链的国际化
                                </span>
                            </div>
                            <div class="m-tag">
                                <span class="text">美国鹰投资</span>
                            </div>
                        </div>
                    </div>
                    <div class="m-body flex justify-center flex-col items-center">
                        <div class="m-tag">
                            <span class="text">美国鹰投资</span>
                        </div>
                        <div class="m-desc-wrapper relative">
                            <div class="m-desc first-desc">
                                <div class="row tab-text-group"> 面对新兴市场 <br>如何精确分析现今市场与稳步制定战略？</div>
                            </div>
                            <div class="m-desc">
                                <div class="row tab-text-group">面对新兴市场<br> 如何了解市场发展潜力与精准投资方向？</div>
                            </div>
                            <div class="m-desc">
                                <div class="row tab-text-group">面对新兴市场<br> 如何把握上升投资机会与正确入场时机？</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="layer--cover"></div>
        </div>
    
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
    .img-box{
        width: 500px !important;
        margin-bottom: 100px;
    }
    .layer--banner-info
    {
        margin-top: 120px;
    }
    .text{
        font-size: 30px !important;
    }
    .row{
        font-size: 60px !important;
        word-wrap: break-word !important; /* 允许在长单词或URL地址内部进行换行 */
        overflow-wrap: break-word !important; /* 同上，word-wrap的别名 */
        word-break: break-all !important; 
    }
    @media (max-width: 1100px) {
        .text{
            font-size: 30px !important;
        }
        .tab-text-group{
            font-size: 48px !important;
        }
    }
    @media (max-width: 800px) {
        .text{
            font-size: 30px !important;
        }
        .tab-text-group{
            font-size: 40px !important;
        }
    }
    @media (max-width: 700px) {
        .text{
            font-size: 20px !important;
        }
        .tab-text-group{
            font-size: 30px !important;
        }
    }
    @media (max-width: 500px) {
        .text{
            font-size: 14px !important;
        }
        .img-box{
            width: 380px !important;
        }
        .tab-text-group{
            font-size: 20px !important;
        }
    }

</style>