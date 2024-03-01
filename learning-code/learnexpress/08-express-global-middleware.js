let express = require('express')
let fs = require('fs')
let path =require('path')


//创建应用对象
let app = express()
//1.定义中间件函数
function logMiddleWare(req,res,next) {
    //获取url和ip
    let {url,ip} = req
    //保存信息到access.log文件
    fs.appendFileSync(path.resolve(__dirname,"./access.log"),`${url} -- ${ip} time:${new Date().toLocaleString()}\r\n`)
    //调用next函数
    next()
}
//2.使用中间件函数
app.use(logMiddleWare)
//获取路由参数
app.get('/home',(req,res)=>{ 
   res.send("前台首页")
})
app.get('/admin',(req,res)=>{ 
   res.send("后台首页")
})
app.all('*',(req,res)=>{ 
   res.send("<h1>Not Found</h1>")
})
 
 
//.监听端口，启动服务
let port =8000
app.listen(port,()=>{
    console.log(`server is ready :http://127.0.0.1:${port}/`);
})
