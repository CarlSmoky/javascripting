const symbleOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const roman = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};
const romanToInt = (s) => {
  const arr = s.split('');
  let sum = 0;
  arr.forEach((e, i) => {
    if (symbleOrder.indexOf(e) < symbleOrder.indexOf(arr[i + 1])) {
      sum += (roman[arr[i + 1]] - roman[e]);
      sum -= roman[arr[i + 1]];
    } else {
      sum += roman[e];
    }
  }
  );
  return sum;
};


// symbleOrder.forEach((v, i) => console.log(i));
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999]

// Example 1:
// Input: 
// s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
s = "LVIII"
console.log(romanToInt(s));