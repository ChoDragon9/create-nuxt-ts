<template>
  <div class="container">
    <div>
      <logo />
      <a class="button--green" @click.prevent="upCount()">
        Up Count
      </a>
      {{ count }}
      <a class="button--grey" @click.prevent="downCount()">
        Down
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mutation, State, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import { getCurrentTime } from '~/plugins/current-time'

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
