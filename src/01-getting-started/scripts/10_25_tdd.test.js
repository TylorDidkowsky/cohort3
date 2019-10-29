//a stub has a function name parameters that returns a dummy
///this is the first step is to write the stub
//with mininum code
//(1) Add a stub
//(2) Write a test
//(3) Get it to fail
//(4) Mininum code pass
//(5) Another test
//(6) Fail
//(7) write
//(8) continue until you have all your functional
//(9) refactor
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
//return 0;
//console logs below are the plumbing
test('just playing--------------', () => {
  console.log('Hello World from 10_25_tdd.js');
  functions.helloWorld();
  // this is my first test
  // this is my first fail
  //  expect(received).toBe(expected) Object.is equality
  expect(functions.sum(1, 2)).toBe(3);
  expect(functions.sum(1, 2)).toBe(5);
});
