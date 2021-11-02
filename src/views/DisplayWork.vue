<template>
  <div>
    <h1>Display Work</h1>
    <Timer route-name="Home" />
    <img :src="imgSrc" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Timer from '@/components/Timer.vue'
import useGIPHY from '@/use/giphy'

export default defineComponent({
  name: 'DisplayWork',
  components: {
    Timer
  },
  setup() {
    const imgWaiting = useGIPHY('working')
    return { imgSrc: imgWaiting.src }
  }
})
</script>