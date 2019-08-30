<template>
  <div>
    <input type="text" />
    <input v-focus type="text" />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'content'
})
class Form extends Vue {}

export default Form
</script>
