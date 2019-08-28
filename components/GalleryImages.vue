<template>
  <div class="gallery">
    <h2>Gallery</h2>
    <ul>
      <li>
        <img
          src="~/assets/images/adriatic-sea-beach-beautiful-sunset-2825240.jpg"
          width="200px"
        />
        <img
          src="~/assets/images/adventure-alps-cold-1298533.jpg"
          width="200px"
        />
        <img src="~/assets/images/dawn-fog-foggy-2819353.jpg" width="200px" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue } from 'nuxt-property-decorator'

@Component({})
class GalleryImages extends Vue {}

export default GalleryImages
</script>

<style>
.gallery {
  width: 100%;
}
</style>
