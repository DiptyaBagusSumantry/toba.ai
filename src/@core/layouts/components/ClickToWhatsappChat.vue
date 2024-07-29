<template>
  <div>
    <b-button
      v-b-tooltip.hover.left.v-success="'WhatsApp Tim Kami'"
      class="button-float"
      variant="flat-success"
      @click="contactUs"
    >
      <b-img
        src="@/assets/images/pages/whatsapp.png"
        alt="logo"
        class="image-float"
      />
    </b-button>
  </div>
</template>

<script>
import {
  BButton, VBTooltip, BImg,
} from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BImg,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  methods: {
    contactUs() {
      window.open('https://wa.me/6281225214920?text=Hello%20Toba.AI!%0AMau%20bertanya%20nih...')
    },
  },
}
</script>

<style lang="scss" scoped>
.button-float {
  position: fixed;
  bottom: 40px;
  right: 40px;
  text-align: center;
  z-index: 100;
  padding: 0;
}

.image-float {
  width: 50px;
  height: 50px;
}
</style>
