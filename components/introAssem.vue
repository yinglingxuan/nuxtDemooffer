<template>
  <div class="g-body lang-en" data-page-name="index" data-is-mobile="false">
    <div class="p-body">
    
        <div id="m-ai-intro" class="m-ai-intro u-module o-watch-theme relative" data-theme="mini">
            <div class="layer--bg flex justify-center items-center">
                <div class="bg--img">
                    <svg width="1400" height="1400" viewbox="0 0 1400 1400" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_17600_3813)">
                            <rect x="425" y="425" width="551" height="551" rx="275.5" fill="#FF7600" fill-opacity="0.1">
                            </rect>
                        </g>
                        <defs>
                            <filter id="filter0_f_17600_3813" x="244.1" y="244.1" width="912.8" height="912.8"
                                filterunits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feflood flood-opacity="0" result="BackgroundImageFix"></feflood>
                                <feblend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                </feblend>
                                <fegaussianblur stddeviation="90.45" result="effect1_foregroundBlur_17600_3813">
                                </fegaussianblur>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="u-wrapper--limit-width m-container relative z-20 flex justify-center items-center">
                <div class="m-container--inner">
                    <div class="unit-module-head m-head text-center" data-theme="">
                        <div class="m-title">
                            <span class="text">我们的团队与战略<br></span>
                        </div>
                        <div class="m-subtitle">
                            <span class="text">引领创新、专业铸就、稳健前行</span>
                        </div>
                    </div>

                </div>
            </div>
            <div class="m-body relative">
                <div class="ai-intro-group">


                    <a class="item-wrapper flex justify-center items-center" href="/plugins/static/file/patent.pdf"
                        target="_blank">
                        <div class="ai-intro-item">
                            <div class="item-info flex flex-col justify-center">
                                <div class="item-head flex items-center">
                                    <!-- <i class="ic ueicon-book"></i> -->
                                    <Icon name="gis:earth-network-o" class="ic" size="24px" />
                                    <div class="item-title">技术研发</div>
                                </div>
                                <div class="item-desc">我们在区块链技术方面也拥有强大的技术实力，发行的PWP币具有广泛的应用场景和潜力。</div>
                            </div>
                        </div>
                    </a>



                    



                    <a class="item-wrapper flex justify-center items-center" href="/plugins/static/file/awards.pdf"
                        target="_blank">
                        <div class="ai-intro-item">
                            <div class="item-info flex flex-col justify-center">
                                <div class="item-head flex items-center">
                                    <!-- <i class="ic ueicon-awards"></i> -->
                                    
                                    <Icon name="gis:location-on" class="ic" size="24px" />
                                    <div class="item-title">战略目标</div>
                                </div>
                                <div class="item-desc">我们立志成为数字金融领域的旗舰 企业，为全球投资者提供更加优质、高效、定制化的投资服务</div>
                            </div>
                        </div>
                    </a>

                    <a class="item-wrapper flex justify-center items-center"
                        href="https://c9psgvuvv3.feishu.cn/docx/JfuLdDr9uoWNqkxXlyjcHhsMnrb?from=from_copylink "
                        target="_blank">
                        <div class="ai-intro-item">
                            <div class="item-info flex flex-col justify-center">
                                <div class="item-head flex items-center">
                                    <!-- <i class="ic ueicon-pdf"></i> -->
                                    <Icon name="lineicons:investment" class="ic" size="24px" />
                                    <div class="item-title">投资规划</div>
                                </div>
                                <div class="item-desc">我们致力于引进先进的科技与项目，推动产业发展</div>
                            </div>
                        </div>
                    </a>


                    <div class="item-wrapper flex justify-center items-center">
                        <div class="ai-intro-item">
                            <div class="item-info flex flex-col justify-center">
                                <div class="item-head flex items-center">
                                    <!-- <i class="ic ueicon-github"></i> -->
                                    <Icon name="hugeicons:blockchain-07" class="ic" size="24px" />
                                    <div class="item-title">打造科技生态链</div>
                                </div>
                                <div class="item-desc">我们将区块链技术应用于更多场景，拟投资建设裸 眼3D·AI数智园区群，以促进科技与实体经济的深度融合。</div>
                            </div>
                        </div>
                    </div>



                    <div class="item-wrapper flex justify-center items-center">
                        <div class="ai-intro-item">
                            <div class="item-info flex flex-col justify-center">
                                <div class="item-head flex items-center">
                                    <!-- <i class="ic ueicon-database"></i> -->
                                    <Icon name="hugeicons:add-team" class="ic" size="24px" />
                                    <div class="item-title">专业团队</div>
                                </div>
                                <div class="item-desc">我们有资深投资专家、金融科技精英，具有敏锐的视察洞察力与深厚的行业经验</div>
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

</style>