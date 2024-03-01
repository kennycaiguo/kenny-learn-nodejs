let http = require('http')
let fs = require('fs')
let path = require('path')

let port = 9000
let site = `http://localhost:${port}/`
//定义应该对象来保存常见mime类型
let mimes ={
    html:"text/html",
    css:"text/css",
    js:"text/javascript",
    png:"image/png",
    jpg:"image/jpeg",
    gif:"image/gif",
    mp4:"video/mp4",
    mp3:"audio/mpeg",
    json:"application/json"
}

http.createServer((req,res)=>{
    //注意我们的静态资源服务器是处理get请求的，我们需要首先判断请求方式是否正确，如果用户发送post请求，我们需要返回一个错误
    if(req.method!=='GET'){
        res.setHeader("Content-type","text/html;charset=utf-8")
        res.statusCode = 405
        res.end('<h1>请求方式错误</h1>')
        return
    }
    // 静态资源服务器是根据用户的输入来匹配本地资源，如果有就返回内容给用户，如果没有就返回not found
    //  res.setHeader("content-type","text/html;charset=utf-8")//这个不要写因为它把所有的东西都指定为html这里是不对的
    //从路径获取资源文件名称
    let url = new URL(req.url,site)
    //    console.log(url)
     let {pathname} =url //获取路径
     //处理/,相当于重定向
     if(pathname==='/'){
        pathname +='index.html'
     }

    //  console.log(pathname);
    //定义网站的根目录
    // let rootPath =__dirname+'/page' 
    let rootPath =path.resolve(__dirname+'/page')
    
    let filePath =rootPath + pathname //注意此时输入/index.html就会变为/page/index.html
    //异步方法读取文件
    fs.readFile(filePath,(err,data)=>{
      if(err){
        //   console.log(err);
          res.setHeader("Content-type","text/html;charset=utf-8")
         switch(err.code){
            //找不到资源
            case 'ENOENT': //错误代码可以在nodejs官网找到
                res.statusCode = 404
                res.end('<h1>not found</h1>')
            break;
            //没有权限
            case 'EPERM':
                res.statusCode = 403
                res.end('<h1>没有权限</h1>')
            break;
            default:
                //如果都不是上面的错误，就是服务器内部错误
                res.statusCode =500
                res.end('<h1>服务器内部错误</h1>')
                break;
         }
        
         return
      }
       //获取文件的后缀名,需要处理一下，因为我们不需要.
       let ext = path.extname(filePath).slice(1)
       console.log(ext);
       //设置网站的mime类型，这里不能写死，因为这里的类型会改变，需要根据用户请求的文件的扩展名来确定mime类型
       //获取对应的类型
       let type = mimes[ext]
       //需要看看type是否有值，如果没有就是匹配不到
       if(type){
        //匹配到了
        if(ext==='html'){
            res.setHeader("Content-type",type+";charset=utf-8") //只有html才需要字符集编码
        } else {
          res.setHeader("Content-type",type)
        }
       } else{
        // 没有匹配到，如果都不是上面的类型，就可以设置为下载类型，浏览器会把这个资源下载到本地
        res.setHeader("Content-type","application/octet-stream") //这种就是供下载的文件的mime类型
       }
       
       res.end(data)
    })
 
}).listen(port,()=>{
    console.log(`server is ready : ${site}`);
})


