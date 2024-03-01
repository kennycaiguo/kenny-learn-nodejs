let express = require("express");
let port = 8000;
let app = express();
//限制特定网址的中间件,需要在静态服务中间件之前调用否则没有任何意义
app.use((req,res,next)=>{
    //检测请求头的referer属性值是否为127.0.0.1
    //1.获取url完整路径
    let referer = req.get('referer')
    //2.利用URL实例来获得主机名
    if(referer){
        let hostname = new URL(referer).hostname
        if(hostname !=='127.0.0.1'){
           //响应404
           res.status(404).send("<h1>Not Found</h1>")
           return
        }
    }
    next()
    // console.log(referer);
    
 })
app.use(express.static(__dirname+'/public'))//静态服务器，根据需要配置

app.listen(port, () => {
  console.log("server is ready :http://localhost:" + port + "/");
});
