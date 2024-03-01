let http = require('http')


let port = 3500
let site = `http://localhost:${port}/`
// 以/search?kw=webgl&id=5为例
http.createServer((req,res)=>{
   let url = new URL(req.url,site) //'http://localhost:3500/search?kw=webgl&id=5'
   console.log(url);
   console.log(url.pathname);
   console.log(url.searchParams.get('kw'));
   res.write("ok")
   res.end()
}).listen(port,()=>{
    console.log(`vist:${site}`);
})