export const state = () => ({
  count: 0
})

export const mutations = {
  upCount(state) {
    state.count++
  },
  downCount(state) {
    state.count--
  }
}
