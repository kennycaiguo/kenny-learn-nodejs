let express = require('express')
let ejs = require('ejs')
let fs = require('fs')

let port = 8000
let app = express()
app.use(express.static(__dirname+'/public'))//静态服务器，根据需要配置
//读取test.html的内容
let html = fs.readFileSync(__dirname+'/public/ejs/test.html').toString()
let result = ejs.render(html,{data:["cpp",'python','golang','js']})
app.get('/test',(req,res)=>{
     res.send(result)
})
app.listen(port,()=>{
     console.log('server is ready :http://localhost:'+port+'/');
})