<template>
  <div>
    <input v-model="message" type="text" />
    <div>{{ message | capitalize }}</div>
    <input v-focus type="text" />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'content'
})
class Form extends Vue {
  message = ''
}

export default Form
</script>
