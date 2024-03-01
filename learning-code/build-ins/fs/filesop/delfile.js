let fs = require('fs')
//1.fs.unlink()
// fs.unlink('./zym copy.txt',err=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('文件删除成功');
// })

//2.fs.rm
fs.rm('./zym copy.txt',err=>{
        if(err){
            console.log(err);
            return
        }
        console.log('文件删除成功');
})