// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
const myFunction = (a, b) => {
  // return b.includes(a) ? b + a : a + b;
  return a.indexOf(b) === -1 ? a + b : b + a;
};

console.log(myFunction('cheese', 'cake'));
console.log(myFunction('lips', 's'));
console.log(myFunction('Java', 'script'));
console.log(myFunction(' think, therefore I am', 'I'));