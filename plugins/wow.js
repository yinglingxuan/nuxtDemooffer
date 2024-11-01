// ~/plugins/wow.js
import Vue from 'vue'
import WOW from 'wowjs'
 
Vue.directive('wow', {
  inserted(el, binding) {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false
    })
    binding.value && binding.value.constructor === Object ? wow.init(binding.value) : wow.init()
    el.classList.add('animated')
  }
})