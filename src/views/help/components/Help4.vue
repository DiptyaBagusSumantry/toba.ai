<template>
  <div>
    <!-- collapse -->
    <app-collapse
      id="help-collapse"
      type="margin"
      class="my-2"
    >

      <!-- <app-collapse-item
        title="Video"
      >
        <p class="ml-6">
          Untuk membuat halaman facebook, anda dapat melihat video tutorial dibawah ini.
        </p>
        <div class="video-container">
          <iframe
            class="video-size rounded-lg"
            src="https://www.youtube.com/embed/9Gj47G2e1Jc?start=220"
            title="YouTube video player"
          />
        </div>
      </app-collapse-item> -->

      <app-collapse-item
        :is-visible="true"
        title="Langkah - langkah"
      >
        <p class="mb-4">
          1. Pastikan anda memiliki akun bisnis Instagram yang terhubung ke Halaman Facebook. Kemudian klik <a class="font-weight-bold">“Hubungkan”</a>
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-4/hubungkan-dgn-toba-1.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          2. Anda akan menuju Facebook. Login ke akun Facebook yang terhubung ke akun bisnis Instagram Anda
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-4/hubungkan-dgn-toba-2.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          3. Anda diminta memilih akun Instagram. Pilih <a class="font-weight-bold">hanya 1 (satu)</a> akun Instagram yang ingin anda hubungkan ke layanan cekBrand, kemudian klik <a class="font-weight-bold">“Selanjutnya”</a>.
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-4/hubungkan-dgn-toba-3.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          4. Anda diminta memilih Halaman Facebook. Pilih <a class="font-weight-bold">hanya 1 (satu)</a> Halaman Facebook yang terhubung ke akun Instagram yang anda pilih sebelumnya, kemudian klik <a class="font-weight-bold">“Selanjutnya”</a>.
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-4/hubungkan-dgn-toba-4.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          5. Pastikan semua pengaturan berada di posisi <a class="font-weight-bold">“Ya”</a>, kemudian klik <a class="font-weight-bold">“Selesai”</a>
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-4/hubungkan-dgn-toba-5.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          6. Anda akan mendapatkan pesan untuk menunggu sampai proses selesai. Silahkan tunggu sebentar hingga pesan berhasil muncul.
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-4/hubungkan-dgn-toba-6.png"
            alt="Responsive image"
            rounded
          />
        </div>
      </app-collapse-item>

    </app-collapse>
    <!--/ collapse -->
  </div>
</template>

<script>
import { BImg } from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    AppCollapseItem,
    AppCollapse,

    BImg,
  },
  data() {
    return {
    }
  },
}
</script>
