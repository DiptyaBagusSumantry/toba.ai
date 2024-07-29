<template>
  <layout-horizontal>

    <router-view />

    <template #navbar="{ toggleVerticalMenuActive }">
      <app-navbar-horizontal-layout-brand />
      <navbar-horizontal :toggle-vertical-menu-active="toggleVerticalMenuActive" />
    </template>

    <template #vertical-menu-header="{ toggleVerticalMenuActive }">
      <ul class="nav navbar-nav flex-row justify-content-end">
        <!-- Toggler Button -->
        <li class="nav-item nav-toggle">
          <b-link class="nav-link modern-nav-toggle">
            <feather-icon
              icon="XIcon"
              size="25"
              class="d-block d-xl-none"
              @click="toggleVerticalMenuActive"
            />
          </b-link>
        </li>
      </ul>
    </template>

    <template #vertical-menu-footer>
      <b-link
        class="navbar-brand"
        to="/"
      >
        <span>
          <b-img
            :src="appLogoImage"
            alt="logo"
            width="150"
          />
        </span>
      </b-link>
    </template>

    <template #footer>
      <footer-horizontal />
    </template>
  </layout-horizontal>
</template>

<script>
import { BLink, BImg } from 'bootstrap-vue'
import { $themeConfig } from '@themeConfig'
import LayoutHorizontal from '@core/layouts/layout-horizontal/LayoutHorizontal.vue'
import AppNavbarHorizontalLayoutBrand from '@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue'
import Ripple from 'vue-ripple-directive'
import NavbarHorizontal from '../components/NavbarHorizontal.vue'
import FooterHorizontal from '../components/footer/FooterHorizontal.vue'

export default {
  components: {
    BLink,
    BImg,

    LayoutHorizontal,
    NavbarHorizontal,
    FooterHorizontal,
    AppNavbarHorizontalLayoutBrand,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      // showCustomizer: $themeConfig.layout.customizer,
      appLogoImage: $themeConfig.app.appLogoImage,
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.app.windowWidth
    },
  },
}
</script>
