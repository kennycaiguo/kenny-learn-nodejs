let uniq = require('uniq')
// console.log("index.js...");
let arr = [1,2,3,4,5,4,3,2,1]

let ret = uniq(arr)//会改变原数组
console.log(ret);
console.log(arr);
