<template>
  <div
    class="d-flex content align-items-center"
    style="height:5rem"
  >
    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  BLink,
} from 'bootstrap-vue'

export default {
  components: {
    BLink,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
