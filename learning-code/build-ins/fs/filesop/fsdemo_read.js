let fs = require('fs')

// fs.readFile('./座右铭.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("文件内容:\n",String(data)); //读取的是字节需要用String进行转换
// })

//同步读取
let data = fs.readFileSync('./座右铭.txt')
console.log("文件内容:\n",String(data));