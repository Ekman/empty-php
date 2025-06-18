import { empty } from "./index"

describe('empty-js', function () {
  it('Testing nulls', function () {
    expect(empty(null)).toBeTruthy()
    expect(empty(undefined)).toBeTruthy()
    expect(empty()).toBeTruthy()
  })

  it('Testing booleans', function () {
    expect(empty(false)).toBeTruthy()
    expect(empty(true)).toBeFalsy()
  })

  it('Testing arrays', function () {
    expect(empty([])).toBeTruthy()
    expect(empty(['a', 'b'])).toBeFalsy()
  })

  it('Testing maps', function () {
    expect(empty(new Map())).toBeTruthy()
    expect(empty(new Map([['key', 'value']]))).toBeFalsy()
  })

  it('Testing sets', function () {
    expect(empty(new Set())).toBeTruthy()
    expect(empty(new Set([1,2,3,4]))).toBeFalsy()
  })

  it('Testing errors', function () {
    expect(empty(new Error())).toBeFalsy()
    expect(empty(new Error(''))).toBeFalsy()
    expect(empty(new Error('test'))).toBeFalsy()
  })

  it('Testing objects', function () {
    expect(empty({})).toBeTruthy()
    expect(empty({ a: 'b' })).toBeFalsy()
    expect(empty({ length: 0 })).toBeFalsy()
  })

  it('Testing strings', function () {
    expect(empty('')).toBeTruthy()
    expect(empty('string')).toBeFalsy()
    expect(empty('Error')).toBeFalsy()
    expect(empty('0')).toBeTruthy()
  })

  it('Testing numbers', function () {
    expect(empty(0)).toBeTruthy()
    expect(empty(42)).toBeFalsy()
  })

  it('Testing functions', function () {
    expect(empty(function(){})).toBeFalsy()
    expect(empty(function(a: unknown, b :unknown){})).toBeFalsy()
  })
})
