<template>
  <section class="dashboard-statistic-account">
    <b-card-header class="pb-1">
      <h3 class="font-weight-bolder text-dark mb-0">
        Performa Akun
      </h3>
      <b-card-text class="font-small-3 mr-auto ml-1 mt-25">
        ({{ resolveDateRange() }})
      </b-card-text>
    </b-card-header>
    <b-card-body>
      <b-row class="match-height">
        <b-col
          class="d-flex justify-content-center align-items-center"
          cols="12"
          xl="3"
          sm="6"
        >
          <div style="width:fit-content;position:relative">
            <statistic-card-with-line-chart
              icon="HeartIcon"
              variant="warning"
              :statistic="followersGrowthSeriesData[0] !== undefined ? kFormatter(sumBy(followersGrowthSeriesData, 'y')) : ''"
              :statistic-growth="followersGrowthSeriesData[0] !== undefined && followersCountSeriesData[0] !== undefined ? `${((sumBy(followersGrowthSeriesData, 'y')) / (followersCountSeriesData[0].y - followersGrowthSeriesData[0].y) * 100).toFixed(0)}%` : ''"
              statistic-title="Jumlah Follower Baru"
              :statistic-subtitle="followersGrowthSeriesData[0] !== undefined ? `sejak ${formatDate(followersGrowthSeriesData[0].x)}` : ''"
              :series-data="followersGrowthChartData.series"
              style="filter:blur(20px)"
            />
            <div
              class="w-100 h-100 d-flex justify-content-center align-items-center"
              style="position:absolute;top:0"
            >
              <dashboard-overlay
                small
                responsive
              >
                <template #content-text>
                  <p class="mb-1 font-weight-bolder text-dark">
                    Mau lihat grafik <span class="text-primary">Jumlah Konten Terposting</span> lebih lengkap?
                  </p>
                </template>
              </dashboard-overlay>
            </div>
          </div>
        </b-col>
        <b-col
          class="d-flex justify-content-center align-items-center"
          cols="12"
          xl="3"
          sm="6"
        >
          <div style="width:fit-content;position:relative">
            <statistic-card-with-line-chart
              icon="MessageSquareIcon"
              variant="danger"
              :statistic="mediaGrowthSeriesData[0] !== undefined ? sumBy(mediaGrowthSeriesData, 'y') : ''"
              :statistic-growth="mediaGrowthSeriesData[0] !== undefined && mediaCountSeriesData[0] !== undefined ? `${(sumBy(mediaGrowthSeriesData, 'y') / (mediaCountSeriesData[0].y - mediaGrowthSeriesData[0].y) * 100).toFixed(0)}%` : ''"
              statistic-title="Jumlah Konten Terposting"
              :statistic-subtitle="mediaGrowthSeriesData[0] !== undefined ? `sejak ${formatDate(mediaGrowthSeriesData[0].x)}` : ''"
              :series-data="mediaGrowthChartData.series"
              style="filter:blur(20px)"
            />
            <div
              class="w-100 h-100 d-flex justify-content-center align-items-center"
              style="position:absolute;top:0"
            >
              <dashboard-overlay
                small
                responsive
              >
                <template #content-text>
                  <p class="mb-1 font-weight-bolder text-dark">
                    Mau lihat grafik <span class="text-primary">Jumlah Konten Terposting</span> lebih lengkap?
                  </p>
                </template>
              </dashboard-overlay>
            </div>
          </div>
        </b-col>
        <b-col
          class="d-flex justify-content-center align-items-center"
          cols="12"
          xl="3"
          sm="6"
        >
          <div style="width:fit-content;position:relative">
            <statistic-card-with-line-chart
              icon="RadioIcon"
              variant="info"
              :statistic="reachAverage !== null ? reachAverage.toFixed(2) : ''"
              :statistic-growth="reachAverageGrowth !== null ? `${parseFloat(reachAverageGrowth).toFixed(0)}%` : ''"
              statistic-title="Avg Reach"
              statistic-subtitle="vs 7 hari sebelumnya"
              :series-data="reachChartData.series"
              style="filter:blur(20px)"
            />
            <div
              class="w-100 h-100 d-flex justify-content-center align-items-center"
              style="position:absolute;top:0"
            >
              <dashboard-overlay
                small
                responsive
              >
                <template #content-text>
                  <p class="mb-1 font-weight-bolder text-dark">
                    Mau lihat grafik <span class="text-primary">Average Reach</span> lebih lengkap?
                  </p>
                </template>
              </dashboard-overlay>
            </div>
          </div>
        </b-col>
        <b-col
          cols="12"
          xl="3"
          sm="6"
          class="d-flex justify-content-center align-items-center"
        >
          <div style="width:fit-content;position:relative">
            <statistic-card-with-line-chart
              icon="SmileIcon"
              avatar-color="#7A62F9"
              color="#5496FF"
              color-gradient="#8739E5"
              :statistic="impressionsAverage !== null ? impressionsAverage.toFixed(2) : ''"
              :statistic-growth="impressionsAverageGrowth !== null ? `${parseFloat(impressionsAverageGrowth).toFixed(0)}%` : ''"
              statistic-title="Avg Impression"
              statistic-subtitle="vs 7 hari sebelumnya"
              :series-data="impressionsChartData.series"
              style="filter:blur(20px)"
            />
            <div
              class="w-100 h-100 d-flex justify-content-center align-items-center"
              style="position:absolute;top:0"
            >
              <dashboard-overlay
                small
                responsive
              >
                <template #content-text>
                  <p class="mb-1 font-weight-bolder text-dark">
                    Mau lihat grafik <span class="text-primary">Average Impression</span> lebih lengkap?
                  </p>
                </template>
              </dashboard-overlay>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="match-height">
        <b-col
          cols="12"
          xl="6"
        >
          <b-card>
            <template #header>
              <h4 class="font-weight-bolder text-dark mb-0">
                Engagement Rate
              </h4>
              <div class="mr-auto ml-50 mb-25">
                <feather-icon
                  id="engagement-rate-help-icon"
                  icon="HelpCircleIcon"
                  size="20"
                  class="text-muted cursor-pointer"
                />
                <b-popover
                  target="engagement-rate-help-icon"
                  triggers="hover"
                  placement="top"
                  custom-class="dashboard-popover"
                >
                  <template #title>
                    <span class="font-small-3 font-weight-bolder">Engagement Rate</span>
                  </template>
                  <p class="font-small-3">
                    Menampilkan jumlah skor (dalam presentase) <strong><em>engagement rate</em></strong> akun kamu yang dihitung sejak tanggal terakhir hingga tanggal sekarang dipilih.
                  </p>
                  <p class="font-small-3 mb-0">
                    Data yang di grafik merupakan capaian <strong><em>engagement rate</em></strong> harianmu.
                  </p>
                </b-popover>
              </div>
            </template>
            <div class="d-flex justify-content-center align-items-center">
              <div
                class="w-100"
                style="filter:blur(20px)"
              >
                <b-card-text class="font-small-3">
                  <h1
                    v-if="engagementGrowthRate !== null"
                    class="mb-0 font-large-1 font-weight-bolder"
                    :class="[`text-${parseFloat(engagementGrowthRate) >= 0 ? 'black' : 'danger'}`]"
                  >
                    {{ parseFloat(engagementGrowthRate).toFixed(2) }}%
                  </h1>
                  <div v-if="engagementGrowthRateGrowth !== null">
                    <span :class="[`text-${parseFloat(engagementGrowthRateGrowth) >= 0 ? 'success' : 'danger'}`]">
                      {{ parseFloat(engagementGrowthRateGrowth) >= 0 ? '+' : '-' }}
                      {{ Math.abs(parseFloat(engagementGrowthRateGrowth)).toFixed(2) }}%
                    </span> vs 7 hari sebelumnya
                  </div>
                </b-card-text>
                <vue-apex-charts
                  type="line"
                  height="240"
                  :options="engagementGrowthRateChartData.chartOptions"
                  :series="engagementGrowthRateChartData.series"
                />
              </div>
              <div style="position:absolute">
                <dashboard-overlay responsive />
              </div>
            </div>
          </b-card>
        </b-col>
        <b-col
          cols="12"
          xl="6"
        >
          <b-card>
            <template #header>
              <h4 class="font-weight-bolder text-dark mb-0">
                Follower Growth Rate
              </h4>
              <div class="mr-auto ml-50 mb-25">
                <feather-icon
                  id="follower-growth-rate-help-icon"
                  icon="HelpCircleIcon"
                  size="20"
                  class="text-muted cursor-pointer"
                />
                <b-popover
                  target="follower-growth-rate-help-icon"
                  triggers="hover"
                  placement="top"
                  custom-class="dashboard-popover"
                >
                  <template #title>
                    <span class="font-small-3 font-weight-bolder">Follower Growth Rate</span>
                  </template>
                  <p class="font-small-3">
                    Menampilkan jumlah skor (dalam presentase) <strong><em>follower growth rate</em></strong> akun kamu yang dihitung sejak tanggal terakhir hingga tanggal sekarang dipilih.
                  </p>
                  <p class="font-small-3 mb-0">
                    Data yang di grafik merupakan data <strong><em>follower</em></strong> harianmu.
                  </p>
                </b-popover>
              </div>
            </template>
            <div class="d-flex justify-content-center align-items-center">
              <div
                class="w-100"
                style="filter:blur(20px)"
              >
                <b-card-text class="font-small-3">
                  <h1
                    class="mb-0 font-large-1 font-weight-bolder"
                    :class="[`text-${parseFloat(followerGrowthRate) >= 0 ? 'black' : 'danger'}`]"
                  >
                    {{ parseFloat(followerGrowthRate).toFixed(2) }}%
                  </h1>
                  <div v-if="followerGrowthRateGrowth !== null">
                    <span :class="[`text-${parseFloat(followerGrowthRateGrowth) >= 0 ? 'success' : 'danger'}`]">
                      {{ parseFloat(followerGrowthRateGrowth) >= 0 ? '+' : '-' }}
                      {{ Math.abs(parseFloat(followerGrowthRateGrowth)).toFixed(2) }}%
                    </span> vs 7 hari sebelumnya
                  </div>
                </b-card-text>
                <vue-apex-charts
                  type="line"
                  height="240"
                  :options="followerGrowthRateChartData.chartOptions"
                  :series="followerGrowthRateChartData.series"
                />
              </div>
              <div style="position:absolute">
                <dashboard-overlay responsive />
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-card
            no-body
            class="mb-0"
          >
            <b-card-header class="pb-sm-0">
              <!-- title -->
              <b-card-title class="d-flex mr-50">
                <h4 class="font-weight-bolder text-dark mb-50">Engagement
                  <span class="font-weight-normal ml-25">(Like+Comment)</span>
                </h4>
                <div class="ml-50 mb-75">
                  <feather-icon
                    id="engagement-area-help-icon"
                    icon="HelpCircleIcon"
                    size="20"
                    class="text-muted cursor-pointer"
                  />
                  <b-tooltip
                    title="Jumlah Engagement yang terjadi dari konten yang kamu unggah"
                    target="engagement-area-help-icon"
                  />
                </div>
              </b-card-title>
              <!--/ title -->

              <!-- Tips button -->
              <b-button
                variant="gradient-primary"
                class="d-flex align-items-center py-50 px-1 ml-sm-auto"
                style="filter:blur(11px)"
              >
                Tips&nbsp;<span class="d-none d-md-block">Untukmu!</span>
                <feather-icon
                  size="20"
                  icon="ChevronRightIcon"
                  class="ml-25 ml-md-75"
                />
              </b-button>
              <!-- Tips button -->
            </b-card-header>
            <b-overlay
              show
              variant="transparent"
            >
              <b-card-body
                class="pb-0 w-100"
                style="filter:blur(20px)"
              >
                <vue-apex-charts
                  id="engagement-area-chart"
                  type="area"
                  height="380"
                  :options="engagementAreaChartData.chartOptions"
                  :series="engagementAreaChartData.series"
                />
              </b-card-body>
              <template #overlay>
                <dashboard-overlay
                  responsive
                  text-nowrap
                />
              </template>
            </b-overlay>
          </b-card>
        </b-col>
      </b-row>
    </b-card-body>
  </section>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardBody, BCardText, BRow, BCol, BButton, BTooltip, BPopover, BOverlay,
} from 'bootstrap-vue'
import { onMounted, watch } from '@vue/composition-api'
import VueApexCharts from 'vue-apexcharts'
import { formatDate, kFormatter } from '@core/utils/filter'
import { sumBy } from 'lodash'

