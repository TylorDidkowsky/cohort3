//TESTING JS//

import functions from './larrycalc.js';

test('larrytest', () => {
  console.log('hello world from larry calc');
  functions.helloworld();
  expect(functions.sum(2, 3)).toBe(5);
  expect(functions.sum(4, 3)).toBe(7);
});
