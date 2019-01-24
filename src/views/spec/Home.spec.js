import { createLocalVue, shallowMount } from '@vue/test-utils'

import Router from 'vue-router'

import Home from '@/views/Home'
import Navbar from '@/components/Navbar'

const localVue = createLocalVue()

localVue.use(Router)

describe('Home.vue', () => {
  test('should render correct contents', () => {
    const wrapper = shallowMount(Home, {
      localVue
    })

    expect(wrapper.findAll(Navbar).length).toBe(1)
  })

  test('should match snapshot', () => {
    const wrapper = shallowMount(Home, {
      localVue
    })

    expect(wrapper.element).toBeDefined()
    expect(wrapper.element).toMatchSnapshot()
  })
})
