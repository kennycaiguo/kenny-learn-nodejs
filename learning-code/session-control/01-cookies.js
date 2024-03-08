let express = require('express')
let port = 8000
let app = express()
//导入cookie-parser
let cookieParser = require('cookie-parser')
//全局注册cookie-parser中间件
app.use(cookieParser())
//app.use(express.static(__dirname+'/public'))//静态服务器，根据需要配置
app.get('/set-cookie',(req,res)=>{
     res.cookie("name","admin") //这样子设置的cookie会在浏览器关闭的时候销毁
    //  res.cookie("name","supervisor",{maxAge:60*1000})//maxAge的时间的单位是毫秒60*1000就是60秒
     res.cookie("theme","blue",{maxAge:60*1000})//maxAge的时间的单位是毫秒60*1000就是60秒
     res.end('<h1>welcome</h1>')
})

app.get('/remove-cookie',(req,res)=>{
     res.clearCookie('name')
     res.send('ok')
})
//获取cookie的路由规则
app.get('/get-cookie',(req,res)=>{
    //获取cookie并且输出
    console.log(req.cookies);
    res.send(`欢迎你${req.cookies.name}`)
})


app.listen(port,()=>{
     console.log('server is ready :http://localhost:'+port+'/');
})