let http = require('http')
let fs = require('fs')

let port = 3700
let site = `http://localhost:${port}/`

http.createServer((req,res)=>{
    // console.log(req.url)
    //  res.setHeader("content-type","text/html;charset=utf-8")//这个不要写因为它把所有的东西都指定为html这里是不对的
     let url = new URL(req.url,site)
       console.log(url)
     let {pathname} =url
    //  console.log(pathname);
     if(pathname ==='/'){
        let tabledata = fs.readFileSync(__dirname+'/table.html')
        res.end(tabledata)
     } else if(pathname==='/css/style.css'){
        let cssdata = fs.readFileSync(__dirname+'/css/style.css')
        res.end(cssdata)

     } else if(pathname === '/js/index.js'){
        let jsdata = fs.readFileSync(__dirname+'/js/index.js')
        res.end(jsdata)
     } else {
        res.statusCode =404
        res.end("<h1>not found</h1>")
     }


     
}).listen(port,()=>{
    console.log(`server is ready : ${site}`);
})