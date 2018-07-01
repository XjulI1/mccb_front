import {shallowMount} from '@vue/test-utils'

import Status from '@/components/Status'

describe('Status.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(Status)

    expect(wrapper.find('.status h1').text())
      .toContain('Servers status')
  })
})
