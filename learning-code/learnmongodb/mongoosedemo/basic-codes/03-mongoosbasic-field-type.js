//字段类型，使用新的promise语法
let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/bookshop')
 
//设置数据库回调事件处理
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); //连接失败
db.once('open', function() { //连接成功
  // we're connected!
  console.log("数据库连接成功");
  //所有的业务代码都需要在这里写，不能写在外面
  //1.新增数据
  //1.1先创建文档的结构对象Schema,添加Boolean类型
  let bookSchema = new mongoose.Schema({
    name:String,
    author:String,
    price:Number,
    is_hot:Boolean,
    tags:Array,
    pub_time:Date
  })
  //1.2创建模型对象,bookModel就是对应books集合，她可以完成数据的增删改查
  let bookModel = mongoose.model("books",bookSchema)
  //1.3新增数据 ，使用bookModel的create()方法

bookModel.create({
     name:"西游记",
     author:"吴承恩",
     price:18.8,
     is_hot:true,
     tags:['神话传说','四大名著'],
     pub_time:new Date()
  }).then(data=>{
    console.log(data);
    mongoose.disconnect()
  }).catch(err=>{
    console.log(err);
    return
  })

})

db.on('close',()=>{
  console.log("关闭数据库...");
})