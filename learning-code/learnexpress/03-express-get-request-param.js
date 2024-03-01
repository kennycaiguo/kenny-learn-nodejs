let express = require('express')

//创建应用对象
let app = express()
//创建路由,get请求
// app.get('/request',(req,res)=>{
//     //1.使用nodejs原生方式获取
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.httpVersion);
//     console.log(req.headers);
//     //2.使用express的方式获取，也就是这些方式只能在express里面使用
//     console.log(req.query); //获取查询字符串
//     //获取指定的请求头信息
//     console.log(req.get('host'));

//     res.end('ok')

// })
 
app.all('*',(req,res)=>{
    //1.使用nodejs原生方式获取
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);
    //2.使用express的方式获取，也就是这些方式只能在express里面使用
    console.log(req.query); //获取查询字符串
    console.log(req.path); //获取请求路径，这么写是express才有
    console.log(req.ip);//获取客户端的ip地址
    console.log(req.get('host'));//获取指定的请求头信息

    res.end('ok')

})
 

//.监听端口，启动服务
let port =8000
app.listen(port,()=>{
    console.log(`server is ready :http://localhost:${port}/`);
})
