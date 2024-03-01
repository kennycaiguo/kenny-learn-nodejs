let express = require('express')

//创建应用对象
let app = express()
//创建路由,get请求
app.get('/',(req,res)=>{
    res.end("<h1>welcome to Index page</h1>")
})
app.get('/home',(req,res)=>{
    res.end("<h1>welcome to home page</h1>")
})
//创建路由,post请求
app.post('/login',(req,res)=>{
    res.end("<h1>login page</h1>")
})
// 创建路由,all请求，就是只匹配路径，不管什么请求方式都功能访问到
app.all('/test',(req,res)=>{
    res.end("<h1>test page</h1>")
})
//响应404 *表示如果上面的都匹配不上就会走这里
app.all('*',(req,res)=>{
    res.end("<h1>Not Found</h1>")
})
//4.监听端口，启动服务
let port =8000
app.listen(port,()=>{
    console.log(`server is ready :http://localhost:${port}/`);
})
