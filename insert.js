// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
// const myFunction = (a, b) => {
//   let arr = [];
//   const reverse = a.split('').reverse();
//   for (let i = 0; i < a.length; i++) {
//     if (i % 3 === 0 && i !== 0) {
//       arr.push(b);
//       arr.push(reverse[i]);
//     } else {
//       arr.push(reverse[i]);
//     }
//   }
//   const result = arr.reverse().join('');
//   return result;
// };

//Refactor
const myFunction = (a, b) => {
  let result = [];
  let rest = a;
  while (rest.length) {
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  return result.reverse().join(b);
};

console.log(myFunction('1234567', '.')); //'1.234.567'
console.log(myFunction('abcde', '$')); //'ab$cde'
console.log(myFunction('zxyzxyzxyzxyzxyz', 'w')); //'zwxyzwxyzwxyzwxyzwxyz'