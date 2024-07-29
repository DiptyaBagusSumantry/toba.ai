import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    // ---------------------- page ---------------------- //
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
        contentClass: 'home',
      },
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/views/faq/Faq.vue'),
      meta: {
        pageTitle: 'Faq',
      },
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/views/help/Help.vue'),
      meta: {
        pageTitle: 'Help',
      },
    },
    {
      path: '/help/:help_title/',
      name: 'help-info',
      component: () => import('@/views/help/HelpInfo.vue'),
      meta: {
        pageTitle: 'Help',
      },
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('@/views/price/Price.vue'),
      meta: {
        pageTitle: 'Pricing',
      },
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('@/views/privacy-policy/PrivacyPolicy.vue'),
      meta: {
        pageTitle: 'Privacy Policy',
      },
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('@/views/terms-of-service/TermsOfService.vue'),
      meta: {
        pageTitle: 'Terms of Service',
      },
    },
    // ---------------------- page ---------------------- //
    {
      path: '/dashboard/:username/',
      name: 'dashboard',
      component: () => import('@/views/dashboard/Dashboard.vue'),
      meta: {
        pageTitle: 'User Analytics',
        contentClass: 'dashboard',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
