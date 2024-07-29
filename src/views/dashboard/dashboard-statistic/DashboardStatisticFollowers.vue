<template>
  <section id="dashboard-statistic-followers">
    <b-card-header class="pb-1">
      <h3 class="font-weight-bolder text-dark mb-0">
        Followers
      </h3>
      <b-card-text class="font-small-3 mr-auto ml-1 mt-25">
        ({{ resolveDateRange() }})
      </b-card-text>
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col cols="12">
          <b-card no-body>
            <b-row class="match-height">
              <b-col
                cols="12"
                lg="6"
              >
                <b-card
                  no-body
                  :class="{ 'border-right border-right-1': $store.state.app.windowWidth > $themeBreakpoints.lg }"
                >
                  <b-card-header>
                    <h4 class="font-weight-bolder text-dark mb-0">
                      Waktu Follower Online Tertinggi
                    </h4>
                  </b-card-header>
                  <b-card-body style="filter:blur(20px)">
                    <small class="font-weight-bolder text-dark">
                      Jumlah follower yang online:
                    </small>
                    <vue-apex-charts
                      height="650"
                      :options="onlineFollowersChartData.chartOptions"
                      :series="onlineFollowersChartData.series"
                      class="mt-2"
                    />
                  </b-card-body>
                </b-card>
                <div style="position:absolute;top:40%;left:25%;right:25%">
                  <dashboard-overlay small />
                </div>
              </b-col>
              <b-col
                cols="12"
                lg="6"
              >
                <b-card
                  no-body
                  :class="{
                    'border-top border-top-1': $store.state.app.windowWidth <= $themeBreakpoints.lg
                  }"
                >
                  <b-card-header>
                    <h4 class="font-weight-bolder text-dark mb-0">
                      Rekomendasi Waktu Posting
                    </h4>
                  </b-card-header>
                  <b-card-body
                    class="mb-auto mt-1 mt-lg-2"
                    style="filter:blur(20px)"
                  >
                    <div
                      v-for="(day, dayIndex) in listOfDays"
                      :key="dayIndex"
                      :class="{'mt-2': dayIndex}"
                    >
                      <h4 class="font-weight-bolder text-dark mb-0">
                        {{ day }}
                      </h4>
                      <div class="d-flex flex-wrap">
                        <span
                          v-for="(item, index) in topOnlineFollowersData.filter(data => data.day === day)"
                          :key="index"
                          :class="['badge', item.isMaxValue ? 'badge-success' : 'badge-primary', 'mr-75 mt-50']"
                        >
                          {{ item.hour }} WIB
                        </span>
                      </div>
                    </div>
                  </b-card-body>
                  <b-card-footer
                    class="d-flex flex-column d-xl-block text-wrap mt-1 mt-lg-2 border-0 font-weight-bold"
                    style="filter:blur(20px)"
                  >
                    <small class="mr-1 mb-50 mb-xl-0">
                      <span class="bullet bullet-primary bullet-sm" />
                      Rekomendasi waktu posting
                    </small>
                    <small>
                      <span class="bullet bullet-success bullet-sm" />
                      Waktu Engagement Tertinggi dalam seminggu
                    </small>
                  </b-card-footer>
                </b-card>
                <div style="position:absolute;top:40%;left:25%;right:25%">
                  <dashboard-overlay small />
                </div>
              </b-col>
            </b-row>
            <b-card-footer style="filter:blur(20px)">
              <b-card-text
                v-if="onlineFollowersData[0]"
                class="text-center font-weight-bold"
              >
                Waktu follower online tertinggimu terjadi terjadi pada hari <strong class="text-success">{{ listOfDays[onlineFollowersData[0].day] }}</strong>, jam <strong class="text-success">{{ resolveOnlineTime(onlineFollowersData[0].hour) }} WIB</strong>
              </b-card-text>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-card no-body>
            <b-row>
              <b-col cols="12">
                <b-card no-body>
                  <b-card-header>
                    <!-- title -->
                    <b-card-title class="d-flex mr-50">
                      <h4 class="font-weight-bolder text-dark mb-0">
                        Lokasi Asal Follower
                      </h4>
                      <div class="ml-50 mb-75">
                        <feather-icon
                          id="followers-location-help-icon"
                          icon="HelpCircleIcon"
                          size="20"
                          class="text-muted cursor-pointer"
                        />
                        <b-tooltip
                          title="Sebaran wilayah/ lokasi asal followersmu"
                          target="followers-location-help-icon"
                        />
                      </div>
                    </b-card-title>
                    <!--/ title -->

                    <!-- Tips button -->
                    <b-button
                      variant="gradient-primary"
                      class="d-flex align-items-center py-50 px-1 ml-sm-auto"
                      disabled
                      style="filter:blur(11px)"
                    >
                      Tips&nbsp;<span class="d-none d-md-block">Untukmu</span>!
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
                    opacity="1"
                    blur="20px"
                  >
                    <b-card-body class="border-bottom border-bottom-1 text-center">
                      <b-img
                        fluid
                        src="@/assets/images/analytics/statistic-followers-map.svg"
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
            <b-row class="match-height">
              <b-col
                cols="12"
                lg="6"
              >
                <b-card no-body>
                  <b-card-header class="pb-1">
                    <h4 class="font-weight-bolder text-dark mb-0">
                      Lokasi Berdasarkan Negara
                    </h4>
                  </b-card-header>
                  <b-overlay
                    :show="$store.state.app.windowWidth < $themeBreakpoints.lg"
                    variant="transparent"
                    opacity="1"
                  >
                    <b-card-body style="filter:blur(20px)">
                      <div
                        v-for="(data, index) in followersCountryPersentageData"
                        :key="index"
                      >
                        <div class="progress-wrapper mt-50">
                          <b-card-text class="mb-0">
                            {{ data.country }}
                          </b-card-text>
                          <div class="d-flex flex-row justify-content-between">
                            <div class="d-block w-100 m-auto">
                              <b-progress
                                v-model="data.value"
                                max="100"
                              />
                            </div>
                            <div
                              style="width:10%"
                              class="pl-50"
                            >
                              <b-card-text>
                                {{ parseFloat(data.value).toFixed(0) }}%
                              </b-card-text>
                            </div>
                          </div>
                        </div>
                      </div>
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
              <b-col
                cols="12"
                lg="6"
                :class="{
                  'border-left border-left-1': $store.state.app.windowWidth > $themeBreakpoints.lg
                }"
              >
                <b-card
                  no-body
                  :class="{
                    'border-top border-top-1': $store.state.app.windowWidth <= $themeBreakpoints.lg
                  }"
                >
                  <b-card-header class="pb-1">
                    <h4 class="font-weight-bolder text-dark mb-0">
                      Lokasi Berdasarkan Kota
                    </h4>
                  </b-card-header>
                  <b-overlay
                    :show="$store.state.app.windowWidth < $themeBreakpoints.lg"
                    variant="transparent"
                    opacity="1"
                  >
                    <b-card-body style="filter:blur(20px)">
                      <div
                        v-for="(data, index) in followersCityPersentageData"
                        :key="index"
                      >
                        <div class="progress-wrapper mt-50">
                          <b-card-text class="mb-0">
                            {{ data.city }}
                          </b-card-text>
                          <div class="d-flex flex-row justify-content-between">
                            <div class="d-block w-100 m-auto">
                              <b-progress
                                v-model="data.value"
                                max="100"
                              />
                            </div>
                            <div
                              style="width:10%"
                              class="pl-50"
                            >
                              <b-card-text>
                                {{ parseFloat(data.value).toFixed(0) }}%
                              </b-card-text>
                            </div>
                          </div>
                        </div>
                      </div>
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
              <div
                v-if="$store.state.app.windowWidth >= $themeBreakpoints.lg"
                style="position:absolute;top:65%;bottom:35%;left:20%;right:20%"
              >
                <dashboard-overlay
                  responsive
                  text-nowrap
                />
              </div>
            </b-row>
            <b-card-footer style="filter:blur(20px)">
              <b-card-text
                v-if="followersCityPersentageData[0]"
                class="text-center font-weight-bold"
              >
                <strong class="text-success">{{ parseFloat(followersCityPersentageData[0].value).toFixed(0) }}%</strong> <em>followers</em>-mu berasal dari <strong class="text-success">{{ followersCityPersentageData[0].city }}, {{ followersCityPersentageData[0].country }}</strong>
              </b-card-text>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-card
            no-body
            class="mb-0"
          >
            <b-card-header class="d-flex justify-content-between">
              <div class="d-flex justify-content-start">
                <h4 class="font-weight-bolder text-dark">
                  Demografi gender dan usia follower
                </h4>
                <div class="ml-50 mb-75">
                  <feather-icon
                    id="followers-gender-age"
                    icon="HelpCircleIcon"
                    size="20"
                    class="text-muted cursor-pointer"
                  />
                  <b-tooltip
                    title="Perbandingan jumlah followers laki-laki dan perempuan serta rentang usia followers-mu"
                    target="followers-gender-age"
                  />
                </div>
              </div>
              <b-button
                variant="gradient-primary"
                class="d-flex align-items-center py-50 px-1 ml-md-auto"
                disabled
                style="filter:blur(11px)"
              >
                Tips&nbsp;<span class="d-none d-md-block">Untukmu</span>!
                <feather-icon
                  size="20"
                  icon="ChevronRightIcon"
                  class="ml-25 ml-md-75"
                />
              </b-button>
            </b-card-header>
            <b-overlay
              show
              variant="transparent"
              opacity="1"
              blur="20px"
            >
              <b-card-body>
                <b-row class="match-height">
                  <b-col xl="6">
                    <b-card
                      no-body
                      class="d-flex flex-column flex-sm-row justify-content-start align-items-center mb-2 mb-xl-0"
                      :class="{ 'border-right border-right-1': $store.state.app.windowWidth >= $themeBreakpoints.xl }"
                    >
                      <vue-apex-charts
                        :options="followersGenderDonutChartData.chartOptions"
                        :series="followersGenderDonutChartData.series"
                        height="250px"
                      />
                      <div class="d-flex flex-row flex-sm-column ml-sm-2 mt-3 mt-sm-0">
                        <b-card-text class="text-nowrap mb-sm-5">
                          <p class="text-followers-female font-weight-bolder font-large-2">
                            {{ Math.round(followersGenderPercentageData['F']) }}%
                          </p>
                          <span class="font-weight-bold">Follower Wanita</span>
                        </b-card-text>
                        <b-card-text class="text-nowrap ml-2 ml-sm-0">
                          <p class="text-primary font-weight-bolder font-large-2">
                            {{ Math.round(followersGenderPercentageData['M']) }}%
                          </p>
                          <span class="font-weight-bold">Follower Laki-laki</span>
                        </b-card-text>
                      </div>
                    </b-card>
                  </b-col>
                  <b-col xl="6">
                    <vue-apex-charts
                      :options="followersGenderAgeBarChartData.chartOptions"
                      :series="followersGenderAgeBarChartData.series"
                      height="240px"
                    />
                  </b-col>
                </b-row>
              </b-card-body>
              <b-card-footer>
                <b-card-text
                  v-if="followersGenderAgeData[0]"
                  class="text-center font-weight-bold"
                >
                  Mayoritas <em>followers</em>-mu adalah <strong class="text-success">{{ followersGenderAgeData[0].gender === 'F' ? 'Wanita' : 'Laki-laki' }}</strong> usia <strong class="text-success">{{ followersGenderAgeData[0].age }} tahun</strong>
                </b-card-text>
              </b-card-footer>
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
  BCard, BCardHeader, BCardFooter, BCardBody, BCardTitle, BCardText, BRow, BCol, BProgress, BButton, BTooltip, BImg, BOverlay,
} from 'bootstrap-vue'
import { onMounted } from '@vue/composition-api'
import { $themeBreakpoints } from '@themeConfig'

