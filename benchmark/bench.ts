import b from 'benny'

import { plus100, helloWorld } from '../index'

function add(a: number) {
  return a + 100
}

async function run() {
  await b.suite(
    'Add 100',

    b.add('Native a + 100', () => {
      plus100(10)
    }),

    b.add('JavaScript a + 100', () => {
      add(10)
    }),

    b.add('helloword', () => {
      helloWorld()
    }),

    b.cycle(),
    b.complete(),
  )
}

run().catch((e) => {
  console.error(e)
})
