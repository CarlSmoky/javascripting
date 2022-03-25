const longestCommonPrefix = (strs) => {

  for (let j = 0; j < strs[0].length; j++) {
    let prefix = strs[0][j];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] === prefix) {
        console.log(strs[i][j]);
      }
    }
  }
};


let strs = ["flow", "flower", "flight"];
console.log(longestCommonPrefix(strs));