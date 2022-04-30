// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

// const myFunction = (a, b) => {
//   let result = 0;
//   for (let letter of b) {
//     if (letter === a) {
//       result ++;
//     }
//   }
//   return result;
// };


const myFunction = (a, b) => {
  // console.log(b.split(a));
  // console.log("length", b.split(a).length);
  return b.split(a).length - 1;
};


console.log(myFunction('m', 'how many times does the character occur in this sentence?'));
// Expected2
console.log(myFunction('h', 'how many times does the character occur in this sentence?'));
// Expected4
console.log(myFunction('?', 'how many times does the character occur in this sentence?'));
// Expected1
console.log(myFunction('z', 'how many times does the character occur in this sentence?'));
// Expected0