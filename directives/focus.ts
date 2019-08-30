import { Vue } from '~/node_modules/nuxt-property-decorator'

Vue.directive('focus', {
  inserted: (el) => {
    el.focus()
  }
})
