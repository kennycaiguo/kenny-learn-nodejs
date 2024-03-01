let mongoose = require('mongoose')
//导入函数
let db = require('./db/db') 
//导入模型
let bookModel = require('./model/bookModel')
//使用我们封装的函数
db(()=>{
  //1.3新增数据 ，使用bookModel的create()方法
        bookModel.create({
            name:"韦小宝",
            author:"金庸",
            style:'言情',
            price:30,
            is_hot:true,
            tags:['神话传说','四大名著'],
            pub_time:new Date()
        }).then(data=>{
         console.log(data);
         mongoose.disconnect()
        }).catch(err=>{
            console.log(err);
            return;
        })

  }) 


