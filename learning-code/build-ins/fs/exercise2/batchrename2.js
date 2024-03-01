//练习，批量文件重命名,删除了02开头的文件，然后把03-10的文件改为以02-09开头
let fs = require('fs')

let files = fs.readdirSync('./myfile')
//1.01文件是不用处理的我们把03-10开头的文件过滤出来
let newFiles = files.filter(item=>!item.startsWith('01'))
// console.log(newFiles); //得到03-10开头的文件
newFiles.forEach(file=>{
    //得到开头和'-'后面的部分
    let [pre,name] = file.split('-')
    let newpre = `0${Number(pre)-1}`
    // console.log(newpre);//得到02-09
    let newname = newpre+ '-'+name
    // console.log(newname);
    fs.renameSync( `./myfile/${file}`,`./myfile/${newname}`)
})

// files.forEach(file =>{
//     let [pre,name] = file.split('-')
//     if(Number(pre)<10){
//         pre = '0'+pre
//     }
//     let newName = pre+'-'+name
//     // console.log('./myfile/'+newName);
//     fs.renameSync( `./myfile/${file}`,`./myfile/${newName}`)
// })