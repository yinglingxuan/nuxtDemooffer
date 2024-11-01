
import VueKinesis from 'vue-kinesis'

export default defineNuxtPlugin(() => {
  return {
    provide: {
        vueKinesis: () => VueKinesis
    }
  }
})