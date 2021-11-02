<template>
  <div>
    <h1>Waiting</h1>
    <Timer route-name="DisplayWork" />
    <img :src="imgSrc" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Timer from '@/components/Timer.vue'
import useGIPHY from '@/use/giphy'

export default defineComponent({
  name: "Waiting",
  components: {
    Timer
  },
  setup() {
    const imgWaiting = useGIPHY('still waiting')
    return { imgSrc: imgWaiting.src }
  }
})
</script>