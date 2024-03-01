let express = require('express')

//创建应用对象
let app = express()
//获取路由参数
app.get('/:id.html',(req,res)=>{ //在路径后面:后面的是路由参数
    res.setHeader('Content-type','text/html;charset=utf-8')
    res.write(req.params.id) //路由参数响应使用req.params.参数名的方式来获取
    res.end()

})
 
 
//.监听端口，启动服务
let port =8000
app.listen(port,()=>{
    console.log(`server is ready :http://localhost:${port}/`);
})
