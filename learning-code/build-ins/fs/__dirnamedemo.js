let fs = require('fs')

//保证不管你在哪里运行程序，都在同一个目录里面创建文件

fs.writeFileSync(__dirname+"/test.txt","this is a test file",err=>{
    if(err){
        console.log(err);
        return
    }
    console.log("文件创建成功");
})