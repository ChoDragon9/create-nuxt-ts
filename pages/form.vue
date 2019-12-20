<template>
  <div>
    <input v-model="message" type="text" />
    <div>{{ message | capitalize }}</div>
    <input v-focus type="text" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  layout: 'content'
})
class Form extends Vue {
  message = ''
}

export default Form
</script>
