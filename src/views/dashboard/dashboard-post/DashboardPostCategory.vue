<template>
  <b-card no-body>
    <b-card-header class="pb-1">
      <h3 class="font-weight-bolder text-dark text-nowrap mr-1">
        {{ title }}
      </h3>
      <b-card-text class="font-small-3 ml-sm-auto mt-25">
        {{ resolveDateRange() }}
      </b-card-text>
    </b-card-header>
    <b-overlay
      show
      variant="transparent"
      opacity="1"
      blur="20px"
    >
      <b-card-body class="grid-view">
        <slot name="grid-view-items" />
      </b-card-body>
      <template #overlay>
        <dashboard-overlay
          responsive
          text-nowrap
        />
      </template>
    </b-overlay>
  </b-card>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardText,
  BCardBody,
  BOverlay,
} from 'bootstrap-vue'

import useDashboard from '../useDashboard'
import DashboardOverlay from '../DashboardOverlay.vue'

export default {
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BCardText,
    BOverlay,

    DashboardOverlay,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    }
  },
  setup(props, context) {
    const { resolveDateRange } = useDashboard(props, context)
    return {
      resolveDateRange,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/base/bootstrap-extended/include';

// Grid View Specific style
.grid-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, 215px);
  column-gap: 1rem;
  justify-content: center;
  padding-bottom: 0.5rem;
}
</style>
