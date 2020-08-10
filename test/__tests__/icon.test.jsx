import React from 'react'
import render from 'react-test-renderer'
import Icon from '../../lib/icon/icon'
import { mount } from 'enzyme'

describe('icon', () => {
	it('render successful', () => {
		const json = render.create(<Icon name='alipay' />).toJSON()
		expect(json).toMatchSnapshot()
	})

	it('onClick', () => {
		const fn = jest.fn()
		const fn2 = jest.fn()
		const component = mount(<Icon name='alipay' onClick={fn} />)
		
		component.find('svg').simulate('click')
		expect(fn).toBeCalled()
		expect(fn2.mock.calls.length).toBe(0);
	})
})
