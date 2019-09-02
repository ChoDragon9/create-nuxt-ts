<template>
  <div class="gallery">
    <h2>Gallery</h2>
    <ul>
      <li v-for="image in images" :key="image">
        <img :src="STATIC_PATH + image" width="200px" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue } from 'nuxt-property-decorator'

@Component({})
class GalleryStaticImages extends Vue {
  STATIC_PATH = '/images/'
  images: string[] = ['1.jpg', '2.jpg', '3.jpg']
}

export default GalleryStaticImages
</script>

<style>
.gallery {
  width: 100%;
}
</style>
