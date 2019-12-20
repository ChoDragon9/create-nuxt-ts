<template>
  <div>
    <gallery-assets-images />
    <gallery-static-images />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
import GalleryAssetsImages from '~/components/GalleryAssetsImages.vue'
import GalleryStaticImages from '~/components/GalleryStaticImages.vue'

@Component({
  layout: 'content',
  components: {
    GalleryAssetsImages,
    GalleryStaticImages
  },
  middleware: 'page-logger'
})
class Gallery extends Vue {}

export default Gallery
</script>
