const TreeConstructor = strArr => {

  //1. Parants have at most 2 children: parents = { parent: [child1, child2]}
  //2. Each child has at most parent; children = { child: parent }
  //3. Iterate across strArr and check all conditions remain tree
  // let arr = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];
  let parents = {};
  let children = {};

  //"(1,2)" => ["1", "2"]
  for (let i = 0; i < strArr.length; i++) {
    // strArr[0]:  "(1,2)"
    //Remove ()
    let pair = strArr[i].replace(/[()]/g,"").split(",");
    //pair:  [ '1', '2' ]
    let child = pair[0];
    let parent = pair[1];
    console.log("child: ", child);
    console.log("parent: ", parent);
    console.log("parents: ", parents);

    if (parents[parent]) {
      parents[parent].push(child);
    } else {
      parents[parent] = [child];
    }
    console.log("parents: ", parents);
    if (parents[parent].length > 2) {
      console.log("here1");
      return false;
    }
    
    console.log("children: ", children);
    if (children[child]) {
      console.log("here2");
      return false;
    } else {
      children[child] = parent;
    }
    // console.log("children: ", children);
  }
  return true;
};

// code goes here
//   let nodeArr = strArr.map(a => a.match(/[0-9]+/g).map(a => Number(a)));
//   let result = 0;

//   let node = {
//     value: 0,
//     left: null,
//     right: null,
//     parent: null
//   };

//   const newNode = (v, l, r, p) => {
//     let n = Object.create(node);
//     n.value = v;
//     n.left = l;
//     n.right = r;
//     n.parent = p;
//     return n;
//   };

//   const findNode = (v, arr) => {
//     for (let i = 0, max = arr.length; i < max; i++) {
//       if (arr[i].value === v)
//         return arr[i];
//     }
//     return null;
//   };

//   let setNode = new Set();
//   for (let i = 0, max = nodeArr.length; i < max; i++) {
//     setNode.add(nodeArr[i][0]);
//     setNode.add(nodeArr[i][1]);
//   }
//   setNode = [...setNode];

//   let treeNode = [];
//   for (let i = 0, max = setNode.length; i < max; i++) {
//     let v = setNode[i];
//     treeNode.push(newNode(v, null, null, null));
//   }

//   for (let i = 0, max = nodeArr.length; i < max; i++) {
//     let n = nodeArr[i];
//     let ch = findNode(n[0], treeNode);
//     let pa = findNode(n[1], treeNode);
//     ch.parent = pa;

//     if (pa.value < ch.value) {
//       pa.right = ch;
//     } else if (pa.value > ch.value) {
//       pa.left = ch;
//     } else if (pa.right !== null && pa.left !== null) {
//       result = false;
//       return result;
//     }
//   }

//   // find root
//   let root = null;
//   let rootCnt = 0;
//   for (let i = 0, max = treeNode.length; i < max; i++) {
//     if (treeNode[i].parent === null) {
//       root = treeNode[i];
//       rootCnt += 1;
//     }
//   }

//   if (rootCnt >= 2) {
//     return false;
//   }

//   // traverse
//   let traverseNode = [];
//   const traverse = n => {
//     if (n === null) return;
//     traverseNode.push(n.value);
//     traverse(n.left);
//     traverse(n.right);
//   };

//   traverse(root);

//   traverseNode.sort((a, b) => a - b);
//   setNode.sort((a, b) => a - b);
//   // code goes here
//   return traverseNode.join('') === setNode.join('');

// };

// keep this function call here
let arr = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];
arr = ["(1,2)", "(3,2)", "(2,12)", "(5,2)"];
arr = ["(1,2)", "(3,2)", "(1,12)", "(5,2)"];
console.log(TreeConstructor(arr));

