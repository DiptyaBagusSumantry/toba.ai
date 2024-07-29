<template>
  <div
    :id="($store.getters['app/currentBreakPoint'] === 'xl' || $store.getters['app/currentBreakPoint'] === 'lg') ? 'footer-desktop' : 'footer-mobile'"
    class="clearfix mb-0"
    style="font-size: 14px !important"
  >
    <b-row class="footer1 mb-2 mb-xs-5">
      <b-col cols="12">
        <b-row>
          <b-col
            class="footer-margin"
            cols="12"
            xl="4"
            lg="4"
          >
            <validation-observer v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(sendEmail)">
                <div class="d-flex flex-column text-center newsletter">
                  <div class="d-flex flex-column mx-auto mb-1">
                    <label
                      for="sendNewsletter"
                      class="text-white"
                    >
                      Newsletter
                    </label>
                    <validation-provider
                      name="E-mail"
                      rules="email"
                    >
                      <b-input-group>
                        <b-form-input
                          id="sendNewsletter"
                          v-model.trim="msgEmail"
                          class="rounded"
                          type="email"
                          placeholder="Email"
                        />
                      </b-input-group>
                    </validation-provider>
                  </div>
                  <div>
                    <b-button
                      type="submit"
                      class="btn btn-light"
                    >
                      Kirim
                    </b-button>
                  </div>
                </div>
              </form>
            </validation-observer>
          </b-col>

          <b-col
            cols="12"
            xl="2"
            lg="2"
          >
            <div class="footer-menu ml-xl-5 ml-lg-5">
              <router-link
                class="text-white d-inline-block"
                :to="{ name : 'home'}"
              >
                Beranda
              </router-link>
              <br>
              <b-link
                class="text-white d-inline-block mt-xl-1 mt-lg-1"
                href="https://toba.ai/blog/"
              >
                Blog
              </b-link>
              <br>
              <b-link
                class="text-white d-inline-block mt-xl-1 mt-lg-1"
                href="https://toba.ai/event/"
              >
                Event
              </b-link>
              <br>
              <router-link
                class="text-white d-inline-block mt-xl-1 mt-lg-1"
                :to="{ name : 'faq' }"
              >
                FAQ
              </router-link>
              <br>
              <router-link
                class="text-white d-inline-block mt-xl-1 mt-lg-1"
                :to="{ name : 'help' }"
              >
                Bantuan
              </router-link>
              <br>
              <router-link
                class="text-white d-inline-block mt-xl-1 mt-lg-1"
                :to="{ name : 'price' }"
              >
                Harga
              </router-link>
            </div>
          </b-col>

          <b-col
            class="footer-margin"
            cols="12"
            xl="2"
            lg="2"
          >
            <div class="footer-menu ml-lg-2">
              <router-link
                class="text-white d-inline-block mb-lg-1"
                :to="{ name : 'privacy-policy' }"
              >
                Kebijakan Privasi
              </router-link>
              <br>
              <router-link
                class="text-white"
                :to="{ name : 'terms-of-service' }"
              >
                Syarat dan Ketentuan
              </router-link>
            </div>
          </b-col>

          <b-col
            class="footer-menu"
            cols="12"
            xl="4"
            lg="4"
          >
            <h5 class="text-white contact mb-2 ml-lg-5">
              Kontak
            </h5>
            <div class="text-white ml-lg-5">
              <p class="mb-0">
                Widya Space
              </p>
              <p
                :class="{
                  'mb-1': ($store.getters['app/currentBreakPoint'] === 'xl' || $store.getters['app/currentBreakPoint'] === 'lg'),
                  'mb-contact': ($store.getters['app/currentBreakPoint'] !== 'xl' && $store.getters['app/currentBreakPoint'] !== 'lg')
                }"
              >
                Jl. Kabupaten No.KM 3, Ngawean, Trihanggo, Gamping, Sleman Regency, Special Region of Yogyakarta 55291
              </p>

              <p class="mb-0">
                0812 2521 4920
              </p>
              <p>
                bisnis@widyaanalytic.com
              </p>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="mx-0">
      <b-col
        cols="12"
        :class="{
          'd-flex justify-content-center w-100': ($store.getters['app/currentBreakPoint'] === 'xl' || $store.getters['app/currentBreakPoint'] === 'lg'),
          'mx-auto': ($store.getters['app/currentBreakPoint'] !== 'xl' && $store.getters['app/currentBreakPoint'] !== 'lg')
        }"
      >
        <div
          class="text-center align-self-center"
          :class="{
            'mr-2': ($store.getters['app/currentBreakPoint'] === 'xl' || $store.getters['app/currentBreakPoint'] === 'lg')
          }"
        >
          <b-img
            src="@core/assets/logo/toba_logo_white2.svg"
            alt="logo"
            :height="($store.getters['app/currentBreakPoint'] === 'xl' || $store.getters['app/currentBreakPoint'] === 'lg') ? 35 : 50"
          />
        </div>
        <div class="text-center ml-2 my-1 logo-list">
          <b-link
            alt="logo"
            href="https://widyaanalytic.com"
            target="_blank"
          >
            <b-img
              src="@/assets/images/footer/web.png"
            />
          </b-link>

          <b-link
            alt="logo"
            href="https://www.instagram.com/toba.ai/"
            target="_blank"
          >
            <b-img
              src="@/assets/images/footer/instagram.png"
              class="mx-1"
            />
          </b-link>

          <b-link
            alt="logo"
            href="https://www.youtube.com/channel/UCyE18iLw3LmzDhlxyWrxjyA"
            target="_blank"
          >
            <b-img
              src="@/assets/images/footer/youtube.png"
            />
          </b-link>

          <b-link
            alt="logo"
            href="https://www.facebook.com/TobaAi-Media-Sosial-Analisis-106799278132603"
            target="_blank"
          >
            <b-img
              src="@/assets/images/footer/facebook.png"
              class="mx-1"
            />
          </b-link>

          <b-link
            alt="logo"
            href="https://twitter.com/widya_analytic"
            target="_blank"
          >
            <b-img
              src="@/assets/images/footer/twitter.png"
            />
          </b-link>

          <b-link
            alt="logo"
            href="https://open.spotify.com/show/6mjUtJqRYRGvtf32bBNTXD"
            target="_blank"
          >
            <b-img
              src="@/assets/images/footer/spotify.png"
              class="mx-1"
            />
          </b-link>
        </div>
      </b-col>
    </b-row>

    <b-row class="footer2 mx-0">
      <b-col cols="12">
        <div class="text-center mt-1 text-white">
          Copyright &copy; {{ new Date().getFullYear() }}
          <b-link
            class="text-white"
            href="http://widyaanalytic.com"
            target="_blank"
          >Widya Analytic.</b-link>
          All Rights Reserved
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import {
  BInputGroup, BFormInput, BLink, BImg, BCol, BRow, BButton,
} from 'bootstrap-vue'

import useFooter from './useFooter'

export default {
  components: {
    BFormInput,
    BInputGroup,
    BLink,
    BImg,
    BCol,
    BRow,
    BButton,
    ValidationObserver,
    ValidationProvider,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
  setup() {
    const {
      sendEmail,
      msgEmail,
    } = useFooter()

    return {
      sendEmail,
      msgEmail,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/apps/footer.scss';
</style>
