<template>
  <div class="dashboard-kompetitor-accounts">
    <b-card
      class="account-item mr-1 my-0"
      no-body
    >
      <div class="d-flex flex-column align-items-center">
        <b-avatar
          :src="data.src"
          size="80px"
        />
        <span class="text-dark">
          {{ data.username }}
        </span>
        <b-button
          v-if="!main"
          class="remove-account p-0 mt-auto"
          variant="outline-danger"
        >
          Hapus
        </b-button>
      </div>
      <div
        v-if="main"
        class="badge-account v-desktop d-flex justify-content-center align-items-center"
      >
        <span class="text-center text-white">
          Akun Anda
        </span>
      </div>
    </b-card>
    <div class="account-item-mobile justify-content-between align-items-center mb-1">
      <div class="d-flex align-items-center">
        <b-avatar
          :src="data.src"
          size="40px"
        />
        <span class="text-dark">
          {{ data.username }}
        </span>
      </div>
      <div class="badge-account d-flex justify-content-center align-items-center">
        <span class="text-center text-white">
          Akun Anda
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { BAvatar, BButton, BCard } from 'bootstrap-vue'

export default {
  components: {
    BAvatar,
    BButton,
    BCard,
  },
  props: {
    main: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss">
.dashboard-kompetitor-accounts {
  .card {
    &.account-item {
      width: 136px;
      height: 200px;
      padding: 40px 0px 12px 0px;
      border: 1px solid #E9EAEB;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.13) !important;
      border-radius: 4px;
      position: relative;

      & > div:first-child {
        height: inherit;
      }
      span {
        font-size: 12px;
        line-height: 16px;
      }
      .b-avatar {
        margin-bottom: 16px;
        &-img {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12),
            0 2px 4px 0 rgba(0, 0, 0, 0.04) !important;
        }
      }
      .remove-account {
        width: 100px;
        height: 28px;
        font-size: 12px;
        line-height: 150%;
      }
    }
  }
  .account-item-mobile {
    display: none;

    .b-avatar {
      margin-right: 8px;
    }
  }
  .badge-account {
    width: 80px;
    height: 24px;
    background: #368AC8;
    border-radius: 4px 0px 8px 0px;

    &.v-desktop {
      position: absolute;
      left: 0;
      top: 0;
    }
    span {
      font-size: 10px;
      line-height: 16px;
    }
  }

  @media (max-width: 818px) {
    .card {
      &.account-item {
        display: none;
      }
    }
    .account-item-mobile {
      display: flex;
    }
  }
}
</style>
