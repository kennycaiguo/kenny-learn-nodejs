let fs = require('fs')
//1.写入文件
let data="三人同行，必有我师"
// fs.writeFile("./座右铭.txt",data,(err)=>{
//     console.log(err);
// })
// fs.writeFileSync("./zym.txt",data) //同步写入，没有返回值
//2.1.追加写入,异步
// data="\n好好学习，天天向上"
// fs.appendFile("./座右铭.txt",data,(err)=>{
//         console.log(err);
// })

//2.2 同步追加
data = "\n各人自扫门前雪，哪管他人瓦上霜"
fs.appendFileSync("./zym.txt",data)
data ="\n酒不醉人人自醉"
//扩展：用writeFile函数来追加内容
fs.writeFile("./座右铭.txt",data,{flag:'a'},err=>{
    if(err){
        console.log(err);
        return
    }
    console.log("追加成功");
})