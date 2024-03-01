let mongoose = require('mongoose')

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

//导出模型对象
module.exports = bookModel
