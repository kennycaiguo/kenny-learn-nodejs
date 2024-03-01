let express = require('express')
let homeRouter = require('./routes/homeRouter') //导入自己写的路由文件
let adminRouter = require('./routes/adminRouter')
//创建应用对象
let app = express()

//获取路由参数
app.use(homeRouter) //使用路由文件
app.use(adminRouter) //使用路由文件

app.all('*',(req,res)=>{ 
   res.send("<h1>Not Found</h1>")
})
 
 
//.监听端口，启动服务
let port =8000
app.listen(port,()=>{
    console.log(`server is ready :http://127.0.0.1:${port}/`);
})
