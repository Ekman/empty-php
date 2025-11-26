import { notEmpty } from "./not-empty"

describe('notEmpty-js', function () {
  it('Testing nulls', function () {
    expect(notEmpty(null)).toBeFalsy()
    expect(notEmpty(undefined)).toBeFalsy()
    expect(notEmpty()).toBeFalsy()
  })

  it('Testing booleans', function () {
    expect(notEmpty(false)).toBeFalsy()
    expect(notEmpty(true)).toBeTruthy()
  })

  it('Testing arrays', function () {
    expect(notEmpty([])).toBeFalsy()
    expect(notEmpty(['a', 'b'])).toBeTruthy()
  })

  it('Testing maps', function () {
    expect(notEmpty(new Map())).toBeFalsy()
    expect(notEmpty(new Map([['key', 'value']]))).toBeTruthy()
  })

  it('Testing sets', function () {
    expect(notEmpty(new Set())).toBeFalsy()
    expect(notEmpty(new Set([1,2,3,4]))).toBeTruthy()
  })

  it('Testing errors', function () {
    expect(notEmpty(new Error())).toBeTruthy()
    expect(notEmpty(new Error(''))).toBeTruthy()
    expect(notEmpty(new Error('test'))).toBeTruthy()
  })

  it('Testing objects', function () {
    expect(notEmpty({})).toBeFalsy()
    expect(notEmpty({ a: 'b' })).toBeTruthy()
    expect(notEmpty({ length: 0 })).toBeTruthy()
  })

  it('Testing strings', function () {
    expect(notEmpty('')).toBeFalsy()
    expect(notEmpty('string')).toBeTruthy()
    expect(notEmpty('Error')).toBeTruthy()
    expect(notEmpty('0')).toBeFalsy()
  })

  it('Testing numbers', function () {
    expect(notEmpty(0)).toBeFalsy()
    expect(notEmpty(42)).toBeTruthy()
  })

  it('Testing functions', function () {
    expect(notEmpty(function(){})).toBeTruthy()
    expect(notEmpty(function(a: unknown, b :unknown){})).toBeTruthy()
  })
})
