let http = require('http')
let querystring = require('querystring')
// let https = require('https')
let axios = require('axios')

let postData = querystring.stringify({
    province: '上海',
    city: '上海',
    district:'宝山区',
    address:'上海市宝山区密山路5号',
    latitude: 43.0,
    longtitude:160.0,
    message:'求购一条小鱼',
    contact: '134466666',
    type:'sell',
    time: 1531217561
})
// let postData = JSON.stringify({
//     province: '上海',
//     city: '上海',
//     district:'宝山区',
//     address:'上海市宝山区密山路5号',
//     latitude: 43.0,
//     longtitude:160.0,
//     message:'求购一条小鱼',
//     contact: '134466666',
//     type:'sell',
//     time: 1531217561
// })

let options = {
    protocol:'http:',
    hostname:'localhost',
    method:'POST' ,
    port:3000,
    path: '/data',
    headers:{
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json;charset=utf-8',
        'Content-Length': Buffer.byteLength(postData)
    }
}


let port = 8000;
let server = http.createServer((request, response)=>{

    // let  req = http.request(options,(result)=>{
    //     console.log(result)
    // })
    // req.write(postData)
    // req.end()
    // response.end('response')
    axios.post('http://localhost:3000/data',postData)
         .then(res=>{
            response.writeHead(200,{
                "content-type":"application/json;charset=utf-8",
                "access-control-allow-origin":'*'
            })
            response.end(JSON.stringify(res))
         })
         .catch(err=>{
            console.log(err);
         })
    
})

server.listen(port,()=>{
    console.log(`server is ready : http://localhost:${port}/`)
})