let express = require('express')

let app = express()
let port = 8000
app.use(express.static(__dirname+'/public'))
app.get("/home",(req,res)=>{
    res.send('<h1>welcome home</h1>')
})

app.listen(port,()=>{
    console.log(`Server: http://127.0.0.1:${port}/`);
})