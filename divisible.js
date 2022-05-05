// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
// const isDivisble = (num1, num2) => {
//   let result = num1 % num2 === 0 ? true : false;
//   return result;
// };

// const myFunction = (x, y) => {
//   if (isDivisble(x, y)) return x;
//   let n = x;
//   while (!isDivisble(n, y)) n++;
//   return n;
// };

// Refactor
const myFunction = (x, y) => {
  while (x % y !== 0) x++;
  return x;
};

console.log(myFunction(1, 23));
console.log(myFunction(23, 23));
console.log(myFunction(7, 3));
console.log(myFunction(-5, 7));