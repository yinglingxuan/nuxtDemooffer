<template>
    <div style="height: 5000px;">
        <!-- <div id="top"></div> -->
        <div id="box"></div>
        <div id="blue"></div>

        <div id="demo"></div>
        <div id="yellow"></div>
    </div>
    
         
</template>
<script setup>

// import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap,  } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
onMounted(() => {
    // 
    // gsap.from("#box", {
    //     scrollTrigger: "#logo", // 此行代码表示触发动画的元素，只需要增加该行代码，就可以实现想要的效果。
    //     duration: 2,
    //     scale: 0.3
    // });
    // gsap.registerPlugin(ScrollTrigger) 
    // gsap.timeline({
    //     scale: 2,
    //     scrollTrigger: {
    //         trigger: '#box', // 需要监听滑动入可视窗的dom选择器
    //         start: 'top top', // 动画开始执行的时机，第一个位置和第二个位置重合即动画开始
    //         end: 'bottom top', // 动画结束时机，第一个位置和第二个位置重合即动画结束
    //         markers: true, // 是否显示start end 的标识
    //         scrub: true, // 是否需要绑定滚动条和动画执行关系
    //         pin: true // 是否需要锁定某个dom在可视区, true固定trigger所指向的dom， 也可配置另外的dom选择器，如 '.box2'
    //     } 
    // })
    // let tl = gsap.timeline({
    //     // yes, we can add it to an entire timeline!
    //     scrollTrigger: {
    //         trigger: '#box',
    //         pin: true, // 将某个元素固定在某个位置；pin可以是css选择器字符串、布尔值或者直接dom元素
    //         start: 'top top', // 当触发器的顶部击中视区的顶部时
    //         end: '+=500', // 在开始部分滚动500 px后结束
    //         scrub: 1, // 平稳擦洗，只需1秒即可“赶上”滚动条
    //         markers: true, // 是否显示start end 的标识
    //         snap: {
    //             snapTo: 'labels', // 捕捉到时间轴中最近的标签
    //             duration: { min: 2, max: 3 }, // 快照动画应至少为0.2秒，但不超过3秒（由速度决定）
    //             delay: 0.2, // 距离上次滚动事件等待0.2秒，然后再执行快照
    //             ease: 'power1.inOut', // 快照动画的易用性（默认情况下为“power 3”）
    //             scale: 2,
    //         }
    //     }
    // });
  
    //滚动效果
    gsap.registerPlugin(ScrollTrigger) 
    gsap.to("#box", {
        rotation: 360,
        scale: 3,
        backgroundColor: "red",
        borderRadius:'60%',
        x: 1000,  // 移动到对应的坐标
        scrollTrigger: {
            trigger: "#box",
            scrub: true,
            markers: true, // 是否显示start end 的标识
            start: 'top top', // 当触发器的顶部击中视区的顶部时
            end: '+=2000', // 在开始部分滚动500 px后结束
            pin: "#top", // 将某个元素固定在某个位置；pin可以是css选择器字符串、布尔值或者直接dom元素；
            
        },
    });
    gsap.to("#blue", {
        rotation: 360,
        scale: 3,
        backgroundColor: "blue",
        borderRadius:'60%',
        x: -1000,  // 移动到对应的坐标
       
        scrollTrigger: {
            
            trigger: "#blue",
            scrub: true,
            markers: true, // 是否显示start end 的标识
            start: 'top top', // 当触发器的顶部击中视区的顶部时
            end: '+=2000', // 在开始部分滚动500 px后结束
            pin: "#top", // 将某个元素固定在某个位置；pin可以是css选择器字符串、布尔值或者直接dom元素；
            
        },
    });

    gsap.to("#yellow", {
        rotation: 360,
        scale: 3,
        backgroundColor: "yellow",
        borderRadius:'60%',
        x: 1000,  // 移动到对应的坐标
        yoyo: true, 
        stagger:1,
        scrollTrigger: {
            
            trigger: "#yellow",
            scrub: true,
            markers: true, // 是否显示start end 的标识
            start: '2000px', // 当触发器的顶部击中视区的顶部时
            end: '+=4000', // 在开始部分滚动500 px后结束
            pin: "#top", // 将某个元素固定在某个位置；pin可以是css选择器字符串、布尔值或者直接dom元素；
            
        },
    });

    //基础功能
    // gsap.to("#box", {
    //     duration: 5,  //动画的持续时间
    //     x: 1000,  // 移动到对应的坐标
    //     rotation: 360,   // 旋转的度数
    //     scale: 1.5,    //缩放放大
    //     ease: "bounce",  // 反弹效果
    //     repeat: -1,   // 重复
    //     yoyo: true,   // 是否来回移动 溜溜球
    //     stagger:1,	//每个目标动画开始之间的时间（秒）
    //     repeatDelay:1, //如果我们想要为后面的任何重复运动添加延迟，可以使用repeatDelay属性
    //     onComplete:()=>{  // 动画完成时的回调函数

    //     }
    // });
})

onUnmounted(() => {
  
}) 

</script>
  <style scoped lang="scss">
  
  #box {
      width: 100px;
      height: 100px;
      background-color: red;
      position: sticky;
      top: 50%;
    //   left: 50%;
      transform: translate(0%, -50%);
    }
     #blue{
        width: 100px;
        height: 100px;
        background-color: blue;
        position: sticky;
        top: 50%;
        left: 100%;
        right: 0px;
        transform: translateY(-50%);
     }   
     #yellow{
        width: 100px;
        height: 100px;
        background-color: yellow;
        position: sticky;
        top: 50%;
        left: 0%;
        transform: translate(-50% -50%);
     } 
  </style>
  