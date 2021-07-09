import { get } from './get'

describe('get function', () => {
  it('Should return one property from object', () => {
    expect(get('foo')({ foo: 'bar' })).toBe('bar')
  })

  it('Should return several properties deep', () => {
    expect(get('foo.bar')({ foo: { bar: 'baz' } })).toBe('baz')
  })

  it('Should return undefined if property not found', () => {
    expect(get('foo.bar')({ foo: 'bar' })).toBe(undefined)
  })

  it('Should return the fallback value if property not found', () => {
    expect(get('foo.bar', 'FALLBACK')({ foo: 'bar' })).toBe('FALLBACK')
  })
})
