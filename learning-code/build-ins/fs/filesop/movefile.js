let fs = require('fs')
fs.rename("./zym2.txt","./test/z.txt",err=>{
    if(err){
        console.log(err);
        return 
    }
    console.log("文件移动成功");
})