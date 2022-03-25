const recursiveFactorial = num => {
  console.log("calling recursiveFactorial with", num);
  // 4! = 4 * 3 * 2 * 1 = 4 * 3!
  // 5! ==  5 * 4 * 3 * 2 * 1 ==  5 * 4!
  // 2! means 2 * 1, 3! means 3 * 2!, 4! means 4 * 3! etc

  // the 'base case'; in recursion there must always be a 'base case' which means the condition where you stop the recursion.  If there is no base case, the recursion will go on forever
  if (num <= 1) {
    return 1;
  } else {
    // if we have a value that is higher than the base case, e.g. 5, then we return 5 * recursiveFactorial(4)
    const previousValue = recursiveFactorial(num - 1);
    console.log("return", num, "*", previousValue);
    return num * previousValue;
  }
};

const recursiveFactorial1 = num => {
  console.log("calling recursiveFactorial with", num);
  if (num === 1) {
    return 1;
  } else {
    return num * recursiveFactorial1(num - 1);
  }
};

// keep this function call here 
// console.log(FirstFactorial(4));

// for (let i = 0; i < 10; i++) {
//   console.log(i, recursiveFactorial(i));
// };
console.log(recursiveFactorial(8));
console.log(recursiveFactorial1(5));