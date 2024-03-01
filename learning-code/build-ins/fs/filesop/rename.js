let fs = require('fs')

fs.rename('./zmycpy.txt','./zym2.txt',err=>{
     if(err){
        console.log(err);
        return
     }
     console.log("重命名成功");
})