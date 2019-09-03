<template>
  <div class="wrap">
    <navi />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Navi from '~/components/Navi.vue'
import { Component, Vue } from '~/node_modules/nuxt-property-decorator'
import { getCurrentTime } from '~/plugins/current-time'

@Component({
  components: {
    Navi
  },
  middleware: 'layout-logger'
})
class HomeLayout extends Vue {
  constructor() {
    super()
    console.log('layout getTime', getCurrentTime())
  }
}

export default HomeLayout
</script>
