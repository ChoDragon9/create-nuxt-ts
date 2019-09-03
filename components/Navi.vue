<template>
  <div class="navi">
    <nuxt-link :to="HOME">Home</nuxt-link>
    <nuxt-link :to="GALLERY">Gallery</nuxt-link>
    <nuxt-link :to="FORM">Form</nuxt-link>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue } from 'nuxt-property-decorator'
import { GNB } from '~/constants/gnb'
import { getCurrentTime } from '~/plugins/current-time'

@Component({})
class Navi extends Vue {
  HOME = GNB.HOME
  GALLERY = GNB.GALLERY
  FORM = GNB.FORM
  constructor() {
    super()
    console.log('component getTime', getCurrentTime())
  }
}

export default Navi
</script>
