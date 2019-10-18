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

export default assertEquals;

// 	Write the function that will create this output:

// *** the two values are not the same:
//     p1--> a
//     p2--> b

// *** the two values are not the same:
//     p1--> 1
//     p2--> 2

// *** the two values are not the same:
//     p1--> 2
//     p2--> 2

//  Write the function after this comment ---
