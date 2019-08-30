import { Vue } from '~/node_modules/nuxt-property-decorator'

Vue.filter('capitalize', (value) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
