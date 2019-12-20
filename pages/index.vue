<template>
  <div class="container">
    <div>
      <logo />
      <a @click.prevent="upCount()" class="button--green">
        Up Count
      </a>
      {{ count }}
      <a @click.prevent="downCount()" class="button--grey">
        Down
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'
import { getCurrentTime } from '~/plugins/current-time'
import { Mutation, State } from '~/node_modules/nuxt-property-decorator'

@Component({
  layout: 'home',
  components: {
    Logo
  },
  middleware: 'page-logger'
})
class Page extends Vue {
  constructor() {
    super()
    console.log('page getTime', getCurrentTime())
  }
  @State count
  @Mutation upCount
  @Mutation downCount
}

export default Page
</script>
