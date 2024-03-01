let http = require('http')
let url = require('url')

let port =9000
let data = ''
http.createServer((req,res)=>{
   
   req.on("data",chunk=>{
      data += chunk
   })
   req.on('end',()=>{
    //    console.log(data);
      // res.setHeader( "content-type","multipart/form-data")
      console.log(data);
      res.write(data) 
      res.write("hello")
    //    console.log("finished");
     res.end()
     data = ''
   })


}).listen(port,()=>{
    console.log(`vist: http://localhost:${port}/`);
})