let express = require('express')
//创建应用对象
let app = express()

//获取路由参数
//前台
app.get('/home',(req,res)=>{ 
   res.send("前台首页")
})
//定义路由中间件函数
let checkCodeMiddleWare = (req,res,next)=>{
   //判断url是否有code并且等于521
 if(req.query.code === '521'){
      next()
   } else {
      res.send('暗号错误')
   }
}
//后台
app.get('/admin',checkCodeMiddleWare,(req,res)=>{ 
   
   res.send("后台首页")
})

//后台设置
app.get('/setting',checkCodeMiddleWare,(req,res)=>{ 
   res.send("设置页面")
})
app.all('*',(req,res)=>{ 
   res.send("<h1>Not Found</h1>")
})
 
 
//.监听端口，启动服务
let port =8000
app.listen(port,()=>{
    console.log(`server is ready :http://127.0.0.1:${port}/`);
})
