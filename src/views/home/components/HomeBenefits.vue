<template>
  <div
    id="home-benefits"
    class="bg-teal p-section"
  >
    <div class="size-limit">
      <b-row>
        <b-col
          cols="12"
          class="my-3"
        >
          <h1
            class="mb-5 text-center font-weight-bolder text-primary"
          >
            “Toba.AI membantu kamu”
          </h1>
        </b-col>

        <!-- card #1 -->
        <b-col
          xl="6"
        >
          <b-card
            class="position-static"
          >
            <b-img
              src="@/assets/images/pages/home/benefits/performa.png"
              alt="Responsive icon"
            />
            <h3
              class="my-1 title text-primary font-weight-bold"
            >Pahami performa akun Instagrammu dengan lebih baik</h3>
            <b-card-text
              class="subtitle mb-2"
            >
              Tampilan dashboard dari Toba.AI yang mudah dipahami dan digunakan bikin kamu jadi gampang melihat performa akun Instagrammu
            </b-card-text>
          </b-card>
        </b-col>

        <!-- card #2 -->
        <b-col
          xl="6"
        >
          <b-card
            class="right-card position-static"
          >
            <b-img
              src="@/assets/images/pages/home/benefits/riset.png"
              alt="Responsive icon"
            />
            <h3
              class="my-1 title text-primary font-weight-bold"
            >Riset kompetitor dan riset konten jadi praktis</h3>
            <b-card-text
              class="subtitle mb-2"
            >
              Riset konten terbaik milik kompetitor, terus aplikasikan di akun Instagrammu dan dapatkan jangkauan yang lebih luas
            </b-card-text>
          </b-card>
        </b-col>

        <!-- card #3 -->
        <b-col
          xl="6"
        >
          <b-card
            class="position-static"
          >
            <b-img
              src="@/assets/images/pages/home/benefits/keputusan.png"
              alt="Responsive icon"
            />
            <h3
              class="my-1 title text-primary font-weight-bold"
            >Buat keputusan pembuatan konten kedepan</h3>
            <b-card-text
              class="subtitle mb-2"
            >
              Ga perlu pusing lagi mikirin langkah apa yang mesti dilakukan untuk kemajuan akun Instagrammu
            </b-card-text>
          </b-card>
        </b-col>

        <!-- card #4 -->
        <b-col
          xl="6"
        >
          <b-card
            class="right-card position-static"
          >
            <b-img
              src="@/assets/images/pages/home/benefits/hashtag.png"
              alt="Responsive icon"
            />
            <h3
              class="my-1 title text-primary font-weight-bold"
            >Optimasi hashtag Instagram biar makin tenar</h3>
            <b-card-text
              class="subtitle mb-2"
            >
              Jadi yakin buat pake hashtag yang dulu-dulu karena di Toba.AI kamu bisa tau hashtag mana yang berpengaruh buat konten Instagrammu
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BImg,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    BImg,
  },
  directives: {
    Ripple,
  },
}
</script>
