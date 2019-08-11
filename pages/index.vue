<template>
  <div class="container">
    <logo />
    <a class="button--green" @click.prevent="upCount()">
      Up Count
    </a>
    {{ count }}
    <a class="button--grey" @click.prevent="downCount()">
      Down
    </a>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mutation, State, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
class Page extends Vue {
  @State count
  @Mutation upCount
  @Mutation downCount
}

export default Page
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
