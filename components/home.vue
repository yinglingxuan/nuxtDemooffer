<template>
        <div style="height: 2000px;border: solid 1px red;"></div>
        <div class="nav_bo">
            <Nav></Nav>
        </div>
        <!-- 中间的滚动变化 -->
         <div style="height: 100vh;">
            <div class="conter_body" :style="{'position':positionValue}">
                <div class="conter  wow animate__animated animate__zoomIn"  >
                    <div class="text_boder" :style="{ 'opacity': textOpacity }">
                        <div class="txtwav flip" >
                            绽放生命精彩，让年华如酒越久越香
                        </div>
                    </div>
                    <div class="mar_border " :style="{ 'transform': count, 'opacity': opacityCount,'background-image': 'radial-gradient(farthest-corner at '+opacityCount*100+'%'+' '+textOpacity*100 +''+'%, black, red)'  }">
                        <!-- <img src="/images/canvas/scenery4.jpg" style="width: 100%;height: 100%;" alt=""> -->
                    </div>
                </div>
                <div style="height: 500px;">
                    <Background></Background>
                </div>
            </div>
         </div>
        <!-- //关于我的 -->
        <div >
            <div class="about_body"  >
                    <div class="about_left" :style="{'height':aboutHeight+'px'}">
                        <div class="about_left_ul" :style="{'position':aboutValue}">
                            <div class="about_ul_h1 ">关于我们{{ demoIndex }}</div>
                            <div class="about_ul_li " :class="demoIndex == 0 ? 'on_about_ul_h1':''"><Icon v-show="demoIndex == 0" name="cuida:caret-right-outline" size="24px" />列表1</div>
                            <div class="about_ul_li" :class="demoIndex == 1 ? 'on_about_ul_h1':''"><Icon v-show="demoIndex == 1" name="cuida:caret-right-outline" size="24px" />列表2</div>
                            <div class="about_ul_li" :class="demoIndex == 2 ? 'on_about_ul_h1':''"><Icon v-show="demoIndex == 2" name="cuida:caret-right-outline" size="24px" />列表3</div>
                            <div class="about_ul_li" :class="demoIndex == 3 ? 'on_about_ul_h1':''"><Icon v-show="demoIndex == 3" name="cuida:caret-right-outline" size="24px" />列表4</div>
                        </div>
                        
                    </div>
                    <div class="about_right"  >
                        <div class="about_right_top" :style="{'position':aboutTxtValue}">
                            <div style="height: 20%;  background: rgba(255, 255, 255, 1);"></div>
                            <div style="height: 20%;  background: rgba(255, 255, 255, 0.8);"></div>
                            <div style="height: 20%;  background: rgba(255, 255, 255, 0.6);"></div>
                            <div style="height: 20%;  background: rgba(255, 255, 255, 0.4);"></div>
                            <div style="height: 20%;  background: rgba(255, 255, 255, 0.2);"></div>
                        </div>
                        <div class="about_right_conter" id="about_right_conter" ref="about_right_conter">
                            文章列表
                            <div  class="intro_info">
                                <p>我们的愿景是重塑未来，人人享有愉悦晚景</br> —— 一个充满快乐、健康和无限可能的时代</p>
                                </br>
                                <ul><li>活得更长久</li><li>身心更健康</li><li>优雅地老去</li></ul>
                                <p>我们的使命是守护生命，赋予人们力量</p>
                            </div>
                            <div>随便</div>

                            <div class="intro_info">
                                <div class="text intro-title hidden">我们的公司</div>
                                <div class="intro-content" ><p>WellAging AI 晚晴呵护健康科技成立于2023年，是一家致力于开发人工智能居家养老解决方案的创新型科技公司。我们的目标是实现在熟悉的家中安享晚年，为长者营造更健康、更积极、更自主的生活方式。</p></div>
                            </div>
                            <div class="intro_info">
                                <div class="text intro-title hidden">我们的优势</div>
                                <div class="intro-content" ><ul><li>深度同理心与用户场景导向</li><li>创新的人工智能技术</li><li>供应链资源</li><li>全球合作资源与海外渠道</li></ul></div>
                            </div>
                            <div class="intro_info">
                                <div class="text intro-title hidden">我们的团队</div>
                                <div class="intro-content" ><p>我们的核心团队汇聚了全球顶尖人才，包括来自哈佛、加州大学、牛津和清华等世界一流学府的学术精英，以及曾效力于微软、百度和英特尔等科技巨头的业界翘楚。团队成员在人工智能、机器人技术、医疗健康、产品设计和商业拓展等领域拥有深厚的专业知识和丰富经验。</p><br><p>凭借这支跨界融合的团队，我们致力于将创新科技与人文关怀相结合，重新定义百岁人生。让我们携手共创人间重晚晴。</p><p></p><p><br></p><p>刘少山博士</p><p>创始人兼首席执行官</p></div>
                            </div>
                            <div class="about_scroll_bottom" id="about_scroll_bottom"  ref="about_scroll_bottom"></div>
                        </div>
                        <div class="about_right_bottom" :style="{'position':aboutTxtValue}">
                            <div style="height: 20%;  background: rgba(255, 255, 255, 0.2);"></div>
                            <div style="height: 20%;  background: rgba(255, 255, 255, 0.4);"></div>
                            <div style="height: 20%;  background: rgba(255, 255, 255, 0.6);"></div>
                            <div style="height: 20%;  background: rgba(255, 255, 255, 0.8);"></div>
                            <div style="height: 20%;  background: rgba(255, 255, 255, 1);"></div>
                        </div>
                    </div>
            </div>

        </div>
        <div style="margin-top: 100px;height: 1000px;">
            <Solutions></Solutions>
            <!-- <div data-aos="fade-up" class="tw-w-40 tw-h-40 tw-bg-red-400 my-10 demo1" >1</div>
            <div data-aos="fade-down" class="tw-w-40 tw-h-40 tw-bg-red-400 my-10 demo1" >2</div>
            <div data-aos="fade-right" class="tw-w-40 tw-h-40 tw-bg-red-400 my-10 demo1" >3</div>
            <div data-aos="fade-left" class="tw-w-40 tw-h-40 tw-bg-red-400 my-10 demo1" >4</div>
            <div data-aos="fade-right" class="tw-w-40 tw-h-40 tw-bg-red-400 my-10 demo1" >5</div> -->




        </div>
        <Pensolutions></Pensolutions>
  </template>
