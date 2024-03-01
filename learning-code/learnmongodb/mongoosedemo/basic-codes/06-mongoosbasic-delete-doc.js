//删除数据，使用promise新语法
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
    name:{
      type:String,
      required:true,
      unique:true
    },
    author:{
      type:String,
      default:'匿名'
    },
    style:{
      type:String,
      enum:['言情','推理','小说','城市','战争']
    },
    price:Number,
    is_hot:Boolean,
    tags:Array,
    pub_time:Date
  })
  //1.2创建模型对象,bookModel就是对应books集合，她可以完成数据的增删改查
  let bookModel = mongoose.model("books",bookSchema)
  //1.3新增数据 ，使用bookModel的create()方法

// 2.删除数据
//2.1删除一条数据
  // bookModel.deleteOne({
  //   _id:"65dfac18d08ecefefbdaddbc"
  // }).then(data=>{
  //   console.log(data);
  //   mongoose.disconnect() //实际开发中，不能机场6断开数据库连接，这里是为了方便调试
  // }).catch(err=>{
  //   console.log(err);
  //   return
  // })
//2.2删除多条数据,例如我们把数据库里面所有17.8元是书都删除，为了方便数据恢复，我把bookshop数据库复制了一份改名bookshop2
    bookModel.deleteMany({
      price:17.8
    }).then(data=>{
      console.log(data);
      mongoose.disconnect() //实际开发中，不能机场6断开数据库连接，这里是为了方便调试
    }).catch(err=>{
      console.log(err);
      return
    })
})

db.on('close',()=>{
  console.log("关闭数据库...");
})