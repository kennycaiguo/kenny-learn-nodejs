/* 
1. Use the inquirer npm package to get user input.

2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
//为了能够使用import,需要在package.json里面把type改为"module"
import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"

inquirer.prompt([
    {
        message:"Type in your URL",
        name:"URL"
    },
])
.then((anwser)=>{
    let url = anwser.URL;
    let qr_svg = qr.image(url); //生成二维码图片
    qr_svg.pipe(fs.createWriteStream("qrImage.png"));

    fs.writeFile("myurl.txt",url,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("file saved");
        
    })

})
.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
