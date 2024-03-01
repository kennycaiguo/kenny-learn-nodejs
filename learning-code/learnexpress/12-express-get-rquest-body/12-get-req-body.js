let express = require('express')
let bodyParser = require('body-parser')
let port = 8000

let app = express()
//设置静态资源服务
app.use(express.static(__dirname+'/public'))
//获取urlParser
let urlParser = bodyParser.urlencoded({extended:false})
//处理json格式的请求体，这里用不到
// let jsonParser = bodyParser.json()
//配置login路由,urlParser是作为路由中间件来使用的
app.post('/login',urlParser,(req,res)=>{
    console.log(`
       表单数据：
       用户名：${req.body.username}
       密码：${req.body.password}
    `);
    res.send('ok')
})
app.listen(port,()=>{
    console.log(`Ready : http://127.0.0.1:${port}/`);
})