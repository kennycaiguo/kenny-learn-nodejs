//新增数据，使用新的promiser语法
let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/mybooks')
 
//设置数据库回调事件处理
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); //连接失败
db.once('open', function() { //连接成功
  // we're connected!
  console.log("数据库连接成功");
  //所有的业务代码都需要在这里写，不能写在外面
  //1.新增数据
  //1.1先创建文档的结构对象Schema
  let bookSchema = new mongoose.Schema({
    name:String,
    author:String,
    price:Number
  })
  //1.2创建模型对象,bookModel就是对应books集合，她可以完成数据的增删改查
  let bookModel = mongoose.model("books",bookSchema)
  //1.3新增数据 ，使用bookModel的create()方法

// bookModel.create({name:"天龙八部",author:"不详",price:18.8}).then(data=>{
//   console.log(data);
//   mongoose.disconnect()
// });
// bookModel.create({name:"倚天屠龙记",author:"金庸",price:18.8}).then(data=>{
//   console.log(data);
//   mongoose.disconnect()
// });
bookModel.create({name:"白蛇传",author:"未知",price:18.8}).then(data=>{
  console.log(data);
  mongoose.disconnect()
 }).catch(err=>{
   console.log(err);
   return;
 })

})

db.on('close',()=>{
  console.log("关闭数据库...");
})