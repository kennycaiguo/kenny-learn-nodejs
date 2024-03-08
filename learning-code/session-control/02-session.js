let express = require('express')
//导入express-session和connect-mongo
let session = require('express-session')
let MongoStore = require('connect-mongo')

let port = 3000
let app = express()
//app.use(express.static(__dirname+'/public'))//静态服务器，根据需要配置
//设置并且全局注册express-session中间件
app.use(session({
    name:'sid',//设置cookie的name，默认是connect.sid
    secret:"atguigu",//参与加密的字符串，又叫做签名
    saveUninitialized:false,//是否为每一次请求都设置一个cookie用来存储session的id
    resave:true,//是否在每一次请求时重新保存session
    store:MongoStore.create({
        mongoUrl:'mongodb://127.0.0.1:27017/project' //数据库连接配置
    }),
    cookie:{
        httpOnly:true, //开启后，前端无法通过js操作
        maxAge:1000*60*5 //控制session id的过期时间和cookie的过期时间
    }
}))

app.get('/',(req,res)=>{
     res.end('<h1>welcome</h1>')
})

//添加login路由
app.get('/login',(req,res)=>{
   //username=admin&password=admin
   if(req.query.username==='admin' && req.query.password==='admin'){
      //设置session信息
      req.session.username='admin'
      req.session.uid = '258aefccc'
      res.send('登录成功')
   } else {
    res.send('登录失败')
   }
})
app.get('/cart',(req,res)=>{
    //访问购物车是需要登录的
    //可以检测session是否存在用户数据来查看用户是否登录
    if(req.session.username){
        res.send(`${req.session.username},欢迎来到购物车页面`)
    }else{
        res.send("你没有登录，请先登录")
    }
})
//用户推出登录服务器需要销毁session
app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.send('退出成功...')
    })
})

app.listen(port,()=>{
     console.log('server is ready :http://localhost:'+port+'/');
})