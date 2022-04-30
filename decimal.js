// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

// const myFunction = (a) => {
//   const string = a.toString();
//   console.log(string);
//   let result = false;
//   if (!string.includes(".")) {
//     result = true;
//   }
//   return result;
// };

const myFunction = (a) => {
  console.log(Math.floor(a));
  return a - Math.floor(a) === 0;
};

console.log(myFunction(4));
console.log(myFunction(1.123));
console.log(myFunction(1048));
console.log(myFunction(10.48));