<script setup>

// import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { ref, onMounted, onUnmounted } from 'vue'
const { $aos } = useNuxtApp()

const count = ref(1); //缩放
const baseScale = ref(1); // 基础缩放比例
const maxScale = ref(2); // 最大缩放比例
const opacityCount = ref(0) //透明度
const textOpacity = ref(1) // 文本透明度    
const positionValue = ref('fixed') // 首页的定位
const aboutValue = ref('static') // 关于我的的定位
const aboutTxtValue = ref('absolute') // 关于我的的定位
const aboutHeight = ref(0) // 关于我的的高度
const about_right_conter = ref(null) //当前元素下的所有元素的位置
const demoIndex = ref(0);
// const about_scroll_bottom = ref(null); //关于我的最后滚动的位置
const doScroll = (event) => {
  let scrollTop = event.currentTarget.pageYOffset;
  const screenHeight =window.screen.height; //获取当前屏幕的高度
  const about_scroll_bottom = document.getElementById('about_scroll_bottom').getBoundingClientRect().top; // 获取关于我的最后滚动的位置
  
  let demo = about_right_conter.value.getElementsByClassName('intro_info') //关于我的的下面文章列表所有的元素
  for (let i = 0; i < demo.length; i++) {
        const element = demo[i];
        const rect = element.getBoundingClientRect(); // 获取元素位置信息
        console.info('元素位置',rect.top)
        //找到第一个正数就可以
        if((rect.top-200) >0){
            demoIndex.value = i
            break
        }
        
    }


  if(scrollTop>=2000){
    positionValue.value='relative'
  }else{
    positionValue.value='fixed'
    //缩放的等比例
    const scale = baseScale.value + (maxScale.value - baseScale.value) * (scrollTop / 2000);
    //  透明度的等比例
    const opacity = 3 * (scrollTop / 2000)
    count.value = 'scale(' + scale + ')';
    opacityCount.value = opacity
    textOpacity.value = 1 - opacity
    // console.info(scale, '------', opacity, '------', textOpacity.value,'---',scrollTop)
  }
  //关于我的滚动判断
  if(scrollTop>(1600 + screenHeight)){aboutTxtValue.value = 'fixed'}

  console.info(document.getElementById('about_scroll_bottom').getBoundingClientRect().top)
//   if(about_scroll_bottom<=600){
//     debugger
//     aboutValue.value = 'static'
//     aboutTxtValue.value = 'absolute'
//   }
  if(scrollTop>(1900 + screenHeight) && about_scroll_bottom>400){ //第一页的结束位置加上当前屏幕的高度 并且滚动的最后位置在屏幕的600左右
    aboutValue.value = 'sticky'
    aboutTxtValue.value = 'fixed'
    console.info(1)
  }else if(scrollTop<(2000 + screenHeight) || about_scroll_bottom<=400) {
    aboutValue.value = 'sticky'
    aboutTxtValue.value = 'absolute'
    console.info(2)
  } if(scrollTop<(2000 + screenHeight)){
    aboutValue.value = 'static'
  }
}
const i = (n, e) => {
  for (var t in e) {
    var a = document.createElement("span");
    a.innerHTML = e[t] === " " ? "&nbsp;" : e[t];
    n.appendChild(a)
  }
}
onMounted(() => {
  $aos().init({
    easing: 'ease-out-back',
    duration: 1000,
    useClassNames: false,
  })
  aboutHeight.value = window.screen.height +100;
  console.info('高度',aboutHeight.value)
  window.addEventListener('scroll', doScroll)
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 可选，平滑滚动效果
  });
  var n = document.getElementsByClassName("txtwav");
  for (var e = 0, t = n.length; e < t; e++) {
    var a = n[e],
      r = a.textContent.trim();
    a.innerHTML = null;
    i(a, r)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', doScroll)
}) 

