var express = require('express');
var router = express.Router();
//引入模型
let accountModel = require('../model/accountModel')
//导入moment库
let moment = require('moment')
// console.log(moment('2023-02-23').toDate());//ok

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//显示账本列表的路由，从数据库读取所有文档数据渲染到页面
router.get('/account', function(req, res, next) {
  //获取所有账单信息,按时间倒序排列
  accountModel.find().sort({time:-1}).then(data=>{
    res.render('list',{data:data,moment:moment});
  }).catch(err=>{
    res.status(500).send("读取数据失败")
    return
  })
  
});

//添加记录的路由
router.get('/account/create', function(req, res, next) {
  res.render('create');
});
//接收表单数据的路由
router.post('/account', function(req, res) {
  //express的脚手架帮我们添加了解析表单数据的中间件功能，所以这里我们可以直接使用req.body
  // console.log(req.body); 
  //用mongodb保存数据
  accountModel.create({
      ...req.body,
      time:moment(req.body.time).toDate()
    })
   .then(data=>{
     console.log(data);
     let msg = "数据添加成功"
     let url = '/account'
     res.render('success',{msg,url})
   }).catch(err=>{
     log(err)
     res.status(500).send("插入数据失败")
     return
   })
  
});

//删除记录的路由
router.get('/account/:id', function(req, res, next) {
  let id = req.params.id
  // console.log(id)
  //删除记录
  // db.get("accounts").remove({id:id}).write()
  accountModel.deleteOne({_id:id}).then(data=>{
      console.log(data);
      let msg = "数据删除成功"
      let url = '/account'
      res.render('success',{msg,url}) //复用上面的success页面
  }).catch(err=>{
    log(err)
     res.status(500).send("插入数据失败")
     return
  })
  
});
module.exports = router;

