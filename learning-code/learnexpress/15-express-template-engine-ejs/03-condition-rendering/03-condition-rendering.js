let ejs = require('ejs')
let fs = require('fs')

/*
 练习：利用变量isLogin来显示内容
true 输出<span>欢迎回来</span>
false 输出 <button>登录</button><button>注册</button>
*/
let isLogin = true

//获取模板文件的内容
let html = fs.readFileSync('./03-html.html').toString()
let result = ejs.render(html,{isLogin:isLogin})

 console.log(result);
