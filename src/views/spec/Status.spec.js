import {shallowMount} from '@vue/test-utils'

import Status from '@/views/Status'

describe('Status.vue', () => {
  test('should render correct contents', () => {
    const wrapper = shallowMount(Status)

    expect(wrapper.find('.status h1').text())
      .toContain('Servers status')
  })
})
