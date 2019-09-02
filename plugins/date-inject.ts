export default ({ app }, inject) => {
  inject('getTime', () => Date.now())
}