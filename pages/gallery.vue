<template>
  <div>
    <gallery-images />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue } from 'nuxt-property-decorator'
import GalleryImages from '~/components/GalleryImages.vue'

@Component({
  layout: 'content',
  components: {
    GalleryImages
  },
  middleware: 'page-logger'
})
class Gallery extends Vue {}

export default Gallery
</script>
