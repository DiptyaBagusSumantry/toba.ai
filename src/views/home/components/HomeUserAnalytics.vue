<template>
  <div
    id="home-user-analytics"
    class="p-5 bg-gradient"
  >
    <div class="size-limit">
      <b-row
        align-v="center"
      >
        <b-col
          xl="5"
          order="1"
          align-self="center"
          class="box-content"
        >
          <b-row>
            <h1
              class="font-weight-bolder text-white"
            >
              Cara gampang mengukur, menganalisis, dan buat strategi untuk akun Instagram kamu
            </h1>
          </b-row>
          <b-row class="mt-5 mt-xl-3">
            <h2
              class="font-weight-lighter text-white"
            >
              Cek di sini <strong>GRATIS!</strong> Lihat sejauh mana perkembangan akun Instagrammu
            </h2>
          </b-row>
          <validation-observer ref="usernameValidation">
            <b-row
              class="pr-0 mt-5 mt-xl-2 input-username"
              @submit.prevent
            >
              <validation-provider
                #default="{ errors }"
                name="username"
                :rules="{regex: /^(?!.\.\.)(?!.\.$)[^\W][\w.]{0,29}$/, max: 30}"
              >
                <b-input-group>
                  <b-form-input
                    v-model.trim="inputUsername"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Masukkan akun instagram"
                    name="username"
                    @keyup.enter="validationForm"
                  />
                  <b-input-group-append>
                    <b-button
                      variant="primary"
                      :disabled="inputUsername === ''"
                      @click="validationForm"
                    >
                      <b-spinner
                        v-if="triggerLoadingProcess"
                        small
                      />
                      <feather-icon
                        v-else
                        size="15"
                        icon="SearchIcon"
                      />
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
                <span class="text-danger font-medium-1 d-flex justify-content-center d-xl-block mt-25">{{ errors[0] }}</span>
              </validation-provider>
            </b-row>
          </validation-observer>
        </b-col>
        <b-col
          xl="7"
          order="2"
          class="box-header"
        >
          <b-img
            :src="require('@/assets/images/pages/home/user-analytics/bg-header.png')"
            fluid
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import {
  ref, onMounted,
  computed, onUnmounted,
} from '@vue/composition-api'
import store from '@/store'

import {
  BInputGroup, BFormInput, BInputGroupAppend, BRow,
  BCol, BButton, BImg, BSpinner,
} from 'bootstrap-vue'
import { required, regex, max } from '@validations'
import { useRouter } from '@core/utils/utils'

import dashboardStoreModule from '@/views/dashboard/dashboardStoreModule'
import useDashboard from '@/views/dashboard/useDashboard'

localize('id')

export default {
  components: {
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    BRow,
    BCol,
    BButton,
    BImg,
    BSpinner,
    ValidationProvider,
    ValidationObserver,
  },
  setup(props, context) {
    const { route } = useRouter()

    const DASHBOARD_APP_STORE_MODULE_NAME = 'app-dashboard'

    // Register module
    if (!store.hasModule(DASHBOARD_APP_STORE_MODULE_NAME)) store.registerModule(DASHBOARD_APP_STORE_MODULE_NAME, dashboardStoreModule)
    // end Register module

    onMounted(() => {
      if (route.value.name === 'dashboard') store.dispatch(`${DASHBOARD_APP_STORE_MODULE_NAME}/fetchAccountData`, route.value.params.username)
    })

    onUnmounted(() => {
      // UnRegister on leave
      if (store.hasModule(DASHBOARD_APP_STORE_MODULE_NAME)) store.unregisterModule(DASHBOARD_APP_STORE_MODULE_NAME)
      // end UnRegister on leave
    })

    const { triggerLoadingProcess, fetchAccountData } = useDashboard(props, context)
    const inputUsername = ref('')

    const breakpoint = computed(() => store.getters['app/currentBreakPoint'])

    const validationForm = () => {
      context.refs.usernameValidation.validate().then(success => {
        if (success && inputUsername.value !== '') {
          fetchAccountData(inputUsername.value)
        }
      })
    }

    return {
      triggerLoadingProcess,
      inputUsername,
      required,
      regex,
      max,
      validationForm,
      breakpoint,
    }
  },
}
</script>
