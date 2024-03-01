let http = require('http')
let fs = require('fs')

let tabledata = fs.readFileSync('./table.html')
let port = 3700

http.createServer((req,res)=>{
     res.setHeader("content-type","text/html;charset=utf-8")
     res.write(tabledata)
     res.end()
}).listen(port,()=>{
    console.log(`server is ready : http://localhost:${port}`);
})