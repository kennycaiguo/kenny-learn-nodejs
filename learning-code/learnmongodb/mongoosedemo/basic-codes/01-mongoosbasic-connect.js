let mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1/test')
mongoose.connect('mongodb://127.0.0.1/test1')
 
//设置数据库回调事件处理
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); //连接失败
db.once('open', function() { //连接成功
  // we're connected!
  console.log("数据库连接成功");
  //所有的业务代码都需要在这里写，不能写在外面
  
  

});
db.on('close',()=>{
  console.log("关闭数据库...");
})