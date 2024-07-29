<template>
  <div
    id="home-blog-thumbnails"
    class="bg-teal p-section"
  >
    <div class="size-limit mb-2">
      <h1 class="top-title font-weight-bolder mb-3 text-center text-primary">
        Artikel
      </h1>
      <div class="article-blog-thumbnail">
        <b-row class="blog-list-wrapper mb-5">
          <b-col
            v-for="(article, index) in blogList"
            :key="index"
            md="6"
            xl="3"
          >
            <b-card
              tag="article"
              no-body
              @mouseover="showByIndex = index"
              @mouseleave="showByIndex = null"
            >
              <b-link
                :href="article.link"
                target="_blank"
              >
                <b-img
                  :src="article.jetpack_featured_media_url"
                  class="card-img-top w-full"
                  rounded
                  fluid
                  style="object-fit: contain;"
                />
              </b-link>
              <b-card-body>
                <b-card-title>
                  <b-link
                    :href="article.link"
                    target="_blank"
                    class="blog-title-truncate text-body-heading"
                  >
                    {{ article.title.rendered }}
                  </b-link>
                </b-card-title>
                <b-media no-body>
                  <small class="text-muted">{{ changeDateFormat(article.date) }}</small>
                </b-media>
                <b-card-text
                  v-if="showByIndex === index"
                  class="blog-content-truncate mt-2"
                >
                  <!-- eslint-disable vue/no-v-html -->
                  <div v-html="article.excerpt.rendered" />
                  <!--eslint-enable-->
                </b-card-text>
                <hr v-if="showByIndex === index">
                <div class="d-flex flex-row-reverse justify-content-center align-items-center toba">
                  <b-link
                    v-if="showByIndex === index"
                    :href="article.link"
                    target="_blank"
                    class="font-weight-bold"
                  >
                    Baca Selengkapnya
                  </b-link>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div class="d-flex justify-content-center">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          size="lg"
          class="btn-more"
          variant="outline-primary"
          href="https://toba.ai/blog/"
        >
          Artikel Lainnya
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BCardTitle, BImg, BCardBody, BLink, BButton, BMedia,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { kFormatter } from '@core/utils/filter'
import axios from 'axios'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    BCardBody,
    BCardTitle,
    BLink,
    BImg,
    BButton,
    BMedia,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      blogList: [],
      showByIndex: null,
    }
  },
  created() {
    axios.get('https://toba.ai/blog/wp-json/wp/v2/posts/?_embed&per_page=4&author=').then(response => { this.blogList = response.data })
  },
  methods: {
    kFormatter,
    changeDateFormat(date, type = 'long') {
      return new Date(date).toLocaleDateString('id-ID', { year: 'numeric', month: type, day: 'numeric' })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-blog.scss';
</style>
