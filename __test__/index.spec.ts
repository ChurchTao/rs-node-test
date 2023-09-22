import test from 'ava'

import { plus100, helloWorld } from '../index'

test('sync function from native code', (t) => {
  const fixture = 42
  t.is(plus100(fixture), fixture + 100)
})

test('hello world', (t) => {
  t.is(helloWorld(), 'hello world')
})
