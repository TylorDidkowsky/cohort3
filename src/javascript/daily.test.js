// and before this comment ---
import assertEquals from './daily.js';

test('testing assertEquals and Tylor is happy', () => {
  expect(assertEquals('a', 'b')).toBe(false);
  expect(assertEquals(1, 2)).toBe(false);
  expect(assertEquals('a', 'a')).toBe(true);
  expect(assertEquals(2, 2)).toBe(true);
  expect(assertEquals('2', 2)).toBe(false);
  expect(assertEquals('This value', 'This value')).toBe(true);
});
