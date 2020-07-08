import React from 'react'
import render from 'react-test-renderer'
import Button from '../../lib/button'

describe('button', () => {
	it('is a div', () => {
		const json = render.create(<Button />).toJSON()
		expect(json).toMatchSnapshot()
	})
})
