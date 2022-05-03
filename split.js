// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
const myFunction = (a) => {
  const strings = a.toString().split('');
  // let array = [];
  // for (let item of splitNum) {
  //   array.push(Number(item));
  // }
  // return array;
  return strings.map(digit => Number(digit));
};

console.log(myFunction(931));