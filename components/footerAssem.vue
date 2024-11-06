<template>
        <footer id="contact">
            <div class="footer_ul">
              <div class="footer_li">
                <img src="/plugins/static/officialimg/b_LOGO.png" alt="">
              </div>
              <div class="footer_li">关于我们</div>
              <div class="footer_li">用户协议</div>
              <div class="footer_li">个人信息保护政策</div>
              <div class="footer_li">侵权申诉</div>
              <div class="footer_li">企业服务</div>
              <div class="footer_li">中文</div>
              <div class="footer_li">English</div>
              <div class="footer_li">联系方式</div>
              <div class="footer_li">商务合作</div>
            </div>
            <div class="footer_b">
              <!-- <i class="ic ueicon-email"></i> -->
               <a>
                  @ 2008-2022 京ICP备12019481
               </a>
            </div>
        </footer>
      
  </template>
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  

  onMounted(() => {
  
  })
  
  onUnmounted(() => {
    // context.value.removeEventListener('scroll', doScroll)
  }) 
  </script>
  <style lang="scss" scoped>
    #contact{
      padding: 0 20%;
    }
    .footer_ul{
       display: flex;
       flex-wrap:wrap;
       .footer_li{
        // width: 100px;
        padding: 10px 30px;
        text-align: center;
        cursor: pointer;
        white-space: nowrap;
       }
    }
    .footer_b{
      padding: 10px 30px;
      margin-bottom: 20px;
    }

    
    @media (max-width: 991.98px) {
      #contact{
        padding: 0 5%;
      }
      .footer_ul{
        display: flex;
        justify-content: center;
      }
    }
  </style>
  