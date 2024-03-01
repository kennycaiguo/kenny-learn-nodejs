let http = require('http')
let querystring = require('querystring')
let port = 3000
let server = http.createServer((request,response)=>{
       let data =''
       request.on('data',(chunk)=>{
        data += chunk
       })
       request.on('end',()=>{
          response.writeHead(200,{
            "Content-type":"application/json;charset=utf-8",
            // "Content-type":"text/html;charset=utf-8",
            "access-control-allow-origin":'*'
          })
          
          strdata = querystring.stringify(data)
        //   strdata = JSON.stringify(data)
          
          console.log(strdata);
          response.write('ok')
          response.end()
       })
})

server.listen(port,()=>{
    console.log(`server is ready: http://localhost:${port}/`);
})