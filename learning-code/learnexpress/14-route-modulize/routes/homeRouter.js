let express = require('express')
//创建路由对象
let router = express.Router()
//创建路由规则
//前台
router.get('/home',(req,res)=>{ 
    res.send("前台首页")
 })
 //搜索
 router.get('/search',(req,res)=>{ 
    res.send("内容搜索")
 })

 module.exports = router