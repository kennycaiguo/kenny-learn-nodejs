//查找数据，使用promise新语法
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
  //查找一条数据，我们先在命令行把bookshop2的数据重新拷贝到bookshop，需要先删除bookshop数据库
  // bookModel.findOne({name:"红楼梦"})
  //     .then(data=>{
  //       console.log(data);
  //       mongoose.disconnect()
  //     })
  //     .catch(err=>{
  //       console.log(err);
  //       return
  //   })
  //根据id来查找
  //  bookModel.findById('65dfbc6e10b2936a63de6204')
  //     .then(data=>{
  //       console.log(data);
  //       mongoose.disconnect()
  //     })
  //     .catch(err=>{
  //       console.log(err);
  //       return
  //     })
  //查询多条数据，例如查找所有18.8元的书
  //   bookModel.find({price:18.8})
  //   .then(data=>{
  //     console.log(data);
  //     mongoose.disconnect()
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //     return
  // }) 
  //查询所有文档数据，使用find()没有参数
    // bookModel.find().then(data=>{
    //   console.log(data);
    //   mongoose.disconnect()
    // }).catch(err=>{
    //   console.log(err);
    //   return
    // })
    
    //高级条件查询，使用条件表达式
    //$ne,例如查找所有is_hot不是true的书
    // bookModel.find({"is_hot":{$ne:true}})
    //   .then(data=>{
    //     console.log(data);
    //     mongoose.disconnect()
    //   }).catch(err=>{
    //     console.log(err);
    //     mongoose.disconnect()
    //     return
    //   })
    bookModel.where("is_hot").ne(true)
      .then(data=>{
        console.log(data);
        mongoose.disconnect()
      }).catch(err=>{
        console.log(err);
        mongoose.disconnect()
        return
      })
     //查询条件为数组
  //   bookModel.find({"price":[15,25]}) //只要符合其中一个就可以了
  //   .then(data=>{
  //   console.log(data);
  //   mongoose.disconnect()
  //   }).catch(err=>{
  //   console.log(err);
  //   mongoose.disconnect()
  //   return
  // })
   //$or高级查询，如查询价钱为15或者25的书
  //  bookModel.find({$or:[{price:15},{price:25}]})
  //      .then(data=>{
  //       console.log(data);
  //       mongoose.disconnect()
  //      }).catch(err=>{
  //       console.log(err);
  //       mongoose.disconnect() //实际开发中不用经常disconnect，这里是方便调试而已
  //       return
  //     })
  // 如查询价钱小于15或者大于25的书
    bookModel.find({$or:[{price:{$lt:15}},{price:{$gt:25}}]})
    .then(data=>{
      console.log(data);
      mongoose.disconnect()
    }).catch(err=>{
      console.log(err);
      mongoose.disconnect()
      return
  })
    //$and 查找is_hot为false并且价格小于22的书
    bookModel.find({$and:[{is_hot:false},{price:{$lt:22}}]})
    .then(data=>{
      console.log(data);
      mongoose.disconnect()
    }).catch(err=>{
      console.log(err);
      mongoose.disconnect()
      return
  })
   //正则表达式条件查询，如查询书名包含'富'的书
  //   bookModel.find({name:/富/})
  //   .then(data=>{
  //     console.log(data);
  //     mongoose.disconnect()
  //   }).catch(err=>{
  //   }).catch(err=>{
  //     console.log(err);
  //     mongoose.disconnect()
  //     return
  // })
  bookModel.find({name:new RegExp('富')})
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