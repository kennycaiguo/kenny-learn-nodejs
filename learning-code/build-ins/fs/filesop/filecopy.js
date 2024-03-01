let fs = require('fs')

// //方式1，使用readFile
// fs.readFile('./结构化思维.pdf',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     fs.writeFile('./jghsw.pdf',data,err=>{
//         console.log(err);
//     })
// })
//方式2，使用流
let rs = fs.createReadStream('./结构化思维.pdf')
let ws = fs.createWriteStream('./jghsw3.pdf')
// rs.on('data',chunk=>{
//     ws.write(chunk)
// })
// rs.on('end',()=>{
//     console.log("复制完成");
// })
// let rs = fs.createReadStream('./zym.txt')
// let ws = fs.createWriteStream('./zmycpy.txt')
// rs.forEach(line => {
//     ws.write(line)
// });
rs.pipe(ws)
