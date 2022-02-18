const isPalindrome = (x) => {
  const string = x.toString();
  let reversed = [];
  string.split("").map(item => {
    reversed.unshift(item);
  });
  const reveresedNum = Number(reversed.join(''));
  return reveresedNum === x;
};

let x = 121; //true

// x = -121; //false

// x = 10; //false
isPalindrome(x);