var express = require('express');
var router = express.Router();
//导入文件上传处理库
// let {formidable} = require('formidable')
let formidable = require('formidable')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//显示上传表单
router.get('/portrait',(req,res)=>{
  res.render('portrait')
})

//处理文件上传
router.post('/portrait',(req,res,next)=>{
  //  const form = formidable({
  //   multiples:true,
  //   //设置上传文件的保存目录
  //   uploadDir:__dirname + '/../public/images',
  //   //保留文件后缀
  //   keepExtensions:true
  // });
   const form = new formidable.IncomingForm({
    multiples:true,
    //设置上传文件的保存目录
    uploadDir:__dirname + '/../public/images',
    //保留文件后缀
    keepExtensions:true
  })
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // res.json({ fields, files });
    // console.log(fields);
    console.log(files);
    //保存图片路径
    //http://localhost:3000/images/4a62e1fd78ddf822235643400.jpg
    // console.log("portrait:",files.portrait);
    let imgUrl = '/images/'+files.portrait[0].newFilename
    // console.log(imgUrl);
    res.send(imgUrl) //这里直接返回给用户，等我们学习了数据库，我们需要把它保存到数据库
  });
  
})

module.exports = router;
