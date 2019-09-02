<template>
  <div class="wrap">
    <navi />
    <div class="gnb">GNB</div>
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
class ContentLayout extends Vue {}

export default ContentLayout
</script>

<style>
html,
body {
  height: 100%;
}
.navi {
  height: 80px;
}
.gnb {
  height: 150px;
}
.wrap > div {
  border: solid 1px #2e495e;
  background: #00c48d;
}
</style>
