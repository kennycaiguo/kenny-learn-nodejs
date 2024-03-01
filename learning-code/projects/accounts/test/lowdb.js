const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
//创建数据库
const db = low(adapter)
//初始化数据
// db.defaults({ posts: [], user: {} }).write()

//写入数据
// db.get('posts').push({id:1,title:"今天天气非常热，让你受不了"}).write()
// db.get('posts').unshift({id:2,title:"今天真走运，买到很好的菜"}).write()

//获取数据
//1.获取所有数据
// console.log(db.get('posts').value());
//2.查找数据
// console.log(db.get('posts').find({ id: 1 }).value());
//3.修改一条数据
// db.get('posts').find({'id': 1}).assign({title:"今天真冷啊。。。"}).write()
//删除数据
db.get('posts').remove({id:1}).write();//把id为1的那条数据删除

//设置user对象的属性
// db.set('user.name',"Mary").write()
// db.set('user.gender',"Female").write()
// db.set('user.age',30).write()

//获取user的属性
// console.log(db.get('user.name').value());
// console.log(db.get('user.gender').value());
// console.log(db.get('user.age').value());

