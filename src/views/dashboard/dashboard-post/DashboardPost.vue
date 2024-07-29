<template>
  <div class="dashboard-post">
    <header class="d-flex flex-column mt-1 mb-2 mb-lg-3 mt-lg-2">
      <label
        class="text-nowrap font-small-2 text-gray-500"
        for="category-select"
      >
        Tampilkan:
      </label>
      <v-select
        v-model="category"
        :options="categoryOptions"
        :clearable="false"
        :selectable="(option) => option.includes('Engagement Tertinggi')"
        input-id="category-select"
        class="category-select mr-sm-auto font-small-3"
      >
        <template #option="{ label }">
          <span>
            Top 10: {{ label }}
          </span>
        </template>
        <template #selected-option="{ label }">
          <span>
            Top 10: {{ label }}
          </span>
        </template>
      </v-select>
    </header>
    <article>
      <dashboard-post-category title="Engagement Tertinggi">
        <template #grid-view-items>
          <dashboard-post-media
            v-for="index in 10"
            :key="index"
            :rank="index + 1"
            class="mx-1"
          />
        </template>
      </dashboard-post-category>
    </article>
  </div>
</template>
<script>
import { ref } from '@vue/composition-api'
import vSelect from 'vue-select'
import DashboardPostCategory from './DashboardPostCategory.vue'
import DashboardPostMedia from './DashboardPostMedia.vue'

export default {
  components: {
    vSelect,

    DashboardPostCategory,
    DashboardPostMedia,
  },
  setup() {
    const category = ref('Engagement Tertinggi')
    const categoryOptions = [
      'Kategori Pilihan',
      'Postingan Terbaru',
      'Engagement Tertinggi',
      'Paling banyak disukai',
      'Paling banyak dikomentari',
      'Reach Tertinggi',
      'Engagement Terendah',
      'Paling sedikit disukai',
      'Paling sedikit dikomentari',
      'Reach Terendah',
    ]
    return {
      category,
      categoryOptions,
    }
  },
}
</script>
<style lang="scss">
@import '~@core/scss/base/bootstrap-extended/include';

.dashboard-post {
  header {
    .category-select {
      min-width: 260px;
      .vs__dropdown-toggle {
        border: 1px solid #368AC8;
      }
      .vs__open-indicator {
        fill: #368AC8;
      }
      .vs__selected-options {
        flex-wrap: nowrap;
      }
      .vs__selected {
        color: #368AC8 !important;
        font-weight: 500;
      }
    }
  }

  article {
    .card {
      background: #fbfbfc;
      border: 1px solid #e9eaeb;
      border-radius: 0;
      box-shadow: none;
    }
  }
  .disabled {
    pointer-events:none;
    color: #bfcbd9;
    cursor: not-allowed;
    background-image: none;
    background-color: #eef1f6;
    border-color: #d1dbe5;
  }
}
</style>
<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
</style>
