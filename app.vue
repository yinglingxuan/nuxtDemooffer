<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
    useHead({
      title: '我的应用',
      meta: [
        { name: 'description', content: '我的神奇网站。' }
      ],
      bodyAttrs: {
        class: 'test'
      },
      script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    })
    useSeoMeta({
      title: '我的神奇网站',
      ogTitle: '我的神奇网站',
      description: '这是我的神奇网站，让我来告诉你关于它的一切。',
      ogDescription: '这是我的神奇网站，让我来告诉你关于它的一切。',
      ogImage: 'https://example.com/image.png',
      twitterCard: 'summary_large_image',
    })
</script>
<style>
@import url("@/plugins/index.css");

@font-face {
  font-family: 'MyWebFont'; /* 给字体命名 */
  src: url('@/plugins/static/font/OPPO_Sans_4.0.ttf') format('ttf'), /* URL 指向字体文件 */
       url('@/plugins/static/font/OPPO_Sans_4.0.ttf') format('truetype'); /* 为了iOS */
  font-weight: normal; /* 设置字体的粗细 */
  font-style: normal; /* 设置字体的风格 */
  font-display: swap; /* 字体加载时的显示方式，可选 */
}
*{
  font-family: 'MyWebFont', sans-serif !important;  
}

</style>