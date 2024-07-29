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
          1. Buka Facebook profil anda. Pada bagian kanan atas halaman profil, pilih menu <a class="font-weight-bold">“Buat”</a> dan pilih menu <a class="font-weight-bold">“Halaman”</a>
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-2/facebook-page-1.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          2. Isi informasi tentang halaman facebook anda. Jika sudah, klik <a class="font-weight-bold">“Buat Halaman"</a>
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-2/facebook-page-2.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          3. Anda dapat menambahkan foto profil dan foto sampul untuk halaman facebook anda. Jika anda ingin melewati tahap ini, klik <a class="font-weight-bold">“Simpan”</a>
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-2/facebook-page-3.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          4. Halaman facebook anda sudah jadi. Seperti inilah tampilan halaman facebook anda.
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-2/facebook-page-4.png"
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
