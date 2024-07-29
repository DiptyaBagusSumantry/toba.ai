<template>
  <div id="dashboard-header">
    <div id="search-button">
      <validation-observer ref="usernameValidation">
        <validation-provider
          #default="{ errors }"
          name="username"
          :rules="{regex: /^(?!.\.\.)(?!.\.$)[^\W][\w.]{0,29}$/, max: 30}"
        >
          <div>
            <b-input-group
              class="input-group-merge"
            >
              <b-form-input
                v-model="inputUsername"
                name="username"
                :state="errors.length > 0 ? false:null"
                class="font-12"
                :placeholder="`@${$route.params.username}`"
                @keyup.enter="validationForm"
              />
              <b-input-group-append
                is-text
                class="cursor-pointer "
                @click="validationForm"
              >
                <b-spinner
                  v-if="triggerLoadingProcess"
                  small
                />
                <feather-icon
                  v-else
                  icon="SearchIcon"
                  width="20px"
                  height="20px"
                  stroke="#283138"
                />
              </b-input-group-append>
            </b-input-group>
          </div>
          <small class="text-danger">{{ errors[0] }}</small>
        </validation-provider>
      </validation-observer>
    </div>
    <div class="d-flex flex-wrap align-items-center header-detail">
      <div class="d-flex align-items-center mr-auto">
        <b-avatar
          :src="accountData.profile_picture_url"
          size="72px"
        />
        <div class="d-flex flex-column mr-1">
          <div class="d-flex">
            <div class="header-statistic">
              <h3 class="font-weight-bolder text-dark m-0 text-center">
                {{ accountData.user_data ? nFormatter(accountData.user_data[accountData.user_data.length - 1].media_count, 1) : '' }}
              </h3>
              <p class="m-0 text-center">
                Total Post
              </p>
            </div>
            <div class="header-statistic">
              <h3 class="font-weight-bolder text-dark m-0 text-center">
                {{ accountData.user_data ? nFormatter(accountData.user_data[accountData.user_data.length - 1].followers_count, 1) : '' }}
              </h3>
              <p class="m-0 text-center">
                Follower
              </p>
            </div>
            <div class="header-statistic">
              <h3 class="font-weight-bolder text-dark m-0 text-center">
                {{ accountData.user_data ? nFormatter(accountData.user_data[accountData.user_data.length - 1].follows_count, 1) : '' }}
              </h3>
              <p class="m-0 text-center">
                Following
              </p>
            </div>
          </div>
          <span>
            Data di-update tanggal {{ resolveUpdatedTimestamp(accountData.updated_at).date }}, jam {{ resolveUpdatedTimestamp(accountData.updated_at).time }} WIB
          </span>
        </div>
      </div>
      <div class="header-date-range d-flex flex-column">
        <span>
          Tampilkan
        </span>
        <div class="d-flex align-items-center">
          <b-dropdown
            variant="outline-secondary"
            class="mr-1"
            block
            menu-class="w-100"
            toggle-class="font-small-3"
          >
            <template #button-content>
              7 Hari Terakhir
            </template>
            <b-dropdown-item
              v-for="(dateFrame, index) in dataFrameOptions"
              :key="index"
              link-class="text-dark font-small-3"
              :active="dateFrame === '7' ? true : false"
              @click="dateFrame === '7' ? '' : bounceIn()"
            >
              {{ dateFrame }} Hari Terakhir
            </b-dropdown-item>
            <b-dropdown-item
              link-class="text-dark font-small-3"
              :active="false"
              @click="bounceIn()"
            >
              Pilih Tanggal
            </b-dropdown-item>
          </b-dropdown>
          <b-button
            class="d-flex align-items-center btn-export"
            :disabled="true"
          >
            <feather-icon
              icon="DownloadIcon"
              size="24"
            />
            <span class="font-weight-bold">
              Export
            </span>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  BAvatar, BButton, BDropdown,
  BDropdownItem, BFormInput, BInputGroup,
  BInputGroupAppend, BSpinner,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import { required, regex, max } from '@validations'

import useDashboard from './useDashboard'

localize('id')

export default {
  components: {
    BAvatar,
    BButton,
    BDropdown,
    BDropdownItem,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    BSpinner,
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    storeURL() {
      return `${process.env.VUE_APP_WAS_SITE_URL}/#/store`
    },
  },
  methods: {
    bounceIn(value) {
      if (value !== '7') {
        this.$swal({
          width: 600,
          padding: '2em',
          html: '<h4><strong>Mau lihat analisis ini lebih lengkap?</strong></h4>',
          confirmButtonText: `<a target="_blank" href="${this.storeURL}?product=cekbrand" style="color:white">Coba Gratis Sekarang</a>`,
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
      }
    },
  },
  setup(props, context) {
    const {
      accountData,
      triggerLoadingProcess,
      fetchAccountData,
      nFormatter,
    } = useDashboard(props, context)

    const inputUsername = ref('')
    const dataFrameOptions = ref(['7', '28', '60', '90'])

    const validationForm = () => {
      context.refs.usernameValidation.validate().then(success => {
        if (success) {
          fetchAccountData(inputUsername.value)
        }
      })
    }
    const resolveUpdatedTimestamp = date => {
      const updatedTimestamp = new Date(date)
      return {
        date: new Date(updatedTimestamp).toLocaleDateString('id-ID'),
        time: new Date(updatedTimestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      }
    }

    return {
      accountData,
      inputUsername,
      dataFrameOptions,
      triggerLoadingProcess,
      required,
      regex,
      max,
      validationForm,
      nFormatter,
      resolveUpdatedTimestamp,
    }
  },
}
</script>
