<template>
  <div>
    <b-card
      class="post-card p-50 mb-1 mx-auto"
      no-body
    >
      <div class="item-img">
        <b-img
          fluid
          :src="require(`@/assets/images/posts/post-${rank-1}.png`)"
        />
        <div
          class="medal d-flex  justify-content-around align-items-center"
          :style="`background:${rank-1 > 3 ? '#FFFFFF' : '#283138'}`"
        >
          <b-img
            v-if="rank-1 <= 3"
            :src="require(`@/assets/images/icons/medal-gold.svg`)"
          />
          <b-img
            v-else
            :src="require(`@/assets/images/icons/medal.svg`)"
          />
          &nbsp;
          <span
            class="font-medium-1 medal-rank"
            :class="{
              'medal-rank-gold': rank-1 <= 3,
            }"
          >
            {{ rank-1 }}
          </span>
        </div>
      </div>
      <div class="d-flex py-50 justify-content-around">
        <div class="d-flex align-items-center">
          <feather-icon
            icon="HeartIcon"
            class="mr-25 text-danger"
            stroke-width="3"
            size="14"
          />
          <span class="font-small-2">5.9k</span>
        </div>
        <div class="d-flex align-items-center">
          <feather-icon
            icon="MessageSquareIcon"
            class="mr-25"
            stroke="#7A62F9"
            stroke-width="3"
            size="14"
          />
          <span class="font-small-2">5.9k</span>
        </div>
        <div class="d-flex align-items-center">
          <b-img
            :src="require('@/assets/images/icons/engagement-rate.svg')"
            class="mr-25"
            size="14"
          />
          <span class="font-small-2">5.9k</span>
        </div>
      </div>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        class="w-100 font-weight-bold d-flex align-items-center justify-content-center mt-50"
        variant="primary"
        to=""
      >
        <span class="font-small-3 mr-50">
          Lihat Detail
        </span>
        <feather-icon
          icon="ChevronRightIcon"
          stroke-width="4"
        />
      </b-button>
    </b-card>
  </div>
</template>
<script>
import { BCard, BImg, BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard,
    BImg,
    BButton,
  },
  directives: {
    Ripple,
  },
  props: {
    rank: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang="scss">
.post-card {
  width: 214px;
  border: 1px solid #E9EAEB;
  border-radius: 4px;
  // Item Image
  .item-img {
    position: relative;
    height: 198px;
    img {
      border-radius: 0.125rem;
    }

    .medal {
      position: absolute;
      width: 48px;
      height: 36px;
      right: 0px;
      top: 0;

      border-radius: 0px 0px 0px 8px;

      .medal-rank {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #368AC8;

        &-danger {
          @extend .medal-rank;

          -webkit-text-stroke-color: #EA5455 !important;
        }

        &-gold {
          @extend .medal-rank;

          /* Fallback: Set a background color. */
          background-color: #FFDF40;

          /* Create the gradient. */
          background-image: linear-gradient(279.9deg, #FF8359,rgba(255, 131, 89, 0));

          /* Use the text as a mask for the background. */
          /* This will show the gradient as a text color rather than element bg. */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-color: transparent !important;
        }
      }
    }
  }
}
</style>
