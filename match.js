const matches = [
  { winner: 'Alice', loser: 'Bob', loser_points: 3 },
  { winner: 'Carol', loser: 'Dean', loser_points: 1 },
  { winner: 'Elise', loser: 'Bob', loser_points: 2 },
  { winner: 'Elise', loser: 'Carol', loser_points: 4 },
  { winner: 'Alice', loser: 'Carol', loser_points: 2 },
  { winner: 'Carol', loser: 'Dean', loser_points: 3 },
  { winner: 'Dean', loser: 'Elise', loser_points: 2 },
];

// ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']

const listPlayer = () => {
  let players = [];
  matches.map(e => {
    players.includes(e.winner) ? null : players.push(e.winner);
    players.includes(e.loser) ? null : players.push(e.loser);
  });
  return players;
};

// console.log(listPlayer());


// {
//   'Alice': ['Bob', 'Carol'],
//   'Bob':   [],
//   'Carol': ['Dean'],
//   'Dean':  ['Elise'],
//   'Elise': ['Bob', 'Carol'],
// }

const loser = () => {
  const players = listPlayer();
  let matchingResult = {};
  players.map(player => {
    let losers = [];
    matches.map(match => {
      match.winner === player && !losers.includes(match.loser) ? losers.push(match.loser) : null;
    });
    matchingResult[player] = losers;
  });
  return matchingResult;
};

const loser2 = () => {
  const result = {};
  for (const match of matches) {
    if (result[match.winner] && !result[match.winner].includes(match.loser)) {
      // console.log("1", result);
      result[match.winner].push(match.loser);
    } else {
      result[match.winner] = [match.loser];
      // console.log("2", result);
    }
    if (!result[match.loser]) {
      result[match.loser] = [];
      // console.log("3", result);
    }
  }
  return result;
};

const loser3 = () => {
  const result = {};
  for (const match of matches) {
    if (result[match.winner]) {
      console.log("1", result);
      result[match.winner].add(match.loser);
    } else {
      result[match.winner] = new Set();
      result[match.winner].add(match.loser);
      console.log("2", result);
    }
    if (!result[match.loser]) {
      result[match.loser] = new Set();
      // console.log("3", result);
    }
  }
  Object.entries(result).forEach(([winner, losersSet]) => {
    result[winner] = Array.from(losersSet);
  });
  return result;
};

console.log(loser());
console.log(loser2());
console.log(loser3());


let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet);

let arrFromSet = Array.from(mySet);
console.log(arrFromSet);