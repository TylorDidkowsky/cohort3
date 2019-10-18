function assertEquals(p1, p2) {
  if (p1 === p2) {
    return true;
  } else {
    console.log('*** the two values are not the same:');
    console.log('    p1--> ', p1);
    console.log('    p2--> ', p2);
    return false;
  }
}

assertEquals('a', 'b');
assertEquals('a', 'a');
assertEquals(1, 2);
assertEquals(2, 2);
assertEquals('2', 2);
assertEquals('This value', 'This value');
