import classes, { scopedClassMaker } from '../../../helpers/classes'

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

describe('scopedClassMaker', () => {
  const sc = scopedClassMaker('ts-lay')
  it('应该返回一个函数', function () {
    expect(typeof sc).toEqual('function')
  })
  describe('这个函数', () => {
    it('接受一个字符串', function () {
      expect(sc('a')).toEqual('ts-lay-a')
    })
    it('接受一个对象', function () {
      expect(sc({ '': true, hasAside: false })).toEqual('ts-lay')
      expect(sc({ a: true, hasAside: true })).toEqual(
        'ts-lay-a ts-lay-hasAside'
      )
    })
    it('接受两个字符串', function () {
      expect(sc('a', 'b')).toEqual('ts-lay-a b')
    })
    it('接受一个字符串与数组', function () {
      expect(sc('a', ['array', 'b'])).toEqual('ts-lay-a array b')
    })

    it('会忽略空字符串与undefined', function () {
      expect(sc('', [undefined, 'a'])).toEqual('ts-lay a')
    })
    it('不接受参数', () => {
      expect(sc()).toEqual('ts-lay')
    })
  })
})
