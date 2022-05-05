// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

// const prime = [2, 5, 11, 17, 23, 29, 41, 47, 53, 59, 71, 83, 89, 101, 107, 113, 131, 137, 149, 167, 173, 179, 191, 197, 227, 233, 239, 251, 257, 263];

// const isPrimeNumber = (num) => {
//   let isPrime = true;
//   const halfOfNum = num / 2;
//   let divideNum = [];
//   for (let i = 2; i < halfOfNum; i++) {
//     divideNum.push(i);
//   }

//   if (0 < num && num < 4) return true;
//   let i = 0;
//   while (i < divideNum.length) {
//     if (num % divideNum[i] === 0) {
//       isPrime = false;
//     }
//     i++;
//   }
//   return isPrime;
// };

// const nearestPrime = (notPrime) => {
//   let nearestPrime = notPrime;
//   let isPrime = true;
//   do {
//     nearestPrime++;
//     if (isPrimeNumber(nearestPrime)) {
//       isPrime = false;
//     }
//   }
//   while (isPrime);
//   return nearestPrime;
// };

// const myFunction = a => {
//   const isPrime = isPrimeNumber(a);
//   if (isPrime) return a;
//   return nearestPrime(a);
// };

const myFunction = (a) => {
  const isPrime = (num) => {
    // console.log(Math.sqrt(num));
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  let n = a;
  while (!isPrime(n)) n++;
  return n;
};

console.log(myFunction(38));
console.log(myFunction(7));
console.log(myFunction(115));
console.log(myFunction(2000));
