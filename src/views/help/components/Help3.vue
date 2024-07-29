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
          1. Pada beranda, klik menu <a class="font-weight-bold">“Halaman”</a> di menu sebelah kiri.
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-3/hubungkan-ig-1.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          2. Pilih halaman facebook yang akan anda hubungkan dengan akun instagram anda
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-3/hubungkan-ig-2.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          3. Pada halaman facebook anda, pilih menu <a class="font-weight-bold">“Pengaturan”</a> di menu bagian kiri bawah
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-3/hubungkan-ig-3.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          4. Pilih menu <a class="font-weight-bold">“Instagram”</a> pada kolom sebelah kiri
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-3/hubungkan-ig-4.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          5. Pilih <a class="font-weight-bold">“Hubungkan Instagram”</a>
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-3/hubungkan-ig-5.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          6. Akan muncul pilihan untuk izin mengakses pesan instagram. Jika anda memberikan izin, maka orang yang mengelola halaman facebook anda dapat melihat dan menanggapi pesan instagram anda.
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-3/hubungkan-ig-6.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          7. Silahkan masuk ke instagram bisnis anda.
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-3/hubungkan-ig-7.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          8. Halaman facebook anda akan terhubung dengan akun instagram bisnis anda.
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-3/hubungkan-ig-8.png"
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
