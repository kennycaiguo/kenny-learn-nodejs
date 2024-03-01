let express = require('express')

let router = express.Router()
//后台
router.get('/admin',(req,res)=>{ 
   
    res.send("后台首页")
 })
 
 //后台设置
 router.get('/setting',(req,res)=>{ 
    res.send("设置页面")
 })

 //导出roter
 module.exports = router
