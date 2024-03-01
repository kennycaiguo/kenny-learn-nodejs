let http = require('http')
let url = require('url')

let port = 3500
// 以/search?kw=webgl&id=5为例
http.createServer((req,res)=>{
   let urlObj = url.parse(req.url,true) //这里需要把第二个参数设置为true就会把querystring解析为一个对象
   //获取路径,就是端口号后面？前面的路径字符串
   console.log(urlObj.pathname);
   //获取查询字符串里面的查询关键字
   console.log(urlObj.query.kw);
   res.write("ok")
   res.end()
}).listen(port,()=>{
    console.log(`vist: http://localhost:${port}/`);
})