import useDashboard from '../useDashboard'
import DashboardOverlay from '../DashboardOverlay.vue'
import useDashboardStatisticAccount from './useDashboardStatisticAccount'
import StatisticCardWithLineChart from './components/statistics-cards/StatisticCardWithLineChart.vue'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BCardText,
    BRow,
    BCol,
    BButton,
    BTooltip,
    BPopover,
    BOverlay,

    StatisticCardWithLineChart,
    DashboardOverlay,
  },
  setup() {
    const {
      // UI
      resolveDateRange,
    } = useDashboard()

    const {
      // Computed
      accountData,
      followersCountSeriesData,
      followersGrowthSeriesData,
      followersGrowthChartData,
      followerGrowthRate,
      followerGrowthRateChartData,
      followerGrowthRateGrowth,
      mediaCountSeriesData,
      mediaGrowthSeriesData,
      mediaGrowthChartData,
      reachAverage,
      reachAverageGrowth,
      reachSeriesData,
      reachChartData,
      impressionsAverage,
      impressionsAverageGrowth,
      impressionsSeriesData,
      impressionsChartData,
      engagementGrowthRate,
      engagementGrowthRateGrowth,
      engagementGrowthRateSeriesData,
      engagementGrowthRateChartData,
      engagementAreaChartData,
      // Methods
      calculatePerformaStatistics,
    } = useDashboardStatisticAccount()

    onMounted(() => {
      calculatePerformaStatistics()
    })

    watch(accountData, () => {
      calculatePerformaStatistics()
    })

    return {
      // Computed
      accountData,
      followersCountSeriesData,
      followersGrowthSeriesData,
      followersGrowthChartData,
      followerGrowthRate,
      followerGrowthRateChartData,
      followerGrowthRateGrowth,
      mediaCountSeriesData,
      mediaGrowthSeriesData,
      mediaGrowthChartData,
      reachAverage,
      reachAverageGrowth,
      reachSeriesData,
      reachChartData,
      impressionsAverage,
      impressionsAverageGrowth,
      impressionsSeriesData,
      impressionsChartData,
      engagementGrowthRate,
      engagementGrowthRateGrowth,
      engagementGrowthRateSeriesData,
      engagementGrowthRateChartData,
      engagementAreaChartData,
      // UI
      sumBy,
      formatDate,
      kFormatter,
      resolveDateRange,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/bootstrap-extended/utilities';

.dashboard-statistic-account {
  .apexcharts-canvas {
    .apexcharts-yaxis,
    .apexcharts-xaxis {
      &-label {
        fill: $gray-500;
      }
    }

    .apexcharts-text,
    .apexcharts-tooltip-text,
    .apexcharts-datalabel-label,
    .apexcharts-datalabel {
      @extend .font-small-2;
    }
  }
}

#engagement-area-chart {
  .apexcharts-canvas {
    .apexcharts-legend {
      padding: 0;
      margin-bottom: 1rem;

      .apexcharts-legend-series {
        display: flex;
        @include media-breakpoint-up(lg) {
          margin-right: 2rem !important;
        }
        .apexcharts-legend-marker {
          margin-right: 0.5rem;
        }
      }
    }
  }
}
</style>
