const QuestionsMarks = str => {

  // code goes here
  let result = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        result = true;
        if (str.slice(i, j).split("?").length - 1 < 3) {
          return false;
        }
      }
    }
  }
  return result;
};

// keep this function call here
const letters = "acc?7??sss?3rr1??????5";
console.log(QuestionsMarks(letters));