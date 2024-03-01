let ejs = require('ejs')
let fs = require('fs')
//字符串拼接
let china = '中国'
//新内容
let comment = "今天天气很好，我们出去郊游吧~~"
let str =fs.readFileSync('./01-html.html').toString()
//使用ejs渲染

let result = ejs.render(str,{data:china,comment})
console.log(result);