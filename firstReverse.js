const FirstReverse = str => {

  // code goes here
  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
};

// keep this function call here
let string = "coderbyte";
console.log(FirstReverse(string));