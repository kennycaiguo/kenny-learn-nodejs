let http = require('http')
let url = require('url')

let port = 5000
let server = http.createServer((request,response)=>{
    // response.writeHead(200,{
    //     "content-type":"text/html;charset=utf-8",
    //     "access-control-allow-origin":'*'
    // })
    response.setHeader("content-type","application/x-www-form-urlencoded;charset=utf-8") 
    // console.log(request.url);
    let urlObj = url.parse(request.url)
    // console.log(urlObj);
    // console.log(urlObj.path);
    // console.log(urlObj.pathname);
    // console.log(urlObj.href);
    
    switch (request.url) {
        case '/':
            response.write('root')
            break;
        case "/index.html":
           response.write("<h1>欢迎来到首页</h1>")
           break;
        case "/facebook":
            response.write("<a href='https://www.facebook.com'>facebook</a>")
           break;
        case "/google":
            response.write("<a href='https://www.google.com'>google</a>")
            break;
        case "/json":
            response.write('{"name":"Jackline"}')
            break;
        case "/reg":
           
            let data = ''
            request.on('data',(chunk)=>{
                data += chunk
            })
            request.on('end',()=>{
                response.write(data)
            })
        default:
            response.write("not found")
            break;
    }
    response.end()
})

server.listen(port,()=>{
    console.log(`visit : http://localhost:${port}/`);
})