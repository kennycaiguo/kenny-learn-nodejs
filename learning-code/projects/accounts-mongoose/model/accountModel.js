let mongoose = require('mongoose')

let accountSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    time:Date,
    type:{
        type:Number,
        default:-1
    },
    account:{
        type:Number,
        required:true
    },
    remarks:String,
    
})
//创建模型对象,accountModel就是对应accounts集合，她可以完成数据的增删改查
let accountModel = mongoose.model("accounts",accountSchema)

//导出模型对象
module.exports = accountModel
