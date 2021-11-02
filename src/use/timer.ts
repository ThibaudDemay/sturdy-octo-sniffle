import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default function useTimer(routeName: string, vtime = 10, autoStart = true) {
  const enabled = ref(false)
  const time = ref(vtime)
  const router = useRouter()

  onMounted(() => {
    if (autoStart === true) {
      enabled.value = true
    }
  })

  const startTimer = (): void => { enabled.value = true }

  const stopTimer = (): void => { enabled.value = false }

  watch(enabled, (value: boolean) => {
    if (value === true) {
      setTimeout(() => { time.value--; }, 1000)
    }
  })

  watch(time, (value: number) => {
    if (value > 0 && enabled.value) {
      setTimeout(() => { time.value-- }, 1000)
    } else if (value == 0) {
      router.push({ name: routeName })
    }
  })

  return { enabled, time, startTimer, stopTimer }
}