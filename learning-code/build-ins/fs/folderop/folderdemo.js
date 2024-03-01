let fs = require('fs')
let deleteFolder = require('./myFileUtils')

//1.创建文件夹
// fs.mkdir("testFolder",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('文件夹创建成功');
// })
// fs.mkdir("testFolder/test1/hello",{recursive:true},(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('文件夹创建成功');
// })

//2.读取文件夹的内容
// fs.readdir('./testFolder',{recursive:true},(err,files)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(files);
// })

//3.删除文件夹,只能删除空文件夹
// fs.rmdir('./testFolder/test',(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("删除成功");
// })





//自己封装删除非空
// deleteFolder("./wjj1")

fs.rm('./mydir',{recursive:true},err=>{
    if(err){
        console.log(err);
        return
    }
    console.log("finished...");
})