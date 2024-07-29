<template>
  <div class="dashboard-kompetitor-select-accounts d-flex justify-content-between">
    <div class="account-main account-container d-flex align-items-center">
      <span>
        Akun Anda
      </span>
    </div>
    <b-dropdown
      ref="ref-account-second"
      class="account-container account-second ml-1"
      :class="{
        'ml-1': !isShow(2)
      }"
      :variant="`${!isShow(2) ? 'outline-secondary' : ''}`"
    >
      <template #button-content>
        <span>
          -
        </span>
      </template>
      <b-dropdown-item disabled>
        Kamu belum memasukkan kompetitor
      </b-dropdown-item>
    </b-dropdown>
    <b-dropdown
      ref="ref-account-third"
      class="account-container account-third ml-1"
      :class="{
        'display-none': !isShow(3)
      }"
    >
      <template #button-content>
        <span>
          -
        </span>
      </template>
      <b-dropdown-item disabled>
        Kamu belum memasukkan kompetitor
      </b-dropdown-item>
    </b-dropdown>
    <b-dropdown
      ref="ref-account-forth"
      class="account-container account-forth ml-1"
      :class="{
        'display-none': !isShow(4)
      }"
    >
      <template #button-content>
        <span>
          -
        </span>
      </template>
      <b-dropdown-item disabled>
        Kamu belum memasukkan kompetitor
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem } from 'bootstrap-vue'

import useDashboardKompetitor from './useDashboardKompetitor'

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const {
      isShow,
    } = useDashboardKompetitor()

    return {
      isShow,
    }
  },
}
</script>

<style lang="scss">
.dashboard-kompetitor {
  &-select-accounts {
    .account {
      &-container {
        border-radius: 4px;
        width: 256px;
        height: 48px;
      }
      &-main {
        background: linear-gradient(279.57deg, #70ADD9 0%, #368AC8 100%), #368AC8;
        justify-content: center;

        span {
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: white;
        }
      }
      &-second {
        .btn {
          border: none;
          background-color: #FF7C6E !important;
          background: linear-gradient(279.9deg, rgba(245, 49, 127, 0) 0%, #F5317F 100%);

          @media (max-width: 650px) {
            background: white;
            border: solid 1px #C9CBCD !important;
            background-color: white !important;
            color: black !important;
          }
        }
      }
      &-third {
        .btn {
          border: none;
          background-color: #AFF57A !important;
          background: linear-gradient(279.9deg, rgba(84, 209, 105, 0) 0%, #54D169 100%), #AFF57A;
        }
      }
      &-forth {
        .btn {
          border: none;
          background-color: #FFDF40 !important;
          background: linear-gradient(279.9deg, rgba(255, 131, 89, 0) 0%, #FF8359 100%), #FFDF40;
        }
      }
    }
  }
}

.dropdown-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