import VueApexCharts from 'vue-apexcharts'

import DashboardOverlay from '../DashboardOverlay.vue'

import useDashboard from '../useDashboard'
import useDashboardStatisticFollowers from './useDashboardStatisticFollowers'
import useDashboardStatisticFollowersLocation from './useDashboardStatisticFollowersLocation'

export default {
  components: {
    BCard,
    BCardHeader,
    BCardFooter,
    BCardBody,
    BCardTitle,
    BCardText,
    BRow,
    BCol,
    BProgress,
    BButton,
    BTooltip,
    BImg,
    BOverlay,

    VueApexCharts,

    DashboardOverlay,
  },
  setup(props, context) {
    const { resolveDateRange } = useDashboard(props, context)

    const {
      listOfDays,
      // Refs
      onlineFollowersData,
      topOnlineFollowersData,
      followersGenderAgeData,
      followersGenderPercentageData,
      // Computed
      onlineFollowersChartData,
      followersGenderDonutChartData,
      followersGenderAgeBarChartData,
      // Methods
      calculateFollowersStatistics,
      // UI
      resolveOnlineTime,
    } = useDashboardStatisticFollowers()

    const {
      // Refs
      followersCityPersentageData,
      followersCountryPersentageData,
      // Methods
      getFollowersCityPersentageData,
      getFollowersCountryPersentageData,
    } = useDashboardStatisticFollowersLocation()

    onMounted(async () => {
      calculateFollowersStatistics()

      followersCityPersentageData.value = getFollowersCityPersentageData()
      followersCountryPersentageData.value = await getFollowersCountryPersentageData()
    })
    return {
      listOfDays,
      // Refs
      onlineFollowersData,
      topOnlineFollowersData,
      followersCityPersentageData,
      followersCountryPersentageData,
      followersGenderAgeData,
      followersGenderPercentageData,
      // Computed
      onlineFollowersChartData,
      followersGenderDonutChartData,
      followersGenderAgeBarChartData,
      // UI
      $themeBreakpoints,
      resolveDateRange,
      resolveOnlineTime,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/base/bootstrap-extended/include';

#dashboard-statistic-followers {
  .apexcharts-legend {
    padding: 0 0px;
    justify-content: start !important;
    left: -5px !important;
    .apexcharts-legend-text {
      color: $body-color !important;
      margin-right: 5px !important;
      font-weight: 300 !important;
    }
    .apexcharts-legend-marker {
      margin-right: 5px !important;
    }
  }
  .badge {
    width: 75px;
    font-weight: 400;
  }

  .text-followers-female {
    color: #EA548B;
  }
}
</style>
<style lang="scss" scoped>
// Core variables and mixins
@import '~@core/scss/base/bootstrap-extended/include';

#mapdiv {
  width: 100%;
  height: 400px;
  @include media-breakpoint-down(sm) {
    height: 200px;
  }
}
</style>
