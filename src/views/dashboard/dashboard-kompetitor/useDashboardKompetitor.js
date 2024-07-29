import { computed } from '@vue/composition-api'
import store from '@/store'

export default function useDashboardKompetitor() {
  const windowWidth = computed(() => store.state.app.windowWidth)

  const isShow = value => {
    if (value === 2 && windowWidth.value <= 650) return false
    if (value === 3 && windowWidth.value <= 910) return false
    if (value === 4 && windowWidth.value <= 1380) return false
    return true
  }

  return {
    isShow,
  }
}
