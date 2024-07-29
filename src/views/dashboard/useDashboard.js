import { computed } from '@vue/composition-api'
import store from '@/store'
import { formatDate } from '@core/utils/filter'
import router from '@/router'

import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useDashboard() {
  const toast = useToast()
  const showToast = (text, variant, position = 'top-center') => {
    toast({
      component: ToastificationContent,
      props: {
        text,
        variant,
        hideClose: true,
      },
    },
    {
      position,
      toastClassName: `toast-${variant}`,
    })
  }

  const accountData = computed(() => store.state['app-dashboard'].accountData)
  const performaData = computed(() => store.getters['app-dashboard/performaData'])
  const topMediaData = computed(() => store.getters['app-dashboard/topMediaData'])
  const triggerLoadingProcess = computed(() => store.state['app-dashboard'].loadingProcess)

  // Fetch username data
  const fetchAccountData = username => store
    .dispatch('app-dashboard/fetchAccountData', username)
    .then(() => router.push({ path: `/dashboard/${username}/` }))
    .catch(error => {
      if (error.response) {
        const { data: errorData } = error.response
        if (errorData.message) {
          const errorMessage = errorData.message
          if (errorMessage.includes('bisnis')) {
            showToast(`Duuh! Akun @${username} belum akun bisnis`, 'danger')
          } else {
            showToast('Terjadi kesalahan pada sistem kami', 'danger')
          }
        } else showToast(errorData, 'danger')
      } else showToast(error, 'danger')
    })

  /**
   * Return date range for display
   */
  const resolveDateRange = () => {
    // For date frame
    let endDate = new Date()
    let startDate = endDate.fp_incr(6)

    const format = { year: 'numeric', month: 'short', day: '2-digit' }
    startDate = formatDate(startDate, format)
    endDate = formatDate(endDate, format)
    return `${startDate} - ${endDate}`
  }

  const nFormatter = (num, digits) => {
    const lookup = [
      // { value: 1e0, symbol: '' },
      { value: 1e3, symbol: 'K' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' },
    ]
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    const item = lookup.slice().reverse().find(data => Number(num) >= data.value)
    return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : num
  }

  return {
    accountData,
    performaData,
    topMediaData,
    triggerLoadingProcess,
    fetchAccountData,
    // UI
    resolveDateRange,
    nFormatter,
  }
}
