<template>
  <div id="home">
    <b-modal
      id="event-modal"
      ref="refEventModal"
      hide-footer
      centered
      size="md"
    >
      <b-img fluid />
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        class="mt-1"
        variant="outline-primary"
        block
        @click="clickMoreEventModal"
      >
        Selengkapnya
      </b-button>
    </b-modal>
    <home-user-analytics />
    <home-about />
    <home-benefits />
    <home-features />
    <home-blog-thumbnails />
  </div>
</template>

<script>
import { BModal, BImg, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

import HomeUserAnalytics from '@/views/home/components/HomeUserAnalytics.vue'
import HomeAbout from '@/views/home/components/HomeAbout.vue'
import HomeBenefits from '@/views/home/components/HomeBenefits.vue'
import HomeFeatures from '@/views/home/components/HomeFeatures.vue'
import HomeBlogThumbnails from '@/views/home/components/HomeBlogThumbnails.vue'

export default {
  components: {
    BModal,
    BImg,
    BButton,

    HomeUserAnalytics,
    HomeAbout,
    HomeBenefits,
    HomeFeatures,
    HomeBlogThumbnails,
  },
  directives: {
    Ripple,
  },
  mounted() {
    // this.$refs.refEventModal.show()
  },
  methods: {
    clickMoreEventModal() {
      this.$refs.refEventModal.hide()
      const url = ''
      window.open(url, '_blank').focus()
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/apps/home.scss';

// Modals

#event-modal {
  .modal-body {
    padding: 0.8rem !important;
  }
  .modal-content {
    .modal-header {
      display: none;
    }
  }
}

</style>
