<template>
  <div id="faq-container">
    <header class="d-flex justify-content-center align-items-center">
      <b-card
        no-body
        class="w-100 h-100 mb-0"
      >
        <b-card-body class="d-flex flex-column align-items-center justify-content-center">
          <h2 class="title text-center mb-1 my-sm-2 my-lg-3 mt-auto">
            Cari topik pertanyaanmu
          </h2>

          <!-- form -->
          <b-form class="w-50 m-0">
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon" />
              </b-input-group-prepend>
              <b-form-input
                v-model="faqSearchQuery"
                placeholder="Cari"
              />
            </b-input-group>
          </b-form>
          <!-- form -->
        </b-card-body>
      </b-card>
    </header>
    <!--/ faq search section -->

    <!-- frequently asked questions -->
    <section
      id="faq-list"
      class="mx-auto"
    >
      <faq-question-answer :options="faqData" />
    </section>
    <!--/ frequently asked questions -->
  </div>
</template>

<script>
import {
  BCard, BCardBody, BForm, BInputGroup, BFormInput, BInputGroupPrepend,
} from 'bootstrap-vue'
import FaqQuestionAnswer from './FaqQuestionAnswer.vue'
import faqDataList from './faqData'

export default {
  components: {
    BForm,
    BCard,
    BCardBody,
    BInputGroup,
    BFormInput,
    BInputGroupPrepend,

    FaqQuestionAnswer,
  },
  data() {
    return {
      faqSearchQuery: '',
      faqDataList,
      faqData: [],
    }
  },
  watch: {
    faqSearchQuery: {
      immediate: true,
      handler() {
        this.findData(this.faqSearchQuery)
      },
    },
  },
  methods: {
    findData(q) {
      const queryLowered = q.toLowerCase()
      const faq = this.faqDataList.data

      const filteredData = faq.filter(qAndAObj => {
        if (qAndAObj.question.toLowerCase().includes(queryLowered) || qAndAObj.answer.toLowerCase().includes(queryLowered)) {
          return true
        }
        return false
      })
      this.faqData = filteredData
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/apps/faq.scss';
</style>
