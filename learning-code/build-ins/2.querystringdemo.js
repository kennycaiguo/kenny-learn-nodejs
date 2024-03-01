
let querystring = require('querystring')
//1.parse方法
let query = 'id=2&name=tongyi&from=北京'
let qret = querystring.parse(query) 
// console.log(qret);//[Object: null prototype] { id: '2', name: 'tongyi', from: '北京' }
// console.log(qret.id); //2
//2.escape方法，对汉字和非字符符号进行编码
let escape = querystring.escape(query)
// console.log(escape); //id%3D2%26name%3Dtongyi%26from%3D%E5%8C%97%E4%BA%AC
//3.url解码方法unescape
let unescaped = querystring.unescape(escape)
// console.log(unescaped); //id=2&name=tongyi&from=北京
//4.stringfy方法添加分隔符并且对汉字编码
let urlObj = {'id':2,name:'tongyi',from:'北京'}
// let str_url =querystring.stringify(urlObj,'/') 
// console.log(str_url) //id=2/name=tongyi/from=%E5%8C%97%E4%BA%AC
//5.stringfy的特殊用法
let queryObj = querystring.stringify(urlObj,null,null,{
    encodeURIComponent(string){
        return querystring.unescape(string)
    }
})

const { log } = require('console') //把控制台对象的log方法解构出来直接使用
log(queryObj) //id=2&name=tongyi&from=北京