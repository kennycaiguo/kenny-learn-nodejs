const { log } = require('console')
let fs = require('fs')

// fs.stat('./filesop',(err,data)=>{
//     if(err){
//         log("err")
//         return
//     }
//     log(data)
// })

let sta = fs.statSync('./folderop')
log(sta)
log(sta.isFile()) //false
log(sta.isDirectory()) //true
