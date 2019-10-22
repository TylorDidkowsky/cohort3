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

const data = {
  staff: [
    { fname: 'Jane', lname: 'Smith', balance: 10 },
    { fname: 'Liam', lname: 'Henry', balance: 1000 },
    { fname: 'Emma', lname: 'Jones', balance: 1330 },
    { fname: 'Olivia', lname: 'Notly', balance: 310 },
    { fname: 'Noah', lname: 'Ho', balance: 503 },
    { fname: 'William', lname: 'Lee', balance: 520 },
    { fname: 'Benjamin', lname: 'Amis', balance: 150 }
  ],
  company: 'EvolveU',
  city: 'Calgary',
  prov: 'Alberta'
};
