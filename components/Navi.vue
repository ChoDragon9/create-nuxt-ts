<template>
  <div class="navi">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/gallery">Gallery</nuxt-link>
    <nuxt-link to="/form">Form</nuxt-link>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue } from 'nuxt-property-decorator'

@Component({})
class Navi extends Vue {
  constructor() {
    super()
    console.log('component getTime', this.$getTime())
  }
}

export default Navi
</script>
