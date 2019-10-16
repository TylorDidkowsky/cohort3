import functions from './daily.js';
import { exportAllDeclaration } from '@babel/types';
// //test('Tylor Test', () =>) {
//     expect("extra large").toBe("extra large");
// }

// import functions from './functions';

// test('me playing', () => {
//   console.log('Hello World');
//   expect(functions.size(-1)).toBe('small'); // Consider the edge cases
//   expect(functions.size(0)).toBe('small');
//   expect(functions.size(10)).toBe('medium');
//   expect(functions.size(15)).toBe('medium');
//   expect(functions.size(20)).toBe('large');
//   expect(functions.size(2000000)).toBe('large');
// });

// test('Does that add function work?', () => {
//   expect(functions.add(1, 2)).toBe(3);
//   expect(functions.add(101, 202)).toBe(303);
// }); makeEmailArr

test('Me playing', () => {
  console.log('Hello World');
});
test('email builder from an array', () => {
  const name = ['first', 'last'];
  expect(functions.makeEmailArr(name)).toEqual('first.last@evolveu.ca');
  expect(functions.makeEmailArr(['First', 'Last'])).toEqual(
    'first.last@evolveu.ca'
  );
  expect(functions.makeEmailArr(['Bill', 'Smith'])).toEqual(
    'bill.smith@evolveu.ca'
  );
});
