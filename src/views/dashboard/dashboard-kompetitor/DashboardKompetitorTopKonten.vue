<template>
  <b-card
    class="top-konten-container my-0"
    :class="{
      'main-account': main && isShow(2),
      'main-account-mobile': main && !isShow(2),
    }"
    no-body
  >
    <div class="konten-img">
      <div
        v-if="data.media_url"
        class="d-flex flex-column align-items-center"
      >
        <!-- eslint-disable -->
        <b-img
          :src="data.media_url"
          height="200px"
          width="200px"
          style="object-fit:contain"
          blankColor="#777"
        />
        <!-- eslint-enable -->
        <p class="font-weight-bolder">
          Jenis Konten
        </p>
        <span class="mb-1">
          Gambar
        </span>
        <p class="font-weight-bolder">
          Tanggal Dipost
        </p>
        <span>
          {{ formatDate(data.timestamp, { year: 'numeric', month: 'long', day: '2-digit' }) }}
        </span>
      </div>
      <div
        v-else
        class="d-flex flex-column align-items-center"
      >
        <b-img
          :src="require('@/assets/images/analytics/kompetitor-best-performa-not-found.png')"
          class="mb-3"
          height="200px"
          width="200px"
        />
        <span class="mb-2" />
        <span />
      </div>
    </div>
    <div>
      <div
        v-if="data.id"
        class="d-flex flex-column text-center"
      >
        <p class="font-weight-bolder">
          Likes
        </p>
        <h1 class="font-weight-bolder">
          {{ data.like_count !== null ? nFormatter(data.like_count, 1) : '-' }}
        </h1>
        <div class="value-growth">
          <span
            v-if="data.growth.like_count !== null"
            :class="`${data.growth.like_count < 0 ? 'text-danger' : 'text-success'}`"
          >
            {{ data.growth.like_count >= 0 ? '+' : '-' }}
            {{ nFormatter(Math.abs(data.growth.like_count), 1) }}
          </span>
          <span v-else>
            -
          </span>
        </div>
      </div>
    </div>
    <div>
      <div
        v-if="data.id"
        class="d-flex flex-column text-center"
      >
        <p class="font-weight-bolder">
          Comments
        </p>
        <h1 class="font-weight-bolder">
          {{ data.comments_count !== null ? nFormatter(data.comments_count, 1) : '-' }}
        </h1>
        <div class="value-growth">
          <span
            v-if="data.growth.comments_count !== null"
            :class="`${data.growth.comments_count < 0 ? 'text-danger' : 'text-success'}`"
          >
            {{ data.growth.comments_count >= 0 ? '+' : '-' }}
            {{ nFormatter(Math.abs(data.growth.comments_count), 1) }}
          </span>
          <span v-else>
            -
          </span>
        </div>
      </div>
    </div>
    <div>
      <div
        v-if="data.id"
        class="d-flex flex-column text-center"
      >
        <p class="font-weight-bolder">
          Engagement Rate
        </p>
        <h1 class="font-weight-bolder">
          {{ data.engagement_rate !== null ? `${parseFloat(data.engagement_rate).toFixed(2)}%` : '-' }}
        </h1>
        <div class="value-growth">
          <span
            v-if="data.growth.engagement_rate !== null"
            :class="`${parseFloat(data.growth.engagement_rate) < 0 ? 'text-danger' : 'text-success'}`"
          >
            {{ parseFloat(data.growth.engagement_rate) >= 0 ? '+' : '-' }}
            {{ Math.abs(parseFloat(data.growth.engagement_rate)).toFixed(2) }}%
          </span>
          <span v-else>
            -
          </span>
        </div>
      </div>
    </div>
    <div class="konten-btn d-flex justify-content-center align-items-center">
      <b-button
        v-if="data.id"
        class="p-0 d-flex justify-content-center align-items-center"
        variant="outline-primary"
        disabled
      >
        <span class="text-nowrap font-weight-bolder">
          Lebih Lengkap
        </span>
        <feather-icon
          icon="ChevronRightIcon"
          size="20"
          class="ml-50 ml-sm-1"
        />
      </b-button>
    </div>
  </b-card>
</template>

<script>
import { BButton, BCard, BImg } from 'bootstrap-vue'
import { formatDate } from '@core/utils/filter'

import useDashboard from '../useDashboard'
import useDashboardKompetitor from './useDashboardKompetitor'

export default {
  components: {
    BButton,
    BCard,
    BImg,
  },
  props: {
    main: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({
        like_count: null,
        comments_count: null,
        engagement_rate: null,
        growth: {
          like_count: null,
          comments_count: null,
          engagement_rate: null,
        },
      }),
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
.top-konten-container {
  background: transparent;
  border-radius: 4px;
  padding: 4px 8px;
  width: 256px;

  &.main-account {
    background: linear-gradient(279.57deg, #70ADD9 0%, #368AC8 100%), #368AC8;

    &-mobile {
      .konten-img {
        img {
          filter: blur(0px);
        }
      }
    }
    .konten-img {
      img {
        filter: blur(0px);
      }
    }
  }
  & > div {
    height: 128px;
    margin: 4px 0px 4px 0px;
    padding: 16px 0px;
    border-radius: 4px;
    background: white;

    & > div {
      height: inherit;
    }
    &.konten-img {
      height: 351px;

      img {
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        margin-bottom: 16px;
        width: calc(100% - 40px);
        filter: blur(13px);
      }
      p {
        margin-bottom: 8px;
      }

      @media (max-width: 590px) {
        height: 300px;

        img {
          height: 143px;
          width: 143px;
        }
      }
    }
    &.konten-btn {
      height: 56px;
      padding: 0px 3px;
      z-index: 2;

      .btn {
        width: 190px;
        height: 40px;
        font-size: 1rem;
        line-height: 24px;
      }
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
    .value-growth {
      span {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
}
</style>
