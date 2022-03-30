const LongestWord = sen => {

  // code goes here
  const removedPanctiations = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  const arrSen = removedPanctiations.split(" ");
  let longestWord = "";
  arrSen.forEach(el => {
    if (el.length > longestWord.length) longestWord = el;
  });
  return longestWord;
};
   
// keep this function call here 
let sentence = "fun&!! time";
console.log(LongestWord(sentence));