</script>
  <style scoped lang="scss">
  @import url("@/plugins/hover.css");
  @import url("@/plugins/font.css");
        .demo1{
            width: 100px;
            background-color: red;
        }
        .about_ul_h1{
            font-size: 40px;
            font-weight: bolder;
            margin-bottom: 40px;
            transition: transform 1s;
        }
        .about_ul_li{
            font-size: 24px;
            padding: 5px 0px;
            transition: transform 0.5s;
        }
        .on_about_ul_h1{
            font-size: 24px;
            font-weight: bold;
            color: #DA400F;
            transform: scale(1.5);
            padding-left: 20px;
        }
        .about_body{
            display: flex;
            width: 100%;
            position: static;
            .about_left{
               width: 35%;
            //    border: solid 1px red;
               display: flex;
               justify-content:  flex-end;
            //    align-items: center;
            //    padding: 20px;
               .about_left_ul{
                    margin-top: 350px;
                    height: 300px;
                    position: absolute;
                    bottom: 0;
                    top: 28%;
                    // transform: translateY(-50%);
               }
            }
            .about_right{
                flex: 1;
                position: absolute;
                right: 0;
                width: 60%;
                // height: 100%;
                .about_right_top{
                    // position: absolute;
                    top: 0;
                    // border: solid 1px red;
                    width: 100%;
                    height: 300px;
                    // background: rgba(255, 255, 255, 0.5);
                    // opacity: 0.5;
                }
                .about_right_conter{
                    // border: solid 1px red;
                    margin-top: 30%;
                    width: 50%;
                }
                .about_right_bottom{
                    // position: absolute;
                    bottom: 0;
                    // border: solid 1px red;
                    width: 100%;
                    height: 300px;
                    // background: rgba(255, 255, 255, 0.5);
                    // opacity: 0.5;
                }
            }
            .intro_info{
                margin-bottom: 100px;
            }
        }
        .nav_bo{
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 9999;
        }
        .conter_body{
            /* position: relative; */
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            // background: #222;
            background: url('/images/canvas/water.png') no-repeat;
            background-size: 100%;
        }
        .conter{
            position: absolute;
            width: 1000px;
            height: 400px;
             top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            /* border: solid 1px red; */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .text_boder{
            position: absolute;
            font-size: 50px;
            color: #fff;
            /* background: #fff; */
            transition: transform 0.3s;
           
        }
        .mar_border{
            position: absolute;
            background: #fff;
            width: 400px;
            height: 300px;
        }









        
  </style>
  