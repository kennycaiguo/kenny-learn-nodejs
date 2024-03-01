//mongoose查询后处理，promise语法
let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/bookshop')
 
//设置数据库回调事件处理
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); //连接失败
db.once('open', function() { //连接成功
  // we're connected!
  console.log("数据库连接成功");
  //所有的业务代码都需要在这里写，不能写在外面
  
  //先创建文档的结构对象Schema,添加Boolean类型
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
  //创建模型对象,bookModel就是对应books集合，她可以完成数据的增删改查
  let bookModel = mongoose.model("books",bookSchema)
  //新增数据 ，使用bookModel的create()方法
  //select,字段筛选,0表示不要的字段1表示要的字段
    // bookModel.find().select({price:1,is_hot:1}).exec()
    // .then(data=>{
    //         console.log(data);
    //         mongoose.disconnect()
    //     }).catch(err=>{
    //       console.log(err);
    //       mongoose.disconnect()
    //       return
    //     })

  // //sort,1表示从小到大，-1表示吃点东西吧
  //  bookModel.find().sort({price:-1}).exec()
  //   .then(data=>{
  //       console.log(data);
  //       mongoose.disconnect()
  //   }).catch(err=>{
  //     console.log(err);
  //     mongoose.disconnect()
  //     return
  //   })
  //数据截取，skip跳过 limit限定
  //查询所有数据然后跳过5条，然后按照price降序排列再取出前5条
  bookModel.find().sort({price:-1}).limit(5).exec()
    .then(data=>{
        console.log(data);
        mongoose.disconnect()
    }).catch(err=>{
      console.log(err);
      mongoose.disconnect()
      return
    })
   
})

db.on('close',()=>{
  console.log("关闭数据库...");
})