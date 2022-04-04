const MinWindowSubstring = strArr => {
  // ---------------------- helpers -----------------------------
  //isContained checks to see if all the chars in the needle are in the given string
  const isContained = str => {
    console.log("Helper begin----------");
    let arr = str.split('');
    for (let i = 0, len = needle.length; i < len; i++) {
      console.log("Helper loop----------");
      console.log("i: ", i, "st time: ", "arr: ", arr);
      let place = arr.findIndex(val => {
        console.log("Loop ---->",  "val: ", val,"needle[i]: ", needle[i]);
        console.log(val === needle[i]);
        return val === needle[i];
      });
      console.log("place: ", place);
      if (place === -1) {
        console.log("Helper fail----------");
        return false;
      } else {
        arr.splice(place, 1);
        console.log("loop continue");
      }
    }
    console.log("Helper success----------");
    return true;
  };

  let str = strArr[0]; //N
  let needle = strArr[1].split(''); //K

  //start with the smallest possible substrings, then go up
  for (let i = needle.length; i <= str.length; i++) {
    for (let j = 0; j <= str.length - i; j++) {
      let mySlice = str.substr(j, i);
      console.log("i: ", i, "j: ", j, "mySlice: ", mySlice);
      if (isContained(mySlice)) {
        return mySlice;
      }
    }
  }
  return 'Not in string';
};



// keep this function call here
let strArr = ["aaabaaddae", "aed"]; //Output: aksfaje
strArr = ["ahffaksfajeeubsne", "jefaa"];
// strArr = ["ahffaksfajeeubsne", "11111"];
console.log(MinWindowSubstring(strArr));