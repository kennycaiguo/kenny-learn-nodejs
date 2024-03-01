let express = require('express')

//创建应用对象
let app = express()
//创建路由
app.get('/home',(req,res)=>{
    res.end("<h1>welcome to home page</h1>")
})
//4.监听端口，启动服务
let port =8000
app.listen(port,()=>{
    console.log(`server is ready :http://localhost:${port}/`);
})
