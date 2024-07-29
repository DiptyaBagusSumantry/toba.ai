<template>
  <div
    class="overlay-content text-center rounded"
    :class="{
      'small': small,
      'responsive': responsive
    }"
  >
    <slot name="content-text">
      <p
        class="mb-1 font-weight-bolder text-dark"
        :class="{ 'text-nowrap': textNowrap }"
      >
        Mau lihat analisis ini lebih lengkap?
      </p>
    </slot>
    <b-button
      variant="primary"
      target="_blank"
      :size="small ? 'sm' : 'md'"
      :href="`${storeURL}?product=cekbrand`"
      class="text-nowrap"
    >
      Coba Gratis Sekarang
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'

export default {
  components: {
    BButton,
  },
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    textNowrap: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    storeURL() {
      return `${process.env.VUE_APP_WAS_SITE_URL}/#/store`
    },
  },
}
</script>

<style lang="scss">
.overlay-content {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  padding: 3rem;
  margin: 1rem;
  p {
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 1.7rem !important;
  }
  &.small {
    padding: 1rem;
    p {
      font-size: 1rem;
      line-height: 16px;
      margin-bottom: 1rem !important;
    }
    .btn {
      font-size: 12px;
    }
  }
  @media (max-width: 850px) {
    &.responsive {
      padding: 2rem;
    }
  }

  @media (max-width: 750px) {
    &.responsive {
      padding: 1rem;
      p {
        font-size: 1rem;
        line-height: 16px;
        margin-bottom: 1rem !important;
      }
      .btn {
        font-size: 12px;
        padding: 0.486rem 1rem;
      }
    }
  }

  @media (max-width: 500px) {
    &.small, &.responsive {
      padding: 1rem;
    }
  }
}
</style>
