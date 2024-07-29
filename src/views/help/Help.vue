<template>
  <div id="help-container">
    <!-- help title section -->
    <header>
      <b-card
        no-body
        class="w-100 h-100 mb-0"
      >
        <b-card-body class="d-flex flex-column align-items-center justify-content-center">
          <h2 class="title text-center mb-1 mt-sm-2 mt-lg-3 mt-auto">
            Bantuan
          </h2>
          <b-card-text class="subtitle">
            Temukan hal yang ingin kamu ketahui disini
          </b-card-text>
        </b-card-body>
      </b-card>
    </header>
    <!--/ help title section -->

    <section
      id="help-list"
      class="mx-auto"
    >
      <b-button
        v-for="(data,index) in helpData"
        :key="index"
        class="btn-help bg-white text-left border-0 mb-1 line-height-condensed d-flex align-items-center"
        block
        variant="light"
        @click="$router.push(`help/${data.title}/`)"
      >
        <span class="mr-50">{{ data.title }}</span>
        <feather-icon
          size="16"
          icon="ChevronRightIcon"
          class="ml-auto float-right"
        />
      </b-button>
    </section>
  </div>
</template>

<script>
import {
  BCard, BCardBody, BButton, BCardText,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardBody,
    BCardText,
    BButton,
  },
  data() {
    return {
      helpData: [
        {
          title: 'Cara Mengubah Akun Instagram Personal ke Instagram Bisnis',
        },
        {
          title: 'Cara Membuat Halaman Facebook',
        },
        {
          title: 'Cara Menghubungkan Akun Instagram Bisnis dengan Halaman Facebook',
        },
        {
          title: 'Cara Menghubungkan Akun Instagram Bisnis dengan Toba.AI',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/apps/help/help.scss';
</style>
