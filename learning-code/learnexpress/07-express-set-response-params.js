let express = require('express')

//创建应用对象
let app = express()
//获取路由参数
app.get('/response',(req,res)=>{ 
    //1.兼容原生nodejs
    // res.statusCode=200
    // res.statusMessage="OK"
    // res.setHeader('author','kenny')
    //2.express的写法
    // res.status(200)
    // res.set("content-type","text/javascript")
    // res.send('<a href="https://www.google.com">google</a>')
    //3.也可以链式操作
    // res.status(200).set("Content-type","text/html;charset=utf-8").send('<a href="https://www.google.com">google</a>')
    //4.其他响应
    // res.end()//下面的方法不要写，否则没有效果
    // res.redirect("http://atguigu.com")
    // res.download(__dirname+'/package.json')
    res.json({
        name:"kenny",
        age:50
    })
    // res.sendFile(__dirname+"/index.html") 
    
    
})
 
 
//.监听端口，启动服务
let port =8000
app.listen(port,()=>{
    console.log(`server is ready :http://localhost:${port}/`);
})
