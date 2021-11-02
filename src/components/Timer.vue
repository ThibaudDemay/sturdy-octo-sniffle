<template>
  <p>{{ time }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: "Timer",
  props: {
    routeName: String as PropType<string>,
    startTime: {
      type: Number as PropType<number>,
      default: 10,
    }
  },
  setup(props) {
    const router = useRouter()
    const enabled = ref(false)
    const time = ref(props.startTime)

    onMounted(() => {
      enabled.value = true
    })

    watch(enabled, (value: boolean) => {
      if (value === true) {
        setTimeout(() => {
          time.value--
        }, 1000)
      }
    })

    watch(time, (value: number) => {
      if (value > 0 && enabled.value) {
        setTimeout(() => {
          time.value--
        }, 1000)
      } else if (value == 0) {
        router.push({ name: props.routeName })
      }
    })

    return { time }
  }
});
</script>