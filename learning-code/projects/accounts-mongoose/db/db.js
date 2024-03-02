/**
 * 
 * @param {
 *   success :连接成功的回调函数
 *   error :连接失败的回调函数
 * } 
 * @returns 
 */
module.exports = function(success,error) { //导出函数
    if(typeof error !=='function'){
        error = ()=>{
            console.log("数据库连接失败~~");
        }
    }
    let mongoose = require('mongoose')
    //导入配置文件
    let {DBHOST,DBPORT,DBNAME} = require('../config/config')
    let dbUrl = `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`
    mongoose.connect(dbUrl)
    
    //设置数据库回调事件处理
    var db = mongoose.connection;
    db.on('error', ()=>{
        console.log("连接失败");
        return
    }); //连接失败
    db.once('open', ()=> { //连接成功
       success()
    })
    
    db.on('close',()=>{
        console.log("关闭数据库...");
    })

    
}
