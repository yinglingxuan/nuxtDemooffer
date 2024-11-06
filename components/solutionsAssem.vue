<template>
  <div class="g-body lang-en" data-page-name="index" data-is-mobile="false">
    <div class="p-body">
    
        <div id="solutions" class="m-solution u-module o-watch-theme" data-theme="mini">
            <div class="u-wrapper--limit-width m-container relative z-20">
                <div class="m-container--inner">
                    <div class="unit-module-head m-head text-center" data-theme="">
                        <div class="m-title">
                            <span class="text">解决方案</span>
                        </div>
                        <div class="m-subtitle">
                            <span class="text">我们致力于推动科技革新，促进科技与实体经济的深度融合</span>
                        </div>
                    </div>

                    <div class="m-body relative">
                        <div class="solution-group grid grid-cols-3">

                            <div class="solution-item--wrapper">
                                <a class="solution-item cursor-alter-area block cursor-pointer"
                                   
                                    target="_blank" data-cursor="text" data-cursor-theme="light"
                                    data-cursor-text="Play">
                                    <div class="layer--item-bg layer--item-bg_1">
                                        <div class="layer--glare">
                                            <div class="js-tilt-glare">
                                                <div class="js-tilt-glare-inner">
                                                    <img width="1000" height="750" class="w-full"
                                                        src="/plugins/static/officialimg/blockchain.png">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-thumb">
                                        <!-- <img src="/plugins/static/picture/1.png" alt=""> -->
                                    </div>
                                    <div class="item-info flex flex-col justify-center">
                                        <div class="item-title">区块链与数字交易平台</div>
                                        <div class="item-desc">鹰投资集团专研于数字资产加密与资产安全，打造高效便捷数字资产投资交易平台</div>
                                        <!-- <button class="item-button inline-flex items-center">
                                            <span class="text">View videos</span>
                                            <i class="ic ueicon-arrow-right-2"></i>
                                        </button> -->
                                    </div>
                                </a>
                            </div>

                            <div class="solution-item--wrapper">
                                <a class="solution-item cursor-alter-area block cursor-pointer"
                                    target="_blank"
                                    data-cursor="text" data-cursor-theme="dark" data-cursor-text="Play">
                                    <div class="layer--item-bg layer--item-bg_2">
                                        <div class="layer--glare">
                                            <div class="js-tilt-glare">
                                                <div class="js-tilt-glare-inner">
                                                    <img width="1000" height="750" class="w-full"
                                                        src="/plugins/static/officialimg/ne3d.png">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-thumb">
                                        <!-- <img src="/plugins/static/picture/2.png" alt=""> -->
                                    </div>
                                    <div class="item-info flex flex-col justify-center">
                                        <div class="item-title">裸眼3D应用</div>
                                        <div class="item-desc">通过裸眼3D赋能，应用于娱乐、教育、医疗、购物、游戏、影视等场景</div>
                                        <!-- <button class="item-button inline-flex items-center">
                                            <span class="text">View videos</span>
                                            <i class="ic ueicon-arrow-right-2"></i>
                                        </button> -->
                                    </div>
                                </a>
                            </div>

                            <div class="solution-item--wrapper">
                                <a class="solution-item cursor-alter-area block cursor-pointer"
                                   
                                    target="_blank" data-cursor="text" data-cursor-theme="light"
                                    data-cursor-text="Play">
                                    <div class="layer--item-bg layer--item-bg_3">
                                        <div class="layer--glare">
                                            <div class="js-tilt-glare">
                                                <div class="js-tilt-glare-inner">
                                                    <img width="1000" height="750" class="w-full"
                                                        src="/plugins/static/officialimg/smartAI.png">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-thumb">
                                        <!-- <img src="/plugins/static/picture/3.png" alt=""> -->
                                    </div>
                                    <div class="item-info flex flex-col justify-center">
                                        <div class="item-title">AI工具智能应用</div>
                                        <div class="item-desc">帮助企业降本增效，为人们生活增添便利；广泛运用与汽车轮胎检测、医学影像、托福考试等领域</div>
                                        <!-- <button class="item-button inline-flex items-center">
                                            <span class="text">View videos</span>
                                            <i class="ic ueicon-arrow-right-2"></i>
                                        </button> -->
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
    .layer--item-bg_1{
        background: url('/plugins/static/officialimg/blockchain.png') no-repeat !important;
        background-size: 100% 100% !important;
        border-radius: 57px !important;
    }
    .layer--item-bg_2{
        background: url('/plugins/static/officialimg/ne3d.png') no-repeat !important;
        background-size: 100% 100% !important;
        border-radius: 57px !important;
    }
    .layer--item-bg_3{
        background: url('/plugins/static/officialimg/smartAI.png') no-repeat !important;
        background-size: 100% 100% !important;
        border-radius: 57px !important;
    }
</style>