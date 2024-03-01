//插入多条文档数据,promise语法
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
      enum:['言情','推理','小说','城市','战争','理财','思维']
    },
    price:Number,
    is_hot:Boolean,
    tags:Array,
    pub_time:Date
  })
  //1.2创建模型对象,bookModel就是对应books集合，她可以完成数据的增删改查
  let bookModel = mongoose.model("books",bookSchema)
  //1.3新增多条数据 ，使用bookModel的insertMany()方法
  let newBooks1 = [
    {
        name:"富爸爸21世纪的生意",
        author:"罗伯特·清崎",
        style:'理财',
        price:17.5,
        is_hot:true,
        tags:['理财','财商思维'],
        pub_time:new Date()
   },
    {
        name:"决定孩子一生幸福的财商教育",
        author:"卫裕峰 ",
        style:'理财',
        price:35.5,
        is_hot:true,
        tags:['理财','财商思维'],
        pub_time:new Date()
   },
    {
        name:"富爸爸财务自由之路",
        author:"罗伯特·清崎",
        style:'理财',
        price:45,
        is_hot:true,
        tags:['理财','财商思维'],
        pub_time:new Date()
   },
    {
        name:"餐巾纸金融学：30秒内快速提高财商",
        author:"蒂娜·海伊",
        style:'理财',
        price:30.8,
        is_hot:true,
        tags:['理财','财商思维'],
        pub_time:new Date()
   },
    {
        name:"个体突围：真正的高手，都有破局思维",
        author:"艾玛・加侬",
        style:'思维',
        price:25,
        is_hot:true,
        tags:['思维','心计'],
        pub_time:new Date()
   },
    {
        name:"破局_打造人才供应链",
        author:"许锋",
        style:'思维',
        price:21,
        is_hot:true,
        tags:['思维','心计'],
        pub_time:new Date()
   },
    {
        name:"同桌的你",
        author:"苏陌",
        style:'言情',
        price:25,
        is_hot:false,
        tags:['言情','爱情小说'],
        pub_time:new Date()
   },
    {
        name:"初恋",
        author:"库列绍夫",
        style:'言情',
        price:10.8,
        is_hot:false,
        tags:['言情','爱情小说'],
        pub_time:new Date()
   },
    {
        name:"大诱拐",
        author:"天藤真 ",
        style:'推理',
        price:9.8,
        is_hot:false,
        tags:['推理','小说'],
        pub_time:new Date()
   },
    {
        name:"月光森林",
        author:"葵田谷",
        style:'推理',
        price:12.8,
        is_hot:false,
        tags:['推理','小说'],
        pub_time:new Date()
   },
    {
        name:"幸运数字3",
        author:"玛格瑞.爱琳汉姆",
        style:'推理',
        price:22.8,
        is_hot:true,
        tags:['推理','小说'],
        pub_time:new Date()
   },
    {
        name:"谋杀的魅影",
        author:"褚盟",
        style:'推理',
        price:25,
        is_hot:true,
        tags:['推理','恐怖'],
        pub_time:new Date()
   },
  ]
  // let newBooks = [
  //   {
  //       name:"天龙八部",
  //       // author:"",
  //       style:'言情',
  //       price:18.8,
  //       is_hot:true,
  //       tags:['神话传说','武侠小说'],
  //       pub_time:new Date()
  //  },
  //   {
  //       name:"射雕英雄传",
  //       // author:"曹雪芹",
  //       style:'言情',
  //       price:18.8,
  //       is_hot:true,
  //       tags:['神话传说','四大名著'],
  //       pub_time:new Date()
  //  },
  //   {
  //       name:"金瓶梅",
  //       // author:"曹雪芹",
  //       style:'言情',
  //       price:18.8,
  //       is_hot:true,
  //       tags:['神话传说','四大禁书'],
  //       pub_time:new Date()
  //  },
  //   {
  //       name:"倚天屠龙记",
  //       author:"曹雪芹",
  //       style:'言情',
  //       price:18.8,
  //       is_hot:true,
  //       tags:['神话传说','武侠小说'],
  //       pub_time:new Date()
  //  },
  // ]
  bookModel.insertMany(newBooks1).then(data=>{
    console.log(data);
    mongoose.disconnect()
  })
})

db.on('close',()=>{
  console.log("关闭数据库...");
})