var assert = require('assert')
var empty = require('../dist/index.cjs.js')

describe('empty-js', function () {

  it('Testing nulls', function () {
    assert(empty(null) == true)
    assert(empty(undefined) == true)
    assert(empty() == true)
  })

  it('Testing booleans', function () {
    assert(empty(false) == true)
    assert(empty(true) == false)
  })

  it('Testing arrays', function () {
    assert(empty([]) == true)
    assert(empty(['a', 'b']) == false)
  })

  it('Testing maps', function () {
    assert(empty(new Map()) == true)
    assert(empty(new Map([['key', 'value']])) == false)
  })

  it('Testing sets', function () {
    assert(empty(new Set()) == true)
    assert(empty(new Set([1,2,3,4])) == false)
  })

  it('Testing objects', function () {
    assert(empty({}) == true)
    assert(empty({ a: 'b' }) == false)
    assert(empty({ length: 0 }) == false)
  })

  it('Testing strings', function () {
    assert(empty('') == true)
    assert(empty('string') == false)
    assert(empty('Error') == false)
    assert(empty('0') == true)
  })

  it('Testing numbers', function () {
    assert(empty(0) == true)
    assert(empty(42) == false)
  })
})
