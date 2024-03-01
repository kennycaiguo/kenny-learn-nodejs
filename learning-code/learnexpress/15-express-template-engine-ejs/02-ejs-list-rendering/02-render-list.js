let ejs = require('ejs')
let fs = require('fs')

let xiyou = ['唐僧','孙悟空','猪八戒','沙僧']

let str = fs.readFileSync('./02-html.html').toString()//读取的内容在Buffer对象中需要转化为字符串

let result = ejs.render(str,{xiyou:xiyou})

console.log(result);


