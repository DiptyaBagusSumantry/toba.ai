<template>
  <div id="price-container">
    <header>
      <b-card
        no-body
        class="w-100 h-100 mb-0"
      >
        <b-card-body class="d-flex flex-column align-items-center justify-content-center">
          <h2 class="title text-center mb-1 mt-5 mt-sm-2 mt-lg-3">
            Gampang analisisnya, naik terus engagement-nya!
          </h2>
          <b-card-text class="subtitle text-center">
            Tools analisis yang bisa bantu ngembangin akun Instagrammu dengan cepat dan mudah. Biar dirimu semakin yakin, cobain Trial aja dulu!
          </b-card-text>
        </b-card-body>
      </b-card>
    </header>

    <section
      id="price-section"
      class="d-flex justify-content-center p-3"
    >
      <b-row class="match-height justify-content-center w-100">

        <!-- TRIAL -->
        <b-col
          lg="4"
          md="6"
          class="align-items-center"
        >
          <b-card
            class="card-transaction w-100"
            no-body
          >
            <b-card-header>
              <b-card-title>Trial</b-card-title>
            </b-card-header>

            <b-card-body
              class="d-flex flex-column"
            >
              <b-card-text class="pb-2">
                Spesial untuk kamu yang mau nyobain dan explore fitur-fitur keren Toba.AI
              </b-card-text>
              <div
                v-for="trial in trialData"
                :key="trial.mode"
                class="transaction-item"
              >
                <b-media no-body>
                  <b-media-aside>
                    <b-avatar
                      style="border-radius:50%;"
                      size="17"
                      :variant="trial.avatarVariant"
                    >
                      <feather-icon
                        size="10"
                        :icon="trial.avatar"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body>
                    <small>{{ trial.types }}</small>
                  </b-media-body>
                </b-media>
              </div>
              <div class="mt-auto mb-base">
                <div class="price-text mb-3">
                  <h1
                    class="text-primary"
                  >
                    Gratis
                  </h1>
                  <span>
                    / 30 hari
                  </span>
                </div>
                <div>
                  <b-button
                    class="mt-auto"
                    block
                    size="md"
                    variant="flat-primary"
                    :href="`${storeURL}?product=cekbrand`"
                    target="_blank"
                  >
                    Cobain Sekarang!
                  </b-button>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <!-- PAID -->
        <b-col
          lg="4"
          md="6"
          class="align-items-center"
        >
          <b-card
            class="card-transaction card-paid w-100"
            no-body
          >
            <b-card-header>
              <div class="d-flex align-items-center">
                <feather-icon
                  v-if="showDetail"
                  size="24"
                  class="cursor-pointer mr-1"
                  icon="ChevronLeftIcon"
                  @click="showDetail = !showDetail"
                />
                <b-card-title>
                  Berlangganan
                </b-card-title>
              </div>
            </b-card-header>

            <b-card-body v-if="showDetail === false">
              <b-card-text class="mb-2">
                Pas untuk kamu yang baru merintis bisnis, ngembangin personal branding, dan digital agensi
              </b-card-text>
              <div
                v-for="paid in paidData"
                :key="paid.mode"
                class="transaction-item"
              >
                <b-media no-body>
                  <b-media-aside
                    class="align-self-center"
                  >
                    <b-avatar
                      style="border-radius:50%"
                      size="17"
                      :variant="paid.avatarVariant"
                    >
                      <feather-icon
                        size="10"
                        :icon="paid.avatar"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body>
                    <small>{{ paid.types }}</small>
                  </b-media-body>
                </b-media>
              </div>
              <div class="my-3">
                <span>
                  Mulai Dari
                </span>
                <div class="price-text">
                  <span class="mr-1">
                    <s>Rp 399.000</s>
                  </span>
                  <h1 class="text-primary">
                    Rp 120.000
                  </h1>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <b-button
                  block
                  size="md"
                  variant="primary"
                  @click="showDetail = !showDetail"
                >
                  Lihat Pilihan Durasi
                </b-button>
              </div>
            </b-card-body>

            <!-- PAID DETAIL -->
            <b-card-body v-else>
              <b-card-text class="pb-2">
                Pilihan durasi yang tersedia untukmu
              </b-card-text>

              <!-- 1 Bulan -->
              <div class="detail-pricing-column-1-month border-secondary rounded">
                <div class="d-flex justify-content-between">
                  <h4 class="text-primary">
                    1 Bulan
                  </h4>
                  <h4 class="text-primary">
                    Rp 120.000
                  </h4>
                </div>
                <div>
                  <p class="pt-1 text-right">
                    <s>Rp 399.000</s>
                  </p>
                </div>
              </div>

              <!-- 6 Bulan -->
              <div class="detail-pricing-column border-secondary rounded">
                <div>
                  <h4 class="text-primary">
                    6 Bulan
                  </h4>
                  <p class="text-warning pt-1">
                    Hemat 17%
                  </p>
                </div>
                <div>
                  <h4 class="text-primary">
                    Rp 600.000
                  </h4>
                  <p class="pt-1 text-right">
                    <s>Rp 720.000</s>
                  </p>
                </div>
              </div>

              <!-- 1 Tahun -->
              <div class="detail-pricing-column border-secondary rounded">
                <div>
                  <h4 class="text-primary">
                    1 Tahun
                  </h4>
                  <p class="text-warning pt-1">
                    Hemat 33%
                  </p>
                </div>
                <div>
                  <h4 class="text-primary">
                    Rp 960.000
                  </h4>
                  <p class="pt-1 text-right">
                    <s>Rp 1.440.000</s>
                  </p>
                </div>
              </div>

              <div class="d-flex justify-content-center">
                <b-button
                  block
                  size="md"
                  variant="primary"
                  :href="`${storeURL}/product/1/subscription-plan`"
                  target="_blank"
                >
                  Langganan
                </b-button>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import {
  BCard, BCardBody, BCardText, BRow, BCol, BCardHeader, BCardTitle, BMediaBody, BMedia, BMediaAside, BAvatar, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardBody,
    BCardText,
    BRow,
    BCol,
    BCardHeader,
    BCardTitle,
    BMediaBody,
    BMedia,
    BMediaAside,
    BAvatar,
    BButton,
  },
  computed: {
    storeURL() {
      return `${process.env.VUE_APP_WAS_SITE_URL}/#/store`
    },
  },
  data() {
    return {
      showDetail: false,
      trialData: [
        {
          types: '1 akun instagram bisnis',
          avatar: 'CheckIcon',
          avatarVariant: 'success',
          deduction: true,
        },
        {
          types: '1 akun kompetitor',
          avatar: 'CheckIcon',
          avatarVariant: 'success',
          deduction: false,
        },
        {
          types: 'Lihat historik 7 & 30 hari yang lalu',
          avatar: 'CheckIcon',
          avatarVariant: 'success',
          deduction: false,
        },
      ],
      paidData: [
        {
          types: '5 akun instagram bisnis',
          avatar: 'CheckIcon',
          avatarVariant: 'success',
          deduction: true,
        },
        {
          types: '6 akun kompetitor',
          avatar: 'CheckIcon',
          avatarVariant: 'success',
          deduction: false,
        },
        {
          types: 'Lihat historik dengan tanggal kustom',
          avatar: 'CheckIcon',
          avatarVariant: 'success',
          deduction: false,
        },
        {
          types: 'Top tag akun kompetitor',
          avatar: 'CheckIcon',
          avatarVariant: 'success',
          deduction: false,
        },
        {
          types: 'Unduh data csv + pdf',
          avatar: 'CheckIcon',
          avatarVariant: 'success',
          deduction: false,
        },
        {
          types: 'Analisis hashtag pribadi + kompetitor',
          avatar: 'CheckIcon',
          avatarVariant: 'success',
          deduction: false,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/apps/price.scss';
</style>
