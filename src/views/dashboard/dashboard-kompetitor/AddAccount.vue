<template>
  <div id="dashboard-kompetitor-add-accounts">
    <b-card
      class="add-account my-0"
      no-body
      @click="bounceIn()"
    >
      <div class="d-flex flex-column align-items-center justify-content-center">
        <feather-icon
          icon="PlusCircleIcon"
          width="54px"
          height="54px"
          stroke="#368AC8"
        />
        <span class="text-primary font-weight-bolder text-center">
          Tambah Kompetitor
        </span>
      </div>
    </b-card>
    <b-button
      class="add-account-mobile justify-content-between align-items-center"
      variant="outline-primary"
      @click="bounceIn()"
    >
      <feather-icon
        icon="PlusCircleIcon"
        width="16px"
        height="16px"
        stroke="#368AC8"
      />
      <span>
        Tambah Kompetitor
      </span>
    </b-button>
  </div>
</template>

<script>
import { BButton, BCard } from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BCard,
  },
  computed: {
    storeURL() {
      return `${process.env.VUE_APP_WAS_SITE_URL}/#/store`
    },
  },
  methods: {
    bounceIn() {
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
    },
  },
}
</script>

<style lang="scss">
#dashboard-kompetitor-add-accounts {
  .card {
    &.add-account {
      cursor: pointer;
      width: 136px;
      height: 200px;
      border: 1px solid #E9EAEB;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.13) !important;
      border-radius: 4px;

      div {
        height: inherit;

        span {
          font-size: 12px;
          line-height: 150%;
        }
        .feather {
          margin-bottom: 15.5px;
        }
      }
    }
  }
  .add-account-mobile {
    display: none;

    .feather {
      margin-right: 8px;
    }
  }

  @media (max-width: 818px) {
    .card {
      &.add-account {
        display: none;
      }
    }
    .add-account-mobile {
      display: flex;
    }
  }
}
</style>
