import classes from '../../lib/helpers/classes'

describe('classes', () => {
	it('接受 1 个className', () => {
		const result = classes('a')
		expect(result).toEqual('a')
	})
	it('接受 2 个className', () => {
		const result = classes('a', 'b')
		expect(result).toEqual('a b')
	})
	it('接受 undefined', () => {
		const result = classes('a', undefined)
		expect(result).toEqual('a')
	})
	it('接受 各种奇怪的值', () => {
		const result = classes('a', '中文', '---')
		expect(result).toEqual('a 中文 ---')
	})
	it('不接受参数', () => {
		const result = classes()
		expect(result).toEqual('')
	})
})
