<template>
  <div id="help-info-container">
    <b-breadcrumb class="breadcrumb-slash mb-2 p-1">
      <b-breadcrumb-item href="/help">
        Bantuan
      </b-breadcrumb-item>
      <b-breadcrumb-item
        class="font-weight-bolder"
        active
      >
        {{ helpTitle }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <section class="p-1">
      <h1 class="help-title mb-3">
        {{ helpTitle }}
      </h1>

      <help-one-content v-if="helpTitle=='Cara Mengubah Akun Instagram Personal ke Instagram Bisnis'" />
      <help-two-content v-else-if="helpTitle=='Cara Membuat Halaman Facebook'" />
      <help-three-content v-else-if="helpTitle=='Cara Menghubungkan Akun Instagram Bisnis dengan Halaman Facebook'" />
      <help-four-content v-else-if="helpTitle=='Cara Menghubungkan Akun Instagram Bisnis dengan Toba.AI'" />

    </section>
  </div>
</template>

<script>
import { BBreadcrumb, BBreadcrumbItem } from 'bootstrap-vue'

import HelpOneContent from './components/Help1.vue'
import HelpTwoContent from './components/Help2.vue'
import HelpThreeContent from './components/Help3.vue'
import HelpFourContent from './components/Help4.vue'

export default {
  components: {
    BBreadcrumb,
    BBreadcrumbItem,
    HelpOneContent,
    HelpTwoContent,
    HelpThreeContent,
    HelpFourContent,
  },
  data() {
    return {
      helpTitle: '',
    }
  },
  mounted() {
    this.helpTitle = this.$route.params.help_title
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/apps/help/help-info.scss';
</style>
