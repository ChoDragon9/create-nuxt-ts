import { mount } from '@vue/test-utils'
import Navi from '~/components/Navi.vue'

describe('Navi', () => {
  test('navi', () => {
    // Given
    // When
    const wrapper = mount(Navi)

    // Then
    expect(wrapper.find('.navi')).toBe(true)
  })
})
