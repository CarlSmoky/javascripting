const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// Implement a function biggestFollower() which returns the name of the individual who follows the most people.

const biggestFollower = () => {
  let mostFollows = 0;
  let result = "";
  for (let f in data) {
    if (mostFollows < data[f].follows.length) {
      mostFollows = data[f].follows.length;
      result = data[f].name;
    }
  }
  console.log(result);
  return result;
};

biggestFollower();


// Implement mostPopular() which returns the name of the most popular (most followed) individual.

const makeNumOfFolowersObj = (data) => {
  const newObj = {};
  for (const e in data) {
    for (let f of data[e].follows) {
      let num = 0;
      if (newObj[f]) {
        num = newObj[f];
      }
      num += 1;
      newObj[f] = num;
    }
  }
  return newObj;
};

const makeArray = (newObj) => {
  const mostPopulerArr = [];
  let num = 0;
  for (const e in newObj) {
    if (num <= newObj[e]) {
      num = newObj[e];
    }
  }
  for (const e in newObj) {
    if (newObj[e] === num) {
      mostPopulerArr.push(data[e].name);
    }
  }
  return mostPopulerArr;
};

const mostPopular = () => {
  const newObj = makeNumOfFolowersObj(data);
  const mostPopulerArr = makeArray(newObj);
  const string = mostPopulerArr.join(', ');
  console.log(string);
};

mostPopular();


// Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.

const getFollowedBy = (e) => {
  let followedBy = [];
  for (let g in data) {
    if (data[g].follows.includes(e)) {
      followedBy.push(data[g].name);
    }
  }
  return followedBy;
};

const getFollowers = (e) => {
  let followers = [];
  for (let f of data[e].follows) {
    followers.push(data[f].name);
  }
  return followers;
};

const printAll = () => {
  for (let e in data) {
    const followers = getFollowers(e);
    const followedBy = getFollowedBy(e);
    console.log(data[e].name);
    console.log("follows: ", followers);
    console.log("followed by: ", followedBy);
  }
};
// printAll();
// Implement unrequitedFollowers() which returns a list of names for those who follow someone that doesn't follow them back.
const notFollowedBackBy = (e) => {
  let notFollowedBY = [];
  for (let g of data[e].follows) {
    if (!data[g].follows.includes(e)) {
      notFollowedBY.push(data[g].name);
    }
  }
  return notFollowedBY;
};

const unrequitedFollowers = () => {
  for (let e in data) {
    const notFollowedBY = notFollowedBackBy(e);
    console.log(data[e].name, "is following but they don't follow back", notFollowedBY);
  }
};

unrequitedFollowers();

// Implement some or all these remaining functions.

// Identify who has the most followers over 30
const getMostFollowersOver30 = () => {
  let numOfFollowers = 0;
  let mostFollowedBy = "";
  for (let e in data) {
    if (data[e].age > 30 && data[e].follows.length > numOfFollowers) {
      numOfFollowers = data[e].follows.length;
      mostFollowedBy = data[e].name;
    }
  }
  console.log(mostFollowedBy);
};

getMostFollowersOver30();


// Identify who follows the most people over 30

const followMostOver30 = () => {
  let name = '';
  for (let e in data) {
    let biggest = '';
    for (let g of data[e].follows) {
      let count = 0;
      if (data[g].age > 30) {
        count += 1;
      }
      if (count > biggest) {
        name = data[g].name;
      }
    }
  }
  console.log(name);
};

followMostOver30();

// List everyone and their reach (sum of # of followers and # of followers of followers)
const countFollowers = (e) => {
  let countFollowers = 0;
  for (let el in data) {
    if (data[el].follows.includes(e)) {
      countFollowers += 1;
    }
  }
  return countFollowers;
};

const sum = () => {
  for (let e in data) {
    const numFollowers = countFollowers(e);
    console.log(data[e].name, "is followed by", numFollowers, "people and following", data[e].follows.length, "people");
    for (let g of data[e].follows) {
      const numOfFollowers = countFollowers(g);
      console.log(data[g].name, "is followed by", numOfFollowers);
    }
    console.log("--------");
  }
};

sum();
