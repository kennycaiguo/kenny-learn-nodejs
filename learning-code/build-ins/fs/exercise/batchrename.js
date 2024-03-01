//练习，批量文件重命名
let fs = require('fs')
// let path = require('path')
// let files = fs.readdirSync(__dirname+'/myfile')
// // console.log(files);
// files.forEach(file =>{
//     let prefix =file.split('-')[0]
//     let remain = file.split('-')[1]
//     // console.log(prefix);
//     if(prefix.length<2){
//         prefix = '0' + prefix
//     }
//     let fullname = path.join(__dirname,'/myfile/'+prefix+'-'+remain)
//     let oldname = path.join(__dirname,'/myfile/'+file)
//     fs.renameSync(oldname,fullname)
// })

let files = fs.readdirSync('./myfile')
files.forEach(file =>{
    let [pre,name] = file.split('-')
    if(Number(pre)<10){
        pre = '0'+pre
    }
    let newName = pre+'-'+name
    // console.log('./myfile/'+newName);
    fs.renameSync( `./myfile/${file}`,`./myfile/${newName}`)
})