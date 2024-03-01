let fs = require('fs')
let rs = fs.createReadStream('./座右铭.txt')
// rs.on('data',(chunk)=>{ //每一次默认读取64kb
//     console.log(chunk.toString());
// })
// rs.on('end',()=>{ 
//     console.log("读取完毕");
// })

rs.forEach(line=>{
    console.log(String(line));
})
