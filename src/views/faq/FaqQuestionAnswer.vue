<template>
  <div v-if="options">
    <!-- collapse -->
    <app-collapse
      id="faq-collapse"
      accordion
      type="margin"
    >

      <app-collapse-item
        v-for="(data,index) in options"
        :key="index"
        :title="data.question"
      >
        {{ data.answer }}
      </app-collapse-item>

    </app-collapse>

    <!--/ collapse -->
  </div>
</template>

<script>
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    AppCollapseItem,
    AppCollapse,
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
#faq-payment-qna .card .card-header {
    padding: 1.5rem 2.8rem 1.5rem 1rem;
}
</style>
