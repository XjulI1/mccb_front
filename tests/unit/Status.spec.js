import Vue from 'vue'
import Status from '@/components/Status'

describe('Status.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Status)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.status h1').textContent)
      .toEqual('Servers status')
  })
})
