let path = require('path')

//1.path.sep属性
// console.log(path.sep); // 输出 \
//2.resolve()拼接路径
// console.log(path.resolve('c:\\',"test"));//c:\test

//3.parse()方法解析路径返回一个对象
// let pathObj = path.parse(__filename) 
// console.log(pathObj);
//4.path.dirname()
// console.log(path.dirname(__filename));//获取当前文件路径的目录路径，不包含文件名
//5.path.extname()获取扩展名,包含.
// console.log(path.extname(__filename)); //.js
//6.basename()获取文件名不包含路径
console.log(path.basename(__filename)); //pathdemo.js
