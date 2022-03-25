const myFunction = (a) => {
  let maxValue = Number.MIN_SAFE_INTEGER;
  a.forEach((e) => {
    if (maxValue < e) {
      maxValue = e;
    }
  });
  return maxValue;
};

console.log(myFunction([1, 2, 3, 4]));