/*

1) WRITE STUB A, FUNCTION B,PARAMETURE C, RETURNS (Problem solving code) A STUB HAS A FUNCTION NAME AND RETURNS A DUMBY VALUE.
                            SUM:(P1,P2)=>{
                                RETURN 0;
                            }
2) WRITE FAILING TEST                           1)create 2 files
3  WRITE ONLY CODE TO MAKE TEST PASS            2)test for console.log (hello world)
4) WRITE ANOTHER TEST                           -run npm test for console.log
5) REPEAT                                       3)psc write function console.log(hello world)
6) REFACTOR                                     -import export (psc)(test)
                                                -run (hello world);
create two new files:                           -stub(name+permate+dumby return)
src/javascript/syntax.js                        
src/javascript/syntax.test.js
be creative; write tests and code to prove to yourself that you understand the concepts of each line. Remember the steps:
write a stub
write a test that fails
write the code for the test to pass
run the test
repeat
refactor
 
*/

import functions from './10_25_tdd.js';

test('hello world', () => {
  console.log('hello world from calgary');
});

test('sum', () => {
  expect(functions.sum(2, 3)).toBe(5);
});
