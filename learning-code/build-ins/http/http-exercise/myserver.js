let http = require('http')
let fs = require('fs')
let port = 3600

http.createServer((req,res)=>{
  switch (req.url) {
    case '/':
        res.end(fs.readFileSync("./pages/index.html"))
        break;
    case '/login':
        res.end(fs.readFileSync("./pages/login.html"))
        break;
    case '/reg':
        res.end(fs.readFileSync("./pages/reg.html"))
        break;
  
    default:
        res.end("<h1>Welcome to index</h1>")
        break;
  }
}).listen(port,()=>{
    console.log(`Server is ready : http://localhost:${port}/`);
})