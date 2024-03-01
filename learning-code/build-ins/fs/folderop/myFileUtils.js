let fs = require('fs')
//删除非空目录的函数
function deleteFolder(filePath) {
    let files = []
    if(fs.existsSync(filePath)){
       files = fs.readdirSync(filePath)
       files.forEach(file=>{
         //构建完整路径，因为readdirSync得到的是最后一级路径
         let fullPath = `${filePath}/${file}`
         //判断是文件还是文件夹
         let stats = fs.statSync(fullPath)
         
         if(stats.isDirectory()){ 
             //是文件夹就要遍历
             deleteFolder(fullPath)
         } else {
            //是文件就直接删除
            fs.rmSync(fullPath)
         }
         
    })
       fs.rmdirSync(filePath)
    }
    console.log("删除完成...");
}

module.exports = deleteFolder