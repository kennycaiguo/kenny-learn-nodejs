var express = require('express');
var router = express.Router();
//引入lowdb库
const low = require('lowdb')
//引入shortid随机自动生成id
let shortid = require('shortid')
const FileSync = require('lowdb/adapters/FileSync')
  //创建数据适配器
const adapter = new FileSync(__dirname+'/../data/db.json')
//创建数据库
const db = low(adapter)

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//显示账本列表的路由
router.get('/account', function(req, res, next) {
  //获取所有账单信息
  let data = db.get('accounts').value()
  console.log(data);
  res.render('list',{data});
  // res.render('list2',{data}); //不好看
});

//添加记录的路由
router.get('/account/create', function(req, res, next) {
  res.render('create');
});
//接收表单数据的路由
router.post('/account', function(req, res) {
  // console.log(req.body); //express的脚手架帮我们添加了解析表单数据的中间件功能，所以这里我们可以直接使用req.body
  //用lowdb保存数据
  db.get("accounts").unshift({id:shortid.generate(),...req.body}).write()
  let msg = "数据添加成功"
  let url = '/account'
  res.render('success',{msg,url})
});

//删除记录的路由
router.get('/account/:id', function(req, res, next) {
  let id = req.params.id
  // console.log(id)
  //删除记录
  db.get("accounts").remove({id:id}).write()
  // res.send("数据删除成功：<a href='/account'>返回账本列表</a>")
  let msg = "数据删除成功"
  let url = '/account'
  res.render('success',{msg,url}) //复用上面的success页面
});
module.exports = router;
