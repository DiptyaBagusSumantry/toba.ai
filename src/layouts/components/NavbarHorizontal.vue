<template>
  <div class="navbar-container content">
    <div
      v-if="$store.getters['app/currentBreakPoint'] === 'xl'"
      class="d-flex"
    >
      <b-navbar-nav
        class="nav align-items-center ml-auto"
      >
        <div
          class="cursor-pointer mr-4"
        >
          <router-link
            class="nav-menu"
            :to="{ name : 'home'}"
          >
            Beranda
          </router-link>
        </div>
        <div
          class="cursor-pointer mr-4"
        >
          <b-link
            class="nav-menu"
            href="https://toba.ai/blog/"
          >
            Blog
          </b-link>
        </div>
        <div
          class="cursor-pointer mr-4"
        >
          <b-link
            class="nav-menu"
            href="https://toba.ai/event/"
          >
            Event
          </b-link>
        </div>
        <div
          class="cursor-pointer mr-4"
        >
          <router-link
            :to="{ name : 'faq'}"
            class="nav-menu"
          >
            FAQ
          </router-link>
        </div>
        <div
          class="cursor-pointer mr-4"
        >
          <router-link
            :to="{ name : 'help'}"
            class="nav-menu"
          >
            Bantuan
          </router-link>
        </div>
        <div
          class="cursor-pointer mr-4"
        >
          <router-link
            :to="{ name : 'price'}"
            class="nav-menu"
          >
            Harga
          </router-link>
        </div>
        <div
          class="mr-2"
        >
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="outline-primary"
            target="_blank"
            :href="loginURL"
          >
            Masuk
          </b-button>
        </div>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          target="_blank"
          :href="`${storeURL}?product=cekbrand`"
        >
          Coba Gratis Sekarang
        </b-button>
      </b-navbar-nav>
    </div>

    <div
      v-else
      class="d-flex justify-content-between align-items-center"
    >
      <!-- Nav Menu Toggler -->
      <ul class="nav navbar-nav d-xl-none">
        <li class="nav-item d-flex align-self-center">
          <b-link
            class="nav-link"
            @click="toggleVerticalMenuActive"
          >
            <feather-icon
              icon="MenuIcon"
              size="21"
            />
          </b-link>
        </li>
      </ul>
      <b-link
        class="mx-1"
        to="/"
      >
        <b-img
          src="@core/assets/logo/toba_logo_lengkap_besar.svg"
          alt="logo"
          width="104"
        />
      </b-link>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        target="_blank"
        :href="loginURL"
      >
        Masuk
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BNavbarNav,
  BButton,
  BImg,
  BLink,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BNavbarNav,
    BButton,
    BImg,
    BLink,
  },
  directives: {
    Ripple,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    loginURL() {
      return process.env.VUE_APP_TOBA_SITE_URL
    },
    storeURL() {
      return `${process.env.VUE_APP_WAS_SITE_URL}/#/store`
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-container .nav .nav-menu {
  font-family: 'Montserrat', Helvetica, Arial, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #2C2C2C;
}
</style>
