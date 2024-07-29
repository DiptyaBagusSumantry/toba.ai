import { ref } from '@vue/composition-api'
import store from '@/store'
import footerStoreModule from './footerStoreModule'

export default function useUserAnalytics() {
  const FOOTER_APP_STORE_MODULE_NAME = 'footer-page'
  const msgEmail = ref('')

  // Register module
  if (!store.hasModule(FOOTER_APP_STORE_MODULE_NAME)) store.registerModule(FOOTER_APP_STORE_MODULE_NAME, footerStoreModule)
  // end Register module

  const sendEmail = () => {
    if (msgEmail.value.trim() !== '') store.dispatch('footer-page/sendSubscriberEmail', msgEmail.value)
  }

  return {
    sendEmail,
    msgEmail,
  }
}
