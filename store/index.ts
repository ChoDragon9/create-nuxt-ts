import { getCurrentTime } from '~/plugins/current-time'

export const state = () => ({
  count: 0
})

export const mutations = {
  upCount(state) {
    console.log('store getTime', getCurrentTime())
    state.count++
  },
  downCount(state) {
    console.log('store getTime', getCurrentTime())
    state.count--
  }
}
