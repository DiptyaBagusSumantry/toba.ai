<template>
  <div v-if="accountData.id">
    <dashboard-header />
    <b-tabs
      id="dashboard-tabs"
      v-model="activeDashboardTab"
    >
      <b-tab>
        <template #title>
          <div class="tab-icon d-flex flex-column">
            <div class="mx-auto mb-25">
              <b-img
                :src="activeDashboardTab === 0 ?
                  require(`@/assets/images/analytics/icons/kompetitor-active.svg`) :
                  require(`@/assets/images/analytics/icons/kompetitor-inactive.svg`)
                "
                width="48px"
                height="48px"
              />
            </div>
            <span>
              Kompetitor
            </span>
          </div>
        </template>
        <dashboard-kompetitor />
      </b-tab>
      <b-tab>
        <template #title>
          <div class="tab-icon d-flex flex-column">
            <div class="mx-auto mb-25">
              <b-img
                :src="activeDashboardTab === 1 ?
                  require(`@/assets/images/analytics/icons/statistik-active.svg`) :
                  require(`@/assets/images/analytics/icons/statistik-inactive.svg`)
                "
                width="48px"
                height="48px"
              />
            </div>
            <span>
              Statistik
            </span>
          </div>
        </template>
        <dashboard-statistic />
      </b-tab>
      <b-tab>
        <template #title>
          <div class="tab-icon d-flex flex-column">
            <div class="mx-auto mb-25">
              <b-img
                :src="activeDashboardTab === 2 ?
                  require(`@/assets/images/analytics/icons/top-post-active.svg`) :
                  require(`@/assets/images/analytics/icons/top-post-inactive.svg`)
                "
                width="48px"
                height="48px"
              />
            </div>
            <span>
              Top Post
            </span>
          </div>
        </template>
        <dashboard-post />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from '@vue/composition-api'
import { BImg, BTabs, BTab } from 'bootstrap-vue'
import store from '@/store'
import { useRouter } from '@core/utils/utils'

import DashboardHeader from './DashboardHeader.vue'
import DashboardKompetitor from './dashboard-kompetitor/DashboardKompetitor.vue'
import DashboardStatistic from './dashboard-statistic/DashboardStatistic.vue'
import DashboardPost from './dashboard-post/DashboardPost.vue'

import useDashboard from './useDashboard'
import dashboardStoreModule from './dashboardStoreModule'

export default {
  components: {
    BImg,
    BTabs,
    BTab,
    DashboardHeader,
    DashboardKompetitor,
    DashboardStatistic,
    DashboardPost,
  },
  setup(props, context) {
    const { route } = useRouter()
    const activeDashboardTab = ref(0)

    const DASHBOARD_APP_STORE_MODULE_NAME = 'app-dashboard'

    // Register module
    if (!store.hasModule(DASHBOARD_APP_STORE_MODULE_NAME)) store.registerModule(DASHBOARD_APP_STORE_MODULE_NAME, dashboardStoreModule)
    // end Register module

    onMounted(() => {
      if (route.value.name === 'dashboard') store.dispatch(`${DASHBOARD_APP_STORE_MODULE_NAME}/fetchAccountData`, route.value.params.username)
    })

    onUnmounted(() => {
      // UnRegister on leave
      if (store.hasModule(DASHBOARD_APP_STORE_MODULE_NAME)) store.unregisterModule(DASHBOARD_APP_STORE_MODULE_NAME)
      // end UnRegister on leave
    })

    const { accountData } = useDashboard(props, context)

    return {
      accountData,
      activeDashboardTab,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/apps/dashboard.scss';
</style>
