let http = require('http')
let https = require('https')
let querystring = require('querystring')

//端口
let port = 2000
let server = http.createServer((req,res)=>{
    let data = ''
    // let testUrl ='https://www.google.com/search?q=https+%E6%B5%8B%E8%AF%95%E6%8E%A5%E5%8F%A3&sca_esv=54af7326df9a1a15&sxsrf=ACQVn08iW2Fal8FPobZOZxqehJKruk4hFA%3A1708215311429&source=hp&ei=D0zRZaftF7-ywt0Pp_GskA4&iflsig=ANes7DEAAAAAZdFaHwxRuf59qmsnXjlXK97d-6XqV1Ue&oq=https&gs_lp=Egdnd3Mtd2l6IgVodHRwcyoCCAAyBBAjGCcyChAjGIAEGIoFGCcyBBAjGCcyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjFH1AAWL4McAB4AJABAJgBxgKgAasIqgEHMC4zLjEuMbgBAcgBAPgBAcICCxAuGIAEGMcBGNEDwgIFEC4YgAQ&sclient=gws-wiz'
    // let testUrl ='https://www.google.com/search?q=https' //ok
    // let testUrl ='https://en.wikipedia.org/wiki/Girls_(TV_series)' //ok
    // let testUrl ='https://dictionary.cambridge.org/zhs/%E8%AF%8D%E5%85%B8/%E8%8B%B1%E8%AF%AD-%E6%B1%89%E8%AF%AD-%E7%AE%80%E4%BD%93/pussy' //ok
    // let testUrl ='https://sogou.com/web?query=girls&_asf=www.sogou.com&_ast=1708216463&w=01019900&p=40040100&ie=utf8&from=index-nologin&s_from=index&sut=2532&sst0=1708216463282&lkt=5%2C1708216460751%2C1708216461555&sugsuv=1708216456647776&sugtime=1708216463282'
    // let testUrl2 ='https://reqable.com/zh-CN/docs/rest/'
    let testUrl2 ='https://github.com/kennycaiguo'
    https.get(testUrl2,(result)=>{
        result.on('data',(chunk)=>{
            data += chunk
        })
        result.on('end',()=>{
            res.writeHead(200,{
                "Conten-type":"application/json;charset=utf-8",
                "access-control-allow-origin":"*"
            })
            res.write(data)
           res.end()
        })
    })
})

server.listen(port,()=>{
    console.log(`server is ready at:http://localhost:${port}/`);
})
