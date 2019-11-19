import functions from './functions';

test('Check the sizes', () => {
  expect(functions.size(-1)).toBe('small'); // Consider the edge cases
  expect(functions.size(0)).toBe('small');
  expect(functions.size(10)).toBe('medium');
  expect(functions.size(15)).toBe('medium');
  expect(functions.size(20)).toBe('large');
  expect(functions.size(2000000)).toBe('large');
});

test('Does that add function work?', () => {
  expect(functions.add(1, 2)).toBe(3);
  expect(functions.add(101, 202)).toBe(303);
});
(num) => {
  if (num < 0) return 0;
  if (num <= 47630) return num * 0.15;
  if (num <= 95259) return ((num - 47630) * 0.205) + 7145;
  if (num <= 147667) return ((num - 95259) * 0.26) + 16908;
  if (num <= 210371) return ((num - 147667) * 0.29) + 30535;
  return ((num - 210371) * 0.33) + 48719;
},