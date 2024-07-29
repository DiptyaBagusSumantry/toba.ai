<template>
  <b-card
    class="performa-container my-0"
    :class="{
      'main-account': main && isShow(2)
    }"
    no-body
  >
    <div>
      <div
        v-if="data.meanEngagementRate !== null"
        class="d-flex flex-column text-center"
      >
        <p class="font-weight-bolder">
          Avg. Engagement Rate
        </p>
        <h1 class="font-weight-bolder">
          {{ data.meanEngagementRate ? data.meanEngagementRate.toFixed(2) : '0.00' }}%
        </h1>
        <div class="value-growth">
          <span :class="`${data.growth.meanEngagementRate < 0 ? 'text-danger' : 'text-success'}`">
            {{ data.growth.meanEngagementRate >= 0 ? '+' : '-' }}
            {{ data.growth.meanEngagementRate ? Math.abs(data.growth.meanEngagementRate).toFixed(1) : '0.0' }}%
          </span>
        </div>
        <div class="d-flex flex-column value-compare">
          <span>
            vs
          </span>
          <span>
            7 hari sebelumnya
          </span>
        </div>
      </div>
      <div
        v-else
        class="d-flex justify-content-center align-items-center"
      >
        <h1 />
      </div>
    </div>
    <div>
      <div class="d-flex flex-column text-center">
        <p class="font-weight-bolder">
          Followers
        </p>
        <h1 class="font-weight-bolder">
          {{ data.followers !== null ? nFormatter(data.followers, 1) : '-' }}
        </h1>
        <div class="value-growth">
          <span :class="`${data.growth.followers < 0 ? 'text-danger' : 'text-success'}`">
            {{ data.growth.followers >= 0 ? '+' : '-' }}
            {{ data.growth.followers ? nFormatter(Math.abs(data.growth.followers), 1) : '-' }}
          </span>
        </div>
        <div class="d-flex flex-column value-compare">
          <span>
            vs
          </span>
          <span>
            {{ formatDate(new Date().fp_incr(-1), { month: 'long', day: 'numeric' }) }}
          </span>
        </div>
      </div>
    </div>
    <div>
      <div class="d-flex flex-column text-center">
        <p class="font-weight-bolder">
          Rata-Rata Like
        </p>
        <h1 class="font-weight-bolder">
          {{ data.meanLike !== null ? nFormatter(data.meanLike.toFixed(0), 1) : '-' }}
        </h1>
        <div class="value-growth">
          <span :class="`${data.growth.meanLike < 0 ? 'text-danger' : 'text-success'}`">
            {{ data.growth.meanLike >= 0 ? '+' : '-' }}
            {{ data.growth.meanLike ? nFormatter(Math.abs(data.growth.meanLike).toFixed(1), 1) : '-' }}
          </span>
        </div>
        <div class="d-flex flex-column value-compare">
          <span>
            vs
          </span>
          <span>
            7 hari sebelumnya
          </span>
        </div>
      </div>
    </div>
    <div>
      <div class="d-flex flex-column text-center">
        <p class="font-weight-bolder">
          Rata-Rata Comment
        </p>
        <h1 class="font-weight-bolder">
          {{ data.meanComments !== null ? nFormatter(data.meanComments.toFixed(0), 1) : '-' }}
        </h1>
        <div class="value-growth">
          <span :class="`${data.growth.meanComments < 0 ? 'text-danger' : 'text-success'}`">
            {{ data.growth.meanComments >= 0 ? '+' : '-' }}
            {{ data.growth.meanComments ? nFormatter(Math.abs(data.growth.meanComments).toFixed(1), 1) : '-' }}
          </span>
        </div>
        <div class="d-flex flex-column value-compare">
          <span>
            vs
          </span>
          <span>
            7 hari sebelumnya
          </span>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import 'vue-flatpickr-component'
import { formatDate } from '@core/utils/filter'

import useDashboard from '../useDashboard'
import useDashboardKompetitor from './useDashboardKompetitor'

export default {
  components: {
    BCard,
  },
  props: {
    main: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const {
      isShow,
    } = useDashboardKompetitor()

    const {
      nFormatter,
    } = useDashboard(props, context)

    return {
      isShow,
      nFormatter,
      formatDate,
    }
  },
}
</script>

<style lang="scss">
.performa-container {
  background: transparent;
  border-radius: 4px;
  padding: 4px 8px;
  width: 256px;

  &.main-account {
    background: linear-gradient(279.57deg, #70ADD9 0%, #368AC8 100%), #368AC8;
  }
  & > div {
    height: 169px;
    margin: 4px 0px 4px 0px;
    padding: 16px 0px;
    border-radius: 4px;
    background: white;

    & > div {
      height: inherit
    }
    p {
      font-size: 14px;
      line-height: 16px;
      color: #5E646A;
      margin-bottom: 16px;
    }
    h1 {
      font-size: 36px;
      line-height: 40px;
      color: #5E646A;
      margin-bottom: 4px;
    }
    .value {
      &-growth {
        margin-bottom: 4px;

        span {
          font-size: 14px;
          line-height: 24px;
        }
      }
      &-compare {
        font-size: 12px;
        line-height: 16px;
        color: #93989B;
      }
    }
  }
}
</style>
