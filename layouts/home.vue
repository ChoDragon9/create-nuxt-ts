<template>
  <div class="wrap">
    <navi />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Navi from '~/components/Navi.vue'
import { Component, Vue } from '~/node_modules/nuxt-property-decorator'

@Component({
  components: {
    Navi
  },
  middleware: 'layout-logger'
})
class HomeLayout extends Vue {}

export default HomeLayout
</script>
