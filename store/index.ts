export const state = () => ({
  count: 0
})

export const mutations = {
  upCount(state) {
    console.log('store getTime', this.$getTime())
    state.count++
  },
  downCount(state) {
    console.log('store getTime', this.$getTime())
    state.count--
  }
}
