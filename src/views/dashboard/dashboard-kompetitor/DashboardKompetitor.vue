<template>
  <div id="dashboard-kompetitor">
    <b-card
      class="account-list w-100 mb-2 mb-lg-3"
      :class="{
        'px-1': !isShow(2)
      }"
      no-body
    >
      <div class="d-flex align-items-center section-title">
        <h3 class="font-weight-bolder text-dark my-0">
          Bandingkan akun kompetitor
          <feather-icon
            id="popover-kompetitor-1"
            icon="HelpCircleIcon"
            size="20"
            class="text-muted cursor-pointer ml-25"
          />
          <b-popover
            target="popover-kompetitor-1"
            triggers="hover focus"
            :content="tooltips.tooltipKompetitor1.content"
            custom-class="dashboard-popover"
          />
        </h3>
      </div>
      <div class="d-flex kompetitor-accounts">
        <dashboard-kompetitor-accounts
          main
          :data="{
            username: `@${accountData.username}`,
            src: accountData.profile_picture_url,
          }"
        />
        <div class="kompetitor-add-account mt-1 mt-sm-0">
          <add-account />
        </div>
      </div>
    </b-card>
    <b-card
      class="account-performa w-100 mb-2 mb-lg-3"
      :class="{
        'px-1': !isShow(2)
      }"
      no-body
    >
      <div class="select-account-list">
        <select-account />
      </div>
      <div class="d-flex align-items-center section-title">
        <h3 class="font-weight-bolder text-dark my-0">
          Performa akun kompetitor
        </h3>
        <feather-icon
          id="popover-kompetitor-2"
          icon="HelpCircleIcon"
          size="20"
          class="text-muted cursor-pointer ml-50"
        />
        <b-popover
          target="popover-kompetitor-2"
          triggers="hover focus"
          :content="tooltips.tooltipKompetitor2.content"
          custom-class="dashboard-popover"
        >
          <template #title>
            <h5 class="text-white m-0">
              {{ tooltips.tooltipKompetitor2.title }}
            </h5>
          </template>
        </b-popover>
      </div>
      <hr>
      <div class="d-flex justify-content-between section-performa relative-container h-100">
        <dashboard-kompetitor-performa
          main
          :data="performaData"
        />
        <div class="component-width flex-grow-1 d-flex justify-content-center align-items-center">
          <dashboard-overlay responsive />
        </div>
      </div>
      <div class="d-flex align-items-center section-title">
        <h3 class="font-weight-bolder text-dark my-0">
          Top Konten
        </h3>
        <feather-icon
          id="popover-kompetitor-3"
          icon="HelpCircleIcon"
          size="20"
          class="text-muted cursor-pointer ml-50"
        />
        <b-popover
          target="popover-kompetitor-3"
          triggers="hover focus"
          :content="tooltips.tooltipKompetitor3.content"
          custom-class="dashboard-popover"
        />
      </div>
      <hr>
      <div class="d-flex justify-content-between section-top-konten relative-container h-100">
        <dashboard-kompetitor-top-konten
          main
          :data="topMediaData"
        />
        <dashboard-kompetitor-top-konten />
        <dashboard-kompetitor-top-konten
          :class="{
            'display-none': !isShow(3)
          }"
        />
        <dashboard-kompetitor-top-konten
          :class="{
            'display-none': !isShow(4)
          }"
        />
        <div class="absolute-container d-flex h-100 w-100">
          <div class="component-width" />
          <div class="component-width flex-grow-1 d-flex justify-content-center align-items-center">
            <dashboard-overlay responsive />
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center section-title">
        <h3 class="font-weight-bolder text-dark my-0">
          Top Hashtag
        </h3>
        <feather-icon
          id="popover-kompetitor-4"
          icon="HelpCircleIcon"
          size="20"
          class="text-muted cursor-pointer ml-50"
        />
        <b-popover
          target="popover-kompetitor-4"
          :title="tooltips.tooltipKompetitor4.title"
          triggers="hover focus"
          :content="tooltips.tooltipKompetitor4.content"
          custom-class="dashboard-popover"
        >
          <template #title>
            <h5 class="text-white m-0">
              {{ tooltips.tooltipKompetitor4.title }}
            </h5>
          </template>
        </b-popover>
      </div>
      <hr>
      <div class="d-flex justify-content-between relative-container h-100">
        <dashboard-kompetitor-top-hashtag
          main
          :data="topHashtag"
        />
        <div class="component-width" />
        <div class="absolute-container w-100 h-100 d-flex justify-content-center align-items-center">
          <dashboard-overlay />
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { BCard, BPopover } from 'bootstrap-vue'

import useDashboardKompetitor from './useDashboardKompetitor'
import useDashboard from '../useDashboard'

import DashboardOverlay from '../DashboardOverlay.vue'

import AddAccount from './AddAccount.vue'
import SelectAccount from './SelectAccount.vue'
import DashboardKompetitorAccounts from './DashboardKompetitorAccounts.vue'
import DashboardKompetitorPerforma from './DashboardKompetitorPerforma.vue'
import DashboardKompetitorTopKonten from './DashboardKompetitorTopKonten.vue'
import DashboardKompetitorTopHashtag from './DashboardKompetitorTopHashtag.vue'

export default {
  components: {
    BCard,
    BPopover,
    AddAccount,
    SelectAccount,
    DashboardKompetitorAccounts,
    DashboardKompetitorPerforma,
    DashboardKompetitorTopKonten,
    DashboardKompetitorTopHashtag,
    DashboardOverlay,
  },
  setup(props, context) {
    const {
      isShow,
    } = useDashboardKompetitor()
    const {
      accountData,
      performaData,
      topMediaData,
    } = useDashboard(props, context)

    const topHashtag = ref([
      {
        hashtag: '#---Data Dummy---',
        likes: 100,
        comments: 100,
      },
      {
        hashtag: '#---Data Dummy---',
        likes: 100,
        comments: 100,
      },
      {
        hashtag: '#---Data Dummy---',
        likes: 100,
        comments: 100,
      },
      {
        hashtag: '#---Data Dummy---',
        likes: 100,
        comments: 100,
      },
      {
        hashtag: '#---Data Dummy---',
        likes: 100,
        comments: 100,
      },
    ])
    const tooltips = ref({
      tooltipKompetitor1: {
        title: '',
        content: 'Membandingkan performa akun-akun kompetitor yang telah kamu tambahkan.',
      },
      tooltipKompetitor2: {
        title: 'Performa akun kompetitor',
        content: 'Menyajikan data akun kompetitormu, mulai dari like, comment, dan engagement rate-nya berdasarkan rentang tanggal yang kamu pilih. Dan, dapat kamu bandingkan langsung dengan performa akun Instagram-mu.',
      },
      tooltipKompetitor3: {
        title: '',
        content: 'Menampilkan konten terbaik yang pernah kamu dan kompetitormu posting.',
      },
      tooltipKompetitor4: {
        title: 'Top Hashtag',
        content: 'Menampilkan hashtag dengan performa terbaik yang pernah kamu pakai maupun kompetitormu pakai. Kamu bisa langsung membandingkan, bahkan dapat mempelajari hastag milik kompetitormu.',
      },
    })

    return {
      isShow,
      tooltips,
      accountData,
      performaData,
      topMediaData,
      topHashtag,
    }
  },
}
</script>
