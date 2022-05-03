// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

const myFunction = (a, b) => {
  // let secondHalf = b.split('').reverse().filter(letter => letter !== '%').join('');
  // let Uppercase = '';
  // for (let i in a) {
  //   if (i === '0') {
  //     Uppercase += a[i].toUpperCase();
  //   } else {
  //     Uppercase += a[i];
  //   }
  // }
  // let firstHalf = Uppercase.split('').filter(letter => letter !== '%').join('');
  

  // return firstHalf + secondHalf;

  const func = x => x.replace('%','');
  const first = func(a);
  const second = func(b).split('').reverse().join('');
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
};

console.log(myFunction('java', 'tpi%rcs')); //'Javascript'
console.log(myFunction('c%ountry', 'edis')); //'Countryside'
console.log(myFunction('down', 'nw%ot')); //'Downtown'