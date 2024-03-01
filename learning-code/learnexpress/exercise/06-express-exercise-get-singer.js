let express = require('express')
//使用require函数导入歌手信息的json文件，导入后自动成为一个对象，
// 不过这里最好使用解构赋值，直接获取里面的singer数组
let {singers} = require('./singer.json')
// console.log(singers);
//创建应用对象
let app = express()
//获取路由参数
app.get('/singer/:id.html',(req,res)=>{ //在路径后面:后面的是路由参数
    res.setHeader('Content-type','text/html;charset=utf-8')
    let id = req.params.id //这里获取到的是字符串，需要转化为数字，否则下面数组中找不到
    // 在数组中使用find方法来查找歌手
    let singer = singers.find(item=>item.id === Number(id))
    //如果没有找到，需要返回Not Found
    if(!singer){
        res.statusCode = 404
        res.end("<h1>Not Found</h1>")
        return
    }
    // console.log(singer);
    res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        <h1>${singer.singer_name}</h1><br>
        <img src=${singer.singer_pic}>
        </body>
        </html>`) //路由参数响应使用req.params.参数名的方式来获取
    // res.write(singer.singer_pic) //路由参数响应使用req.params.参数名的方式来获取
    res.end()

})
 
 
//.监听端口，启动服务
let port =8000
app.listen(port,()=>{
    console.log(`server is ready :http://127.0.0.1:${port}/`);
})
