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
          Untuk mengubah akun instagram menjadi akun bisnis, anda dapat melihat video tutorial dibawah ini.
          Atau anda dapat membaca petunjuk yang kami berikan yang ada di bawah video tutorial.
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
          1. Buka profil dan ketuk menu di sudut atas.
        </p>
        <div class="mt-2 image-container">
          <b-img
            class="mobile-img"
            src="@/assets/images/pages/help/help-1/ig-1.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          2. Pilih menu <a class="font-weight-bold">“Pengaturan”</a> di bagian bawah halaman.
        </p>
        <div class="mt-2 image-container">
          <b-img
            class="mobile-img"
            src="@/assets/images/pages/help/help-1/ig-2.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          3. Pilih menu <a class="font-weight-bold">“Akun”</a> di bagian bawah halaman.
        </p>
        <div class="mt-2 image-container">
          <b-img
            class="mobile-img"
            src="@/assets/images/pages/help/help-1/ig-3.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          4. Pilih menu <a class="font-weight-bold">“Beralih ke Akun Profesional”</a> di bagian bawah halaman.
        </p>
        <div class="mt-2 image-container">
          <b-img
            class="mobile-img"
            src="@/assets/images/pages/help/help-1/ig-4.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          5. Lengkapi detail akun anda, seperti kategori bisnis, dan informasi kontak anda.
        </p>
        <div class="mt-2 image-container">
          <b-img
            src="@/assets/images/pages/help/help-1/ig-5.png"
            alt="Responsive image"
            rounded
          />
        </div>

        <p class="mb-4">
          6. Jika anda memiliki halaman facebook, anda bisa langsung menghubungkan instagram bisnis dengan halaman facebook anda.
          Jika anda belum ingin menghubungkan akun instagram dengan halaman facebook, maka anda dapat melewati tahap ini.
        </p>
        <div class="mt-2 image-container">
          <b-img
            class="mobile-img"
            src="@/assets/images/pages/help/help-1/ig-6.png"
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
