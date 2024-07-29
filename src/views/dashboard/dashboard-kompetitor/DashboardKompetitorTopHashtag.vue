<template>
  <b-card
    class="top-hashtag-container my-0"
    :class="{
      'main-account': main && isShow(2)
    }"
    no-body
  >
    <div
      v-for="(value, index) in data"
      :key="`contain-${index}`"
    >
      <div class="d-flex flex-column text-center">
        <h3 class="font-weight-bolder">
          {{ value.hashtag }}
        </h3>
        <div class="d-flex align-items-center">
          <feather-icon
            icon="HeartIcon"
            width="16px"
            height="16px"
            stroke="#EA5455"
          />
          <span>
            {{ value.likes }}
          </span>
          <feather-icon
            icon="MessageSquareIcon"
            width="16px"
            height="16px"
            stroke="#7A62F9"
          />
          <span>
            {{ value.comments }}
          </span>
        </div>
      </div>
    </div>
    <div
      v-for="index in (5 - data.length)"
      :key="`empty-${index}`"
      class="p-0"
    >
      <div class="d-flex justify-content-center align-items-center">
        <h3 class="font-weight-bolder m-0">
          -
        </h3>
      </div>
    </div>
  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'

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
      type: Array,
      default: () => ([]),
    },
  },
  setup() {
    const {
      isShow,
    } = useDashboardKompetitor()

    return {
      isShow,
    }
  },
}
</script>

<style lang="scss">
.top-hashtag-container {
  background: transparent;
  border-radius: 4px;
  padding: 4px 8px;
  width: 256px;
  filter: blur(13px);

  &.main-account {
    background: linear-gradient(279.57deg, #70ADD9 0%, #368AC8 100%), #368AC8;
  }
  & > div {
    height: 105px;
    margin: 4px 0px 4px 0px;
    padding: 32px 24px 17px 24px;
    border-radius: 4px;
    background: white;

    & > div {
      height: inherit;
    }
    h3 {
      color: #5E646A;
      font-size: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 14px;;
    }
    span {
      margin-right: 18px;
    }
    .feather {
      margin-right: 5px
    }

  }
}
</style>
