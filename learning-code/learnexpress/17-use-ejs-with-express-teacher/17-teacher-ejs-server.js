let express = require('express')
let path = require('path')

let port = 8000
let app = express()
//1.设置模板引擎
app.set("view engine",'ejs')
//2.设置模板文件的存放位置
app.set("views",path.resolve(__dirname,'./views'))
app.use(express.static(__dirname+'/public'))//静态服务器，根据需要配置
app.get('/home',(req,res)=>{
    let title = '尚硅谷 - 让天下没有难学的技术'
     //3.调用render函数
     res.render('home',{title})
     //需要在views文件夹里面创建一个home.ejs,后缀名一定是ejs，否则找不到文件
})
app.listen(port,()=>{
     console.log('server is ready :http://localhost:'+port+'/');
})