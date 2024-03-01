// console.log("hello nodejs");
let fs = require('fs')
// fs.writeFile("hello.txt","hello ,i am a file created by nodejs",(err)=>{
//     console.log(err);
// })

// fs.readFile("hello.txt",(err,data)=>{ //注意这里的data是字节来的，需要使用String(data)转换
//     if(err){
//         console.log(err);
//     } else{
//         console.log(String(data));
//     }
// })

let res = fs.readFileSync("hello.txt")
console.log(String(res